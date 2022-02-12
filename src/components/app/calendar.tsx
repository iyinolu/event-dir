/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux'
import { DayProps } from '@material-ui/pickers/views/Calendar/Day';
import {DatePicker, Day} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles"
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Component } from 'react';
import UpdateCreateEventStatus from '../../redux/reducer/app/appSlice';
import { initialAppState } from '../../redux/reducer/app/types';
import { updateCreateEventStatus } from '../../redux/actions/app';
// import { PickersDay }
const useStyles = makeStyles(({
    root: {
        "& .MuiToolbar-root": {
            backgroundColor: "red"
        }
    }
}))

export default function Calendar({callbackFn}:{
    callbackFn: (date:string) => void;
}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date | null>( new Date())
    const displayDate = React.useRef<any>(new Date())
    

    const handleAddNewEventWithDoubleClick = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        switch (e.detail) {
            case 1: 
                break;
            case 2:
                dispatch(updateCreateEventStatus(false))
                callbackFn(displayDate.current)
                break;
            default:                
                break;
        }
    }

    return (
        <>
            <DatePicker
                className={classes.root}
                autoOk
                variant="static"
                openTo="date"
                label="Date desktop"
                value={value}
                onChange={e => {
                    displayDate.current = e
                    setValue(e)
                }}
                open={true}
                renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent)  => {
                    return <span onClick={(e) => handleAddNewEventWithDoubleClick(e)}><Day {...day} children={dayComponent} /></span>
                }}
            
            />    
        </> 
    )
}