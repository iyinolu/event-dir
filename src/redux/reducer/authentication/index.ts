/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginPayLoad, AuthState} from "./types";


const initialState: AuthState = {
    isLogin: false,
    email: "",
    username: ""
}

export const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        LoginAction: (state, action: PayloadAction<LoginPayLoad>) => {
            state.email = action.payload.email
            state.username = action.payload.username
            state.isLogin = true
        },
        SignOutAction: (state) => {
            state.email = ""
            state.username = ""
            state.isLogin = false
        }
    }
})

export const { LoginAction, SignOutAction } = AuthSlice.actions
export default AuthSlice.reducer