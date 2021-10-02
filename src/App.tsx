/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import { RootState } from './app/store';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'
import { AuthBasePage } from "./auth/authPage";

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isLogin)

  const currentPage = () => {
    switch (isAuth) {
      case false: 
        return <AuthBasePage />
      case true: 
        return <h1> Welcome to a place you really want to be</h1>
      default:
        return <AuthBasePage />
    }
  }

  return (currentPage())
}

export default App;
