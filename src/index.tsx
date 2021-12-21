/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import  axios from 'axios';
import { storageService } from './utils/helpers';
import jwt_decode from 'jwt-decode';

axios.interceptors.request.use(
  (config) => {
    var token = storageService.getFromStorage('_eventAccesstoken')
    if (token && !config.url!.includes("/api/token/")) {
      config.headers!.Authorization = `Bearer ${token}`
    }    
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const originalRequest = error.config
    var token = storageService.getFromStorage("_eventRefreshtoken")

    var dect  = jwt_decode<any>(typeof token === "string" ? token : "")
    const now = new Date()
    const expired = now > dect.exp;

    if (expired) {
      //TODO: add redirect to login logic
      return
    }

    if (error.response.status === 401 && token) {
      originalRequest._retry = true;

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({refresh: token}),
      }
      return fetch("http://127.0.0.1:8000/api/token/refresh/", requestOptions)
      .then(res => res.json())
      .then(res => {
        axios.defaults.headers.common["Authorization"] =
                "Bearer " + res.access
        storageService.addToStorage("_eventAccesstoken", res.access) 
        return axios(originalRequest);
      }).catch(err => {
        console.log(err)
      })
    }
    Promise.reject(error)
  }
  
)


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </React.StrictMode>    
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
