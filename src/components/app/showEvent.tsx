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
    }
})

export function ShowEvent() {
    const classes = useStyles()
    const context = React.useContext(viewEventContext);
    const {viewEvent, setViewEvent} = context;
    return (
        <Dialog open={viewEvent.open} classes={{ container: viewEvent.open ? classes.container : "" }} PaperProps={{classes: {root: classes.paperRoot}}}>
            <div className={classes.leftHalf}>
                <h2 style={{ color: "white", fontSize: "30px", fontWeight: 600}}>
                    July 4, 2021
                </h2>
                <p style={{ color: 'yellowgreen' }}>Monday</p>
            </div>
            <div className={classes.rightHalf}>
                <span style={{ display: 'flex', flexDirection: "row-reverse", width: "100%"}}>
                    <CloseButton onClick={() => setViewEvent({open: false, data: null})}>
                        <XIcon className="h-5 w-5"/>
                    </CloseButton>
                </span>
                <p style={{ color: "yellowgreen" }}>Event</p>
                <h1 style={{ fontSize: "39px"}}>Independence Day</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                
            </div>
            
        </Dialog>
    )
}