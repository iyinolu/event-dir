import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducer/authentication/authSlice'
import AppReducer from './reducer/application/appSlice';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import { ClearAppState } from './reducer/application/appSlice';
import { SignOutAction } from './reducer/authentication/authSlice';

const rootReducer = combineReducers({AuthReducer, AppReducer})
const persistConfig = {
    key: "root",
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const logout = () => {
  // clear all reducer state here.
  store.dispatch(ClearAppState())
  store.dispatch(SignOutAction())
}

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch