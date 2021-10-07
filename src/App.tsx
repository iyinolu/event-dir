/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import { RootState } from './redux/store';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'
import { AuthBasePage } from "./auth/authPage";
import BasePage from "./app/index"

function App() {
  const isAuth = useSelector((state: RootState) => state.AuthReducer.isLogin)

  const currentPage = () => {
    switch (isAuth) {
      case false: 
        return <AuthBasePage />
      case true: 
        return <BasePage />
      default:
        return <AuthBasePage />
    }
  }

  return (currentPage())
}

export default App;
