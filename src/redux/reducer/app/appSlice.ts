/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchEvents, fetchEventsCategories, createNewEvent } from '../../thunk'
import { initialAppState } from './types'
import { updateCreateEventStatus } from '../../actions/app'

const initialState: initialAppState = {
    event: [],
    eventCache: {},
    eventCategories: [],
    creatingEventDone: false,
    debugFlag: null,
    debugContent: "",
    fetchingEvent: false
}

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        ClearAppState: (state) => {
            state.event = []
            state.eventCache = {}
            state.eventCategories = []
            state.creatingEventDone = false
        },        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            state.fetchingEvent = true
        });
        builder.addCase(fetchEvents.fulfilled, (state, {payload}) => {
            state.fetchingEvent = false
            const date = payload.dateQuery.toISOString().split("T")[0]
            const hasCachedRecord = state.eventCache.hasOwnProperty(date)

            if (hasCachedRecord && state.eventCache[date] !== payload.data) {
                state.eventCache = {...state.eventCache, [date]: payload.data}
            } else if (!hasCachedRecord) {
                state.eventCache = {...state.eventCache, [date]: payload.data}
            }
            
            state.event = payload.data
        });
        builder.addCase(fetchEventsCategories.fulfilled, (state, {payload}) => {
            state.eventCategories = payload
        });
        builder.addCase(createNewEvent.pending, (state) => {
            state.creatingEventDone = false
        });
        builder.addCase(createNewEvent.fulfilled, (state, {payload}) => {
            let newEventDate = payload.event_date
            const hasCachedRecord = state.eventCache.hasOwnProperty(newEventDate)
            if (hasCachedRecord) {
                state.eventCache = {...state.eventCache, [newEventDate]:[...state.eventCache[newEventDate], payload]}
            } else {
                state.eventCache = {...state.eventCache, [newEventDate]:[payload]}
            }
            state.event = [...state.event, payload]
            state.creatingEventDone = true
        });
        builder.addCase(updateCreateEventStatus, (state, {payload}) => {
            state.creatingEventDone = payload
        })

    }
})
export const { ClearAppState } = AppSlice.actions
export default AppSlice.reducer