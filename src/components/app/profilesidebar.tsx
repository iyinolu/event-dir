/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { sideBarContext } from '../../containers/app/BaseContainer';
import { withStyles, makeStyles } from '@material-ui/styles';
import ProfileInfoBlock from './profileinfo';
import { XIcon } from '@heroicons/react/outline';
import { CloseButton } from './styled';
import { logout } from '../../redux/store';

export default function ProfileSideBar() {
    const classes = useStyles()
    const context = React.useContext(sideBarContext)
    const { sideBarState, setSideBarState } = context

    React.useEffect(() => {
        let hello;
        console.log(sideBarState)
    })

    return (
        <Drawer anchor="right" open={sideBarState.open} PaperProps={{classes:{root: classes.root}}}>
            <div className="px-5 py-9 h-screen" style={{ paddingTop: "21px"}}>
                <div className="flex justify-end">
                    <CloseButton 
                        onClick={() => setSideBarState({open: false, data: null})}
                    >   
                        <XIcon className="h-5 w-5"/>
                    </CloseButton>
                </div>
                <div className={classes.frame}>
                    <ProfileInfoBlock data={sideBarState.data ? sideBarState.data : null}/>
                    <div style={{ padding: "0 20px 20px 20px", width: "auto" }}>
                        <button className={classes.logoutBtn} onClick={logout}>
                            Logout
                        </button>
                    </div>
                    <hr />
                    <div style={{ padding: "15px 20px", width: "auto" }}>
                        <h2 className={classes.upcomingEventHeader}>Upcoming Events</h2>
                        <div className={classes.upcomingEventPlaceholder}></div>
                        <div className={classes.upcomingEventPlaceholder}></div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

const useStyles = makeStyles({
    root: {
        width: "30%",
        backgroundColor: "#f7f7f7"
    },
    frame: {
        padding: "10px",
        height: "auto"
    },
    logoutBtn: {
        display:"flex",
        alignItems: "center",
        fontSize: "13px",
        backgroundColor: "#007a5a",
        padding: "7px 20px",
        borderRadius: "5px",
        textAlign: "center", 
        color: "white"
    },
    upcomingEventHeader: {
        fontSize: "20px", 
        fontWeight: 800, 
        color: "#4b5b56",
        marginBottom: "20px",
    },
    upcomingEventPlaceholder: {
        height: "70px",
        background: "#e3e3e3",
        borderRadius: "5px",
        marginBottom: "15px"
    }
})