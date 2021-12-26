/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { sideBarContext } from '../../containers/app/BaseContainer';
import { withStyles, makeStyles } from '@material-ui/styles';
import ProfileInfoBlock from './profileinfo';
import { XIcon } from '@heroicons/react/outline';
import { CloseButton } from './styled';

const useStyles = makeStyles({
    root: {
        width: "30%",
        backgroundColor: "#f7f7f7"
    },
    frame: {
        padding: "10px",
        height: "36%"
    }
})

export default function ProfileSideBar() {
    const classes = useStyles()
    const context = React.useContext(sideBarContext)
    const { sideBarState, setSideBarState } = context

    return (
        <Drawer anchor="right" open={sideBarState.open} PaperProps={{classes:{root: classes.root}}}>
            <div className="px-5 py-9 h-screen" style={{ paddingTop: "21px"}}>
                <div className="flex justify-end">
                    <CloseButton 
                        onClick={() => setSideBarState({open: false, data: ""})}
                    >   
                        <XIcon className="h-5 w-5"/>
                    </CloseButton>
                </div>
                <div className={classes.frame}>
                    <ProfileInfoBlock />
                </div>
            </div>
        </Drawer>
    )
}