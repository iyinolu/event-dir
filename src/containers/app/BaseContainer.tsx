/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Dispatch, SetStateAction,} from 'react';
import Calendar from "../../components/app/calendar";
import { useDispatch } from 'react-redux'
import { SunIcon } from '@heroicons/react/solid';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { Divider } from "@material-ui/core";
import { SignOutAction } from '../../redux/reducer/authentication/authSlice';
import EventList from '../../components/app/eventlist'
import NavigationBar from '../../components/app/navbar';
import ProfileSideBar from '../../components/app/profilesidebar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../utils/theme'
import { fetchEvents } from '../../redux/thunk';
import { withStyles, makeStyles } from '@material-ui/styles';
import { useAppSelector } from '../../utils/hooks';
import { AuthState } from '../../redux/reducer/authentication/types';


interface NavContextInterface<T> {
    data: T
}

type sidebarContextType = {
    open: boolean;
    data: AuthState|null;
}
type SideBarContextValue = {
  sideBarState: sidebarContextType;
  setSideBarState:Dispatch<SetStateAction<sidebarContextType>>
}
 
const sideBarCtxDefaultValue: SideBarContextValue = {
    sideBarState: {open: false, data: null},
    setSideBarState: () => {}
}

export const navBarContext = React.createContext<NavContextInterface<any> | null>(null)
export const sideBarContext = React.createContext<SideBarContextValue>(sideBarCtxDefaultValue)


export default function BasePage() {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<Date | null>( new Date())
    const [sideBarState, setSideBarState] = React.useState<sidebarContextType>({open: false, data: null})
    const userState = useAppSelector((state) => state.AuthReducer)
    const data = React.useRef()


    return (
        <div className="max-h-screen min-h-screen h-screen" style={{ background: "black"}}>
            <div className="h-1/5">
                <navBarContext.Provider value={{ data }}>
                    <NavigationBar userState={userState}  />
                </navBarContext.Provider>
                <sideBarContext.Provider value={{ sideBarState, setSideBarState }}>
                    <ProfileSideBar />
                </sideBarContext.Provider>
                <div className="px-20 mt-3 flex flex-row justify-between items-center" >
                    <span/>
                    <button 
                        style={{ 
                            fontSize:"11px", 
                            fontWeight:"bold", 
                            padding: "2px 9px", 
                            background: "#9acd32", 
                            borderColor: "yellowgreen"
                        }} 
                        onClick={() => { dispatch(fetchEvents()); setSideBarState({open: true, data: userState})} } 
                        className="font-sans flex items-center py-1 px-4 rounded-md border-2 border-grey-500"
                    >
                        Add New Event
                    <PlusCircleIcon className="ml-4 h-5 w-5"/>
                    </button>
                </div>
            </div>

            {/* <Divider variant="middle" style={{ background: "#202020"}} /> */}
            <div className="h-4/5">
                <div className="h-full min-h-full">
                    <div className="grid row-span-4" style={{ height: "90%", minHeight: "90%"}}>
                        <div className="flex flex-col items-center flex-none col-start-1 col-end-7 box-border h-full min-h-full min-w-full">   
                            <EventList />
                        </div>
                        <div className="flex flex-col items-center justify-start col-start-7 col-end-13 box-border">
                            <ThemeProvider theme={theme}> 
                                <Calendar />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}


/* <Button onClick={() => dispatch(SignOutAction())}>logout</Button> */