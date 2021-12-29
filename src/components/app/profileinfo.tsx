/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import { DefaultProfilePlaceholder } from './styled';
import { AuthState } from '../../redux/reducer/authentication/types';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '20px'
    }
})

type PropType = {
    data: AuthState | null
}
export default function ProfileInfoBlock({data}:PropType) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <DefaultProfilePlaceholder>P</DefaultProfilePlaceholder>
            <div className="flex flex-col mt-4">
                <span className="font-semibold text-lg">{`${data?.firstname} ${data?.lastname}`}</span>
                <span className="font-extralight text-sm">{data?.email}</span>
            </div>
        </div>
    )
}