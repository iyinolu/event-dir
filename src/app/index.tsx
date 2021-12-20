/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Calendar from "./components/calendar";
import { useDispatch } from 'react-redux'
import { SunIcon } from '@heroicons/react/solid';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { Divider } from "@material-ui/core";
// import { SignOutAction } from '../redux/reducer/authentication/authSlice';
import EventList from './components/eventlist'
import { ThemeProvider } from '@material-ui/core';
import theme from '../utils/theme'
import { fetchEvents } from '../redux/thunk';

export default function BasePage() {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date | null>( new Date())

    return (
        <div className="max-h-screen min-h-screen h-screen" style={{ background: "#0d1117"}}>
            <div className="h-1/5">
                <header className="py-2 px-10 flex flex-row items-center justify-between w-screen" style={{ background: "#161b22"}}>
                    <div className="flex flex-row items-center">
                        {/* <span className="font-sans py-0.5 px-2 rounded-md" style={{ backgroundColor: "#cccccc"}}>Today</span> */}
                        <span className="font-sans ml-5" style={{ color: "#cccccc"}}> Friday 7th October </span>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row justify-center py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2">
                            <button className="font-sans" style={{ color: "#cccccc"}}>My Account</button>
                        </div>
                        <div className="flex flex-row justify-center ml-9 py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2">
                            <button className="font-sans">All Events</button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <span><SunIcon style={{ color: "#cccccc"}} className="h-6 w-6 m-2" /></span>
                        <span className="font-sans" style={{ color: "#cccccc"}}>Good Afternoon, Micheal</span>
                    </div>
                </header>
                <div className="px-20 mt-3 flex flex-row justify-between items-center" >
                    <h1 className="font-sans">Events</h1>
                    <button style={{ fontSize:"11px", fontWeight:"bold", padding: "2px 9px"}} onClick={() => { dispatch(fetchEvents()); console.log('hello')} } className="font-sans flex items-center py-1 px-4 rounded-md bg-gray-100 hover:bg-gray-300 border-2 border-grey-500">
                        Add New Event
                        <PlusCircleIcon className="ml-4 h-5 w-5"/>
                    </button>
                </div>
            </div>

            {/* <Divider variant="middle" style={{ background: "#202020"}} /> */}
            <div className="h-4/5">
                <div className="h-full min-h-full">
                    <div className="grid row-span-4" style={{ height: "90%", minHeight: "90%"}}>
                        <div className="flex flex-col items-center flex-none col-start-1 col-end-7 box-border h-full min-h-full min-w-full">   
                            <EventList />
                        </div>
                        <div className="flex flex-col items-center justify-start col-start-7 col-end-13 box-border">
                            <ThemeProvider theme={theme}> 
                                <Calendar />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}


/* <Button onClick={() => dispatch(SignOutAction())}>logout</Button> */