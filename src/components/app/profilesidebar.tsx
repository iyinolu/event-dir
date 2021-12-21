/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { sideBarContext } from '../../containers/app/BaseContainer';
import { withStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: "30%"
    }
})

export default function ProfileSideBar() {
    const classes = useStyles()
    const context = React.useContext(sideBarContext)
    const {sideBarState, setSideBarState} = context

    return (
        <Drawer anchor="right" open={sideBarState.open} PaperProps={{classes:{root: classes.root}}}>
            <button onClick={() => setSideBarState({open: false, data: ""}) }>close me</button>
        </Drawer>
    )
}