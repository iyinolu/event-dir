/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Calendar from "./components/calendar";
import { useDispatch } from 'react-redux'
import { SunIcon } from '@heroicons/react/solid';
import { PlusCircleIcon } from '@heroicons/react/solid';
import Divider from '@mui/material/Divider';
import { SignOutAction } from '../redux/reducer/authentication';
import EventList from './components/display'
import { Grid, Button, TextField} from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';
import { toAbsoluteUrl } from '../utils/helpers';


export default function BasePage() {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date | null>( new Date())

    return (
        <div className="max-h-full fixed h-full">
            <header className="py-2 px-10 flex flex-row items-center justify-between w-screen">
                <div className="flex flex-row items-center">
                    <span className="font-sans py-0.5 px-2 rounded-md" style={{ backgroundColor: "#00FF33"}}>Today</span>
                    <span className="font-sans ml-5"> Friday 7th October </span>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row justify-center py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2">
                        <button className="font-sans">My Account</button>
                    </div>
                    <div className="flex flex-row justify-center ml-9 py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2">
                        <button className="font-sans">All Events</button>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <span><SunIcon className="h-6 w-6 m-2" /></span>
                    <span className="font-sans">Good Afternoon, Micheal</span>
                </div>
            </header>

            <Divider variant="middle" />

            <div className="px-20 mt-3 flex flex-row justify-between items-center">
                <h1 className="font-sans">Events</h1>
                <button onClick={() => { dispatch(SignOutAction()); console.log('hello')} } className="font-sans flex items-center py-1 px-4 rounded-md bg-gray-100 hover:bg-gray-300 border-2 border-grey-500">
                    Add New Event
                    <PlusCircleIcon className="ml-4 h-5 w-5"/>
                </button>
            </div>

            <div className="min-h-full grid max-h-full row-span-4">
                <div className="flex flex-col items-center flex-none col-start-1 col-end-7 box-border pt-3 min-w-full">   
                    <EventList />
                </div>
                <div className="pt-10 flex flex-col items-center justify-start col-start-7 col-end-13 box-border">
                    <Calendar />
                </div>
            </div>
        </div> 
    )
}


/* <Button onClick={() => dispatch(SignOutAction())}>logout</Button> */