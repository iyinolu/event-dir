/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.css";
import { AuthBasePage } from "./screens/authentication/AuthContainer";
import BasePage from "./screens/application/BaseContainer";
import { verifyLoggedInStatus } from "./utils/helpers";
import { fetchEventsCategories } from "./redux/thunk";
import { RootState, AppDispatch } from "./redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";

// Typed useDispatch and useSelector hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function App() {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLogin, refresh } = useAppSelector((state) => state.AuthReducer);
  const [isLoggedIn, setLogin] = React.useState(false);

  React.useLayoutEffect(() => {
    if (refresh) {
      setLogin(verifyLoggedInStatus(refresh, isLogin));
    }
  }, [isLogin, refresh]);

  React.useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchEventsCategories());
    }
  }, [isLoggedIn, dispatch]);

  React.useEffect(() => {
    if (isLogin) {
      navigate("event-dashboard");
    } else {
      navigate("login");
    }
  }, [isLogin, navigate]);

  // const currentPage = () => {
  //   switch (isLoggedIn) {
  //     case false:
  //       return <AuthBasePage />;
  //     case true:
  //       return <BasePage />;
  //     default:
  //       return <AuthBasePage />;
  //   }
  // };

  return (
    <Routes>
      <Route path="login" element={<AuthBasePage />} />
      <Route path="event-dashboard" element={<BasePage />} />
    </Routes>
  );
}

export default App;
