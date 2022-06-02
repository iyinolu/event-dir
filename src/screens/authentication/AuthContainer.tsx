import React from "react";
import Login from "../../components/authentication/login";
import { LoginPayLoad } from "../../redux/reducer/authentication/types";
import { useDispatch } from "react-redux";
import { login } from "../../redux/thunk";
import { useAppSelector } from "../../App";

export function AuthBasePage() {
  const dispatch = useDispatch();
  const { authInProgress } = useAppSelector((state) => state.AuthReducer);

  const [loginInfo, setLoginInfo] = React.useState<LoginPayLoad>({
    email: "",
    password: "",
  });

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = loginInfo;
    dispatch(login(body));
  };

  return (
    <Login
      login={loginUser}
      loginInfoSetter={setLoginInfo}
      loginInfo={loginInfo}
      loginInProgress={authInProgress}
    />
  );
}
