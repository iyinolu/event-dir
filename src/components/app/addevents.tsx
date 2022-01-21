/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, Dialog } from '@material-ui/core';
import { addNewEventProps } from '../../containers/app/types'
import { makeStyles } from "@material-ui/styles"
import { CloseButton } from './styled';
import { XIcon } from '@heroicons/react/outline';
import { Event } from '../../redux/reducer/app/types';
import { formatDate } from '../../utils/helpers';

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

const AddEventDialog: React.FC<addNewEventProps> = ({state, callbackFn}) => {
    const classes = useStyles()

    return (
        <Dialog open={state.open} classes={{ container: state.open ? classes.container : "" }} PaperProps={{classes: {root: classes.paperRoot}}}>
              <div className={classes.leftHalf}>
                <div>
                    <h2 style={{ color: "white", fontSize: "30px", fontWeight: 600}}>
                        {formatDate(state.date) || "N/A"}
                    </h2>
                    <p style={{ color: 'yellowgreen' }}>Monday</p>
                </div>
                </div>        
                <div className={classes.rightHalf}>
                    <span style={{ display: 'flex', flexDirection: "row-reverse", width: "100%"}}>
                        <CloseButton onClick={() => callbackFn("")}>
                            <XIcon className="h-5 w-5"/>
                        </CloseButton>
                    </span>                   
                    
                </div>
        </Dialog>
    )
}

export default AddEventDialog