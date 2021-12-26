/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import { DefaultProfilePlaceholder } from './styled';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '20px'
    }
})

export default function ProfileInfoBlock() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <DefaultProfilePlaceholder>P</DefaultProfilePlaceholder>
            <div className="flex flex-col mt-4">
                <span className="font-semibold text-lg">Paul Iyinolu</span>
                <span className="font-extralight text-sm">pauliyinolu@gmail.com</span>
            </div>
        </div>
    )
}