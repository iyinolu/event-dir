/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginPayLoad } from './reducer/authentication/types';
import jwt_decode from 'jwt-decode';
import axios from 'axios';


type Event = {
    event_date: string;
    title: string;
    content: string;
    tag: string;
}
type UserInfo = {
    email: string;
    access: string;
    refresh: string;
    id:number;
    is_active: boolean;
    username: string;
    firstname: string;
    lastname: string;
}
type UserTokenData = {
    id:number;
    email: string;
    is_active: boolean;
    username: string;
}
type TokenClaim = {
    exp: number;
    jti: string;
    token_type: string;
    user: UserTokenData;
}


export const login = createAsyncThunk<UserInfo, LoginPayLoad>(
    'user/login',
    async (loginBody: LoginPayLoad) => {
        const response = await axios.post("http://127.0.0.1:8000/api/token/", loginBody)
        const tokenClaim:TokenClaim = jwt_decode(response.data.access)
        const userInfo:UserTokenData = tokenClaim.user
        const data:UserInfo = {...response.data, ...userInfo }

        return data
    }
)

export const fetchEvents = createAsyncThunk<Event[]>(
    'events/getEvents', 
    async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/events/")
        const data:Event[] = response.data
        return data
    }
)
