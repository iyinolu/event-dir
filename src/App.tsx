/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import { RootState } from './redux/store';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'
import { AuthBasePage } from "./containers/auth/AuthContainer";
import { useAppSelector } from './utils/hooks';
import BasePage from "./containers/app/BaseContainer";
import "tailwindcss/tailwind.css"

function App() {
  const isAuth = useAppSelector((state) => state.AuthReducer.isLogin)
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
