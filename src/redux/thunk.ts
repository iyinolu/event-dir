/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginPayLoad } from "./reducer/authentication/types";
import { EventCategory } from "./reducer/application/types";
import jwt_decode from "jwt-decode";
import axios from "axios";
import {
  Event,
  TokenClaim,
  UserInfo,
  UserTokenData,
  EventPayload,
  FetchEventPayload,
  FetchEventReturnData,
} from "./types";
import { formatDate } from "../utils/helpers";

export const login = createAsyncThunk<UserInfo, LoginPayLoad>(
  "user/login",
  async (loginBody: LoginPayLoad) => {
    const response = await axios.post(`/api/token/`, loginBody);
    const tokenClaim: TokenClaim = jwt_decode(response.data.access);
    const userInfo: UserTokenData = tokenClaim.user;
    const data: UserInfo = { ...response.data, ...userInfo };

    return data;
  }
);

export const fetchEvents = createAsyncThunk<
  FetchEventReturnData,
  FetchEventPayload,
  {
    state: any;
  }
>("events/getEvents", async (date, thunkAPI) => {
  let data: Event[];
  let parsedDate = formatDate(date.date);
  const eventCache = thunkAPI.getState().AppReducer.eventCache;
  if (eventCache.hasOwnProperty(parsedDate)) {
    data = eventCache[parsedDate];
  } else {
    const response = await axios.get(`/api/events?event_date=${parsedDate}`);
    data = response.data;
  }
  return { data: data, dateQuery: parsedDate };
});

export const fetchEventsCategories = createAsyncThunk<EventCategory[]>(
  "events/getCategory",
  async () => {
    const response = await axios.get(`/api/category`);
    const data: EventCategory[] = response.data;
    return data;
  }
);

export const createNewEvent = createAsyncThunk<Event, EventPayload>(
  "event/create",
  async (data: EventPayload) => {
    const response = await axios.post(`/api/events`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const EventData: Event = response.data;
    return EventData;
  }
);
