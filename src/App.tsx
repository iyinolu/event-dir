/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import { AuthBasePage } from "./containers/auth/AuthContainer";
import BasePage from "./containers/app/BaseContainer";
import { verifyLoggedInStatus } from './utils/helpers';
import { fetchEventsCategories } from './redux/thunk';
import { RootState, AppDispatch } from './redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import "tailwindcss/tailwind.css"

// Typed useDispatch and useSelector hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

function App() {
  const dispatch = useAppDispatch()
  const {isLogin, refresh} = useAppSelector((state) => state.AuthReducer)
  const [isLoggedIn, setLogin] = React.useState(false)


  React.useLayoutEffect(() => {
    if (refresh) {
      setLogin(verifyLoggedInStatus(refresh, isLogin))
    } 
  }, [isLogin, refresh])

  React.useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchEventsCategories())
    }
  },[isLoggedIn, dispatch])

  const currentPage = () => {
    switch (isLoggedIn) {
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
