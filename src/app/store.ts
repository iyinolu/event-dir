/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../utils/authentication/authSlice';


export const store = configureStore({
    reducer: {
        auth: AuthReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch