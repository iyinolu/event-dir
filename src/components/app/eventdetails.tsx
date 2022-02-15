/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Dialog } from '@material-ui/core';
import { viewEventContext } from './eventlist';
import { makeStyles } from '@material-ui/styles';
import { CloseButton } from './styled';
import { XIcon } from '@heroicons/react/outline';
import { Event } from '../../redux/reducer/app/types';

const useStyles = makeStyles({
    paperRoot: {
        minHeight: "400px", 
        minWidth: "60%",
        display: "flex",
        background: "rgb(128 128 128 / 80%)",
        flexDirection: "row"
    },
    container: {
        backdropFilter: "blur(5px)"
    },
    leftHalf: {
        height: "auto",
        width: "35%",
        background: "transparent",
        padding: "40px 30px"
    },
    rightHalf: {
        height: "auto",
        width: "65%",
        background: "#0f0e0e",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "flex-start",
        padding: "20px 35px"
    },
    eventTitle: {
        fontSize: "35px",
        fontWeight: 700,
        lineHeight: "normal",
    }
})

export function ShowEvent() {
    const classes = useStyles()
    const context = React.useContext(viewEventContext);
    const {viewEvent, setViewEvent} = context;
    
    const formatDate = (date:string|undefined) => {
        if (date) {
            let dateObj = new Date(date)   
            let _dateObj = dateObj.toDateString().split(" ")
            var renderDateFormat = `${_dateObj[1]} ${_dateObj[2]}, ${_dateObj[3]}`
        } else {
            return " "
        }
        return renderDateFormat
    }
    
    return (
        <Dialog open={viewEvent.open} classes={{ container: viewEvent.open ? classes.container : "" }} PaperProps={{classes: {root: classes.paperRoot}}}>
            <div className={classes.leftHalf}>
                <div>
                    <h2 style={{ color: "white", fontSize: "30px", fontWeight: 600}}>
                        {formatDate(viewEvent.data?.event_date)}
                    </h2>
                    <p style={{ color: 'yellowgreen' }}>Monday</p>
                </div>
            </div>        
            <div className={classes.rightHalf}>
                <span style={{ display: 'flex', flexDirection: "row-reverse", width: "100%"}}>
                    <CloseButton onClick={() => setViewEvent({open: false, data: null})}>
                        <XIcon className="h-5 w-5"/>
                    </CloseButton>
                </span>
                <p className="mt-3" style={{ color: "yellowgreen" }}>Event</p>
                <h1 className={classes.eventTitle}>
                    {viewEvent.data?.title}
                </h1>
                <p style={{ marginTop: "20px", color: "#919191"}}>{viewEvent.data?.content}</p>
                
            </div>
            
        </Dialog>
    )
}