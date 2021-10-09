/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux'
import { Grid, Button, TextField} from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';
import { withStyles, makeStyles } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//     root: {
//         border: "2px"
//     }
// }))


export default function Calendar() {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date | null>( new Date())

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"                        
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> 
        </> 
    )
}










































// export default function Calendar() {
//     const dispatch = useDispatch()
//     const [value, setValue] = React.useState<Date | null>( new Date())

//     return (
//         <>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <DatePicker
//                     value={value}
//                     onChange={(e) => setValue(e)}
//                     variant="static"
//                 />
//             </MuiPickersUtilsProvider> 
//         </> 
//     )
// }