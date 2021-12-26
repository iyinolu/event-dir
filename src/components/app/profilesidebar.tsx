/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { sideBarContext } from '../../containers/app/BaseContainer';
import { withStyles, makeStyles } from '@material-ui/styles';
import { DefaultProfilePlaceholder } from './styled';

const useStyles = makeStyles({
    root: {
        width: "30%",
        backgroundColor: "#13161B"
    },
})

export default function ProfileSideBar() {
    const classes = useStyles()
    const context = React.useContext(sideBarContext)
    const { sideBarState, setSideBarState } = context

    return (
        <Drawer anchor="right" open={sideBarState.open} PaperProps={{classes:{root: classes.root}}}>
            <div className="px-5 py-9 h-screen">
                <div className="flex justify-end">
                    <button 
                        onClick={() => setSideBarState({open: false, data: ""})}
                    >   
                        close me
                    </button>
                </div>
                <div className="h-1/3 p-3">
                    <div >
                        <DefaultProfilePlaceholder />
                        <span></span>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}