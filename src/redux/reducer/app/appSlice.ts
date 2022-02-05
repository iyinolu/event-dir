/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { fetchEvents, fetchEventsCategories } from '../../thunk'
import { initialAppState } from './types'

const initialState: initialAppState = {
    event: [],
    eventCategories: []
}

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        ClearAppState: (state) => {
            state.event = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            console.log(state)
        });
        builder.addCase(fetchEvents.fulfilled, (state, {payload}) => {
            state.event = payload
        });
        builder.addCase(fetchEventsCategories.fulfilled, (state, {payload}) => {
            state.eventCategories = payload
        })
    }
})
export const { ClearAppState } = AppSlice.actions
export default AppSlice.reducer