/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Calendar from "./components/calendar";
import { useDispatch } from 'react-redux'
import { SunIcon } from '@heroicons/react/solid'
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
            <header className="py-4 px-10 flex flex-row items-center justify-between w-screen">
                <div className="flex flex-row items-center">
                    <span className="font-customRegular py-0.5 px-2 rounded-md" style={{ backgroundColor: "#66CC66"}}>Today</span>
                    <span className="font-customRegular ml-5"> Friday 7th October </span>
                </div>
                <div className="flex flex-row justify-center py-1 px-4 rounded-md bg-gray-100 border-2 border-grey-500">
                    <span className="font-customRegular">My Account</span>
                </div>
                <div className="flex flex-row items-center">
                    <span><SunIcon className="h-6 w-6 m-2" /></span>
                    <span className="font-customRegular">Good Afternoon, Micheal</span>
                </div>
            </header>
            <Divider variant="middle" />
            <div className="min-h-full grid max-h-full row-span-4">
                <div className="flex flex-col col-start-1 col-end-8 box-border">   
                    <div className="flex flex-none" style={{height: "40px", width:"350px", backgroundColor: 'inherit'}}>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center col-start-8 col-end-13 box-border">
                    <Calendar />
                </div>
            </div>
        </div> 
    )
}


/* <Button onClick={() => dispatch(SignOutAction())}>logout</Button> */