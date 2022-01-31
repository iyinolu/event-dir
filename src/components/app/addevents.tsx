/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, Dialog, Divider } from '@material-ui/core';
import { addNewEventProps } from '../../containers/app/types'
import { makeStyles } from "@material-ui/styles"
import { CloseButton } from './styled';
import { XIcon, BellIcon } from '@heroicons/react/outline';
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
        background: "#2a2a2a",
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
    },
    notificationBtn: {
        position: 'absolute',
        bottom: '26px',
        left: '23px',
        padding: '8px',
        background: '#9acd32',
        borderRadius: '26%',
        boxShadow: 'rgb(170 169 169 / 20%) 0px 0px 15px, rgb(0 0 0 / 15%) 0px 0px 3px 1px',
        cursor: 'pointer',
        '& svg': {
            height: '17px',
            color: '#0f0e0e',
        }
    },
    addEvent: {
        fontSize: '20px',
        fontWeight: 700,
        color: 'yellowgreen'
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-betweeen'
    }
})

const AddEventDialog: React.FC<addNewEventProps> = ({state, callbackFn}) => {
    const classes = useStyles()
    const [event, setEvent] = React.useState({title: ""})

    return (
        <Dialog open={state.open} classes={{ container: state.open ? classes.container : "" }} PaperProps={{classes: {root: classes.paperRoot}}}>
            <div className={classes.leftHalf}>
                <div>
                    <h2 style={{ color: "white", fontSize: "30px", fontWeight: 600}}>
                        {formatDate(state.date) || "N/A"}
                    </h2>
                    <p style={{ color: 'yellowgreen' }}>Monday</p>
                </div>
                <span className={classes.notificationBtn}>
                    <BellIcon />
                </span>
            </div>        
                <div className={classes.rightHalf}>
                    <span style={{ display: 'flex', flexDirection: "row-reverse", width: "100%"}}>
                        <CloseButton onClick={() => callbackFn("")}>
                            <XIcon className="h-5 w-5"/>
                        </CloseButton>
                    </span>    
                    <div style={{ width: '100%' }}>
                    
                        <span className={classes.addEvent}>Add Event</span>
                    
                        <form className='pt-6'>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Title
                                </label>
                                <input
                                    id="event-title"
                                    name="title"
                                    type="text"
                                    autoComplete="false"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-200 placeholder-gray-200 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Title"
                                    onChange={(e) => {setEvent({title: e.target.value})}}
                                    style={{ background: '#2a2a2a', borderColor: '#535353'}}
                                />
                                </div>
                                <div>
                                <label htmlFor="password" className="sr-only">
                                    Content
                                </label>
                                <textarea
                                    id="event-title"
                                    name="title"
                                    autoComplete="false"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-200 placeholder-gray-200 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Details"
                                    onChange={(e) => {}}
                                    style={{ height: '150px', background: '#2a2a2a', borderColor: '#535353'}}
                                />
                            </div>
                            <span className={classes.footer}>
                                <Button>Tag</Button>
                                <Button>Submit</Button>
                            </span>
                        </form>
                    </div>
                </div>
        </Dialog>
    )
}

export default AddEventDialog