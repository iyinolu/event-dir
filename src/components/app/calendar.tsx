/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux'
import {DatePicker} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(({
    root: {
        "& .MuiToolbar-root": {
            backgroundColor: "red"
        }
    }
}))


export default function Calendar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date | null>( new Date())

    return (
        <>
            <DatePicker
                className={classes.root}
                autoOk
                variant="static"
                openTo="date"
                label="Date desktop"
                value={value}
                onChange={e => setValue(e)}
                open={true}
                
            />    
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