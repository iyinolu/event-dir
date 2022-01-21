/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Dialog } from '@material-ui/core';

type Props = {
    open: boolean
}

const AddEventDialog: React.FC<Props> = ({open}) => {
    return (
        <Dialog open={open}>
            Add Event
        </Dialog>
    )
}

export default AddEventDialog