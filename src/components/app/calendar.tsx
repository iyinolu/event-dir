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
import { fetchEvents } from '../../redux/thunk';
import { FetchEventPayload } from '../../redux/types';

const useStyles = makeStyles(({
    root: {
        "& .MuiToolbar-root": {
            backgroundColor: "red"
        }
    }
}))

export default function Calendar({callbackFn}:{
    callbackFn: (date:Date) => void;
}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date>(new Date())
    const displayDate = React.useRef<any>(new Date())
    
    React.useEffect(() => {
        const date: FetchEventPayload = {date: value}
        dispatch(fetchEvents(date))
    }, [value, dispatch])

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
                    setValue(e ? e : new Date())
                }}
                open={true}
                renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent)  => {
                    return <span onClick={(e) => handleAddNewEventWithDoubleClick(e)}><Day {...day} children={dayComponent} /></span>
                }}
            
            />    
        </> 
    )
}