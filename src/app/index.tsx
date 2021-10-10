/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Calendar from "./components/calendar";
import { useDispatch } from 'react-redux'
import { SunIcon } from '@heroicons/react/solid';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Divider from '@mui/material/Divider';
import { SignOutAction } from '../redux/reducer/authentication';
import { Grid, Button, TextField} from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';


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
                <button onClick={() => { dispatch(SignOutAction()); console.log('hello')} } className="font-sans flex items-center py-1 px-4 rounded-md bg-gray-100 border-2 border-grey-500">
                    Add New Event
                    <PlusCircleIcon className="ml-4 h-5 w-5"/>
                </button>
            </div>

            <div className="min-h-full grid max-h-full row-span-4 pl-16">
                <div className="flex flex-col flex-none col-start-1 col-end-10 box-border pt-5 min-w-full">   
                    <div className="flex flex-col rounded-md bg-gray-100 h-3/4 w-9/12 px-8 pt-10 pb-5">
                        <div className="flex rounded-2xl h-40 w-full bg-white mb-10 px-5 py-4 border-2 border-gray-200">
                            <div className="flex flex-col col-start-1 col-end-8">
                                <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500">Apple Event</h1>
                                <p className="font-sans text-gray-500">California Streaming</p>
                                <span className="flex-initial font-sans text-xs px-3 py-2 bg-blue-300 rounded-lg mt-5">View details</span>
                            </div>
                            <span className="col-start-8 col-end-12"></span>
                        </div>
                        <div className="rounded-md h-32 w-full bg-white border-2 border-gray-200">

                        </div>
                        <div className="flex flex-row justify-center pt-10">
                            <span className="rounded-full p-2 bg-white mr-6 hover:bg-gray-300">
                                <ChevronLeftIcon className="h-7 w-7" />
                            </span>
                            <span className="rounded-full p-2 bg-white hover:bg-gray-300">
                                <ChevronRightIcon className="h-7 w-7" />
                            </span>

                        </div>
                    </div> 
                </div>
                <div className="pt-10 flex flex-col items-center justify-start col-start-10 col-end-13 box-border">
                    <Calendar />
                </div>
            </div>
        </div> 
    )
}


/* <Button onClick={() => dispatch(SignOutAction())}>logout</Button> */