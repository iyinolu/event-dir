import { Dispatch, SetStateAction } from 'react'
import { AuthState } from '../../redux/reducer/authentication/types';


// TODO: Put each type in a folder with its corresponding type
export type sidebarContextType = {
    open: boolean;
    data: AuthState|null;
}
export type SideBarContextValue = {
  sideBarState: sidebarContextType;
  setSideBarState:Dispatch<SetStateAction<sidebarContextType>>
}

export type navBarContextType = {
    sideBarCtx: SideBarContextValue
    username: string
}

export type addNewEventState = {
    open: boolean,
    date: string,
}

export type addNewEventProps = {
    state: addNewEventState
    callbackFn: (date:string) => void
}
