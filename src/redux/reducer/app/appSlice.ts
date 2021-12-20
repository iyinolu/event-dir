/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { fetchEvents } from '../../thunk'
import { initialAppState } from './types'

const initialState: initialAppState = {
    event: []
}

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            console.log(state)
        });
        builder.addCase(fetchEvents.fulfilled, (state, {payload}) => {
            console.log(payload)
        })
    }
})

export default AppSlice.reducer