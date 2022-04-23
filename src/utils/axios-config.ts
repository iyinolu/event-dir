/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { AxiosStatic } from "axios";
import { store } from "../redux/store";
import { refreshTokValid } from "./helpers";
import { logout } from "../redux/store";
import { ReloadAccessToken } from "../redux/reducer/authentication/authSlice";

export default function interceptor(axios: AxiosStatic) {
  axios.interceptors.request.use(
    (config) => {
      var token = store.getState().AuthReducer.access;
      if (token && !config.url!.includes("/api/token/")) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      var token = store.getState().AuthReducer.refresh;
      var isValid = refreshTokValid(token);
      if (!isValid) {
        logout();
      }
      if (error.response.status === 401 && token && !originalRequest._retry) {
        originalRequest._retry = true;
        const accessToken = await refreshAccessToken(token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        store.dispatch(ReloadAccessToken(accessToken));
        return axios(originalRequest);
      }
    }
  );
}

async function refreshAccessToken(token: string) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: token }),
  };
  const response = await fetch(`/api/token/refresh/`, requestOptions);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    return;
  }
  const accessToken = await response.json();

  return accessToken.access;
}
