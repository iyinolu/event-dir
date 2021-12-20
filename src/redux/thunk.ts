/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginPayLoad } from './reducer/authentication/types';
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
}

export const login = createAsyncThunk<UserInfo, LoginPayLoad>(
    'user/login',
    async (loginBody: LoginPayLoad) => {
        const response = await axios.post("http://127.0.0.1:8000/api/token/", loginBody)
        const data:UserInfo = {...response.data }
        data.email = loginBody.email

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


// const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const body = loginInfo
//     console.log(body)
//     axios.post("http://127.0.0.1:8000/api/token/", body)
//     .then(res => {
//       if (res.status === 200) {
//         storageService.addToStorage("_eventAccesstoken", res.data.access)
//         storageService.addToStorage("_eventRefreshtoken", res.data.refresh)
//         dispatch(LoginAction({username: loginInfo.email, email: loginInfo.email}))
//       }
//     }).catch(err => console.log(err.response))
//   }