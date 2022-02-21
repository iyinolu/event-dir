/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginPayLoad, AuthState} from "./types";
import { login } from '../../thunk';
import { PlayCircleOutlineSharp } from '@material-ui/icons';
import { storageService } from '../../../utils/helpers';

const initialState: AuthState = {
    isLogin: false,
    email: "",
    access: "",
    refresh: "",
    id: -1,
    is_active: false ,
    username: "",
    firstname: "",
    lastname: ""
}

export const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        SignOutAction: (state) => {
            state.email = ""
            state.isLogin = false          
            state.access = ""
            state.refresh = ""
            state.id = -1
            state.is_active = false
            state.username = ""
            state.firstname = ""
            state.lastname = ""
        },
        ReloadAccessToken: (state, action: PayloadAction<string> ) => {
            state.access = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            console.log(state)
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isLogin = true
            state.email = payload.email      
            state.access = payload.access
            state.refresh = payload.refresh 
            state.id = payload.id
            state.is_active = payload.is_active
            state.username = payload.username
            state.firstname = payload.firstname     
            state.lastname = payload.lastname     
        })

    }
})

export const { SignOutAction, ReloadAccessToken } = AuthSlice.actions
export default AuthSlice.reducer