/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux'
import { SignOutAction } from '../redux/reducer/authentication';
import { Grid, Button, TextField} from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';


export default function BasePage() {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date | null>( new Date())

    return (
        <>
            <div className="grid bg-gray-300">
                <div className="min-h-screen col-start-1 col-end-8 box-border border-r-2 border-gray-400">
                    
                </div>
                <div className="min-h-screen col-start-8 col-end-13 box-border">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"                        
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> 
                </div>
            </div>

        </> 
    )
}


/* <Button onClick={() => dispatch(SignOutAction())}>logout</Button> */