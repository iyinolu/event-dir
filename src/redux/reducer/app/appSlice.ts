/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { fetchEvents, fetchEventsCategories, createNewEvent } from '../../thunk'
import { initialAppState } from './types'
import { updateCreateEventStatus } from '../../actions/app'

const initialState: initialAppState = {
    event: [],
    eventCategories: [],
    creatingEventDone: false,
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
        });
        builder.addCase(createNewEvent.pending, (state) => {
            state.creatingEventDone = false
        });
        builder.addCase(createNewEvent.fulfilled, (state, {payload}) => {
            state.creatingEventDone = true
        });
        builder.addCase(updateCreateEventStatus, (state, {payload}) => {
            state.creatingEventDone = payload
        })

    }
})
export const { ClearAppState } = AppSlice.actions
export default AppSlice.reducer