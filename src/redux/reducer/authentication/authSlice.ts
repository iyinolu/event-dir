/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginPayLoad, AuthState} from "./types";
import { login } from '../../thunk';
import { PlayCircleOutlineSharp } from '@material-ui/icons';
import { storageService } from '../../../utils/helpers';

const initialState: AuthState = {
    isLogin: false,
    email: ""
}

export const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        // SignOutAction: (state) => {
        //     state.email = "",
        //     state.isLogin = false
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            console.log(state)
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isLogin = true
            state.email = payload.email            
            storageService.addToStorage("_eventAccesstoken", payload.access)
            storageService.addToStorage("_eventRefreshtoken", payload.refresh)
        })

    }
})

// export const { LoginAction, SignOutAction } = AuthSlice.actions
export default AuthSlice.reducer