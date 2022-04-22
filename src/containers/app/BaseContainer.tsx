/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction } from "react";
import Calendar from "../../components/app/calendar";
import { PlusCircleIcon } from "@heroicons/react/solid";
import EventList from "../../components/app/eventlist";
import NavigationBar from "../../components/app/navbar";
import ProfileSideBar from "../../components/app/profilesidebar";
import SubNavigation from "../../components/app/subnavigation";

import { ThemeProvider } from "@material-ui/core";
import theme from "../../utils/theme";
import { fetchEvents } from "../../redux/thunk";
import { useAppSelector, useAppDispatch } from "../../App";
import { AuthState } from "../../redux/reducer/authentication/types";
import AddEventDialog from "../../components/app/addevents";
import { FetchEventPayload } from "../../redux/types";

type sidebarContextType = {
  open: boolean;
  data: AuthState | null;
};
type SideBarContextValue = {
  sideBarState: sidebarContextType;
  setSideBarState: Dispatch<SetStateAction<sidebarContextType>>;
};

const sideBarCtxDefaultValue: SideBarContextValue = {
  sideBarState: { open: false, data: null },
  setSideBarState: () => {},
};

type navBarContextType = {
  sideBarCtx: SideBarContextValue;
  username: string;
};

const navBarCtxDefaultValue: navBarContextType = {
  sideBarCtx: sideBarCtxDefaultValue,
  username: "",
};

export const navBarContext = React.createContext<navBarContextType>(
  navBarCtxDefaultValue
);
export const sideBarContext = React.createContext<SideBarContextValue>(
  sideBarCtxDefaultValue
);

export default function BasePage() {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [sideBarState, setSideBarState] = React.useState<sidebarContextType>({
    open: false,
    data: null,
  });
  const userState = useAppSelector((state) => state.AuthReducer);
  const _access_sidebar = {
    sideBarState: sideBarState,
    setSideBarState: setSideBarState,
  };
  const navBarCtx = {
    sideBarCtx: _access_sidebar,
    username: userState.firstname,
  };
  const [addEventDialog, setAddEventDialog] = React.useState<{
    open: boolean;
    date: Date;
  }>({ open: false, date: new Date() });

  React.useEffect(() => {
    let todaysDate: FetchEventPayload = { date: new Date() };
    dispatch(fetchEvents(todaysDate));
  }, []);

  return (
    <div
      className="max-h-screen min-h-screen h-screen"
      style={{ background: "black" }}
    >
      <div className="h-[16%]">
        <navBarContext.Provider value={{ ...navBarCtx }}>
          <NavigationBar userState={userState} />
        </navBarContext.Provider>
        <div className="h-[56px] md:h-[72px]" />
        <SubNavigation
          callbacks={{
            createEvent: () =>
              setAddEventDialog({ open: true, date: new Date() }),
          }}
        />
      </div>

      <main id="dashboard">
        <div className="flex items-center md:justify-center flex-col md:flex-row min-h-full">
          <section>
            <ThemeProvider theme={theme}>
              <Calendar
                callbackFn={(date: Date) =>
                  setAddEventDialog({ open: true, date: date })
                }
              />
            </ThemeProvider>
          </section>
          <section>
            <div>
              <EventList />
            </div>
          </section>
        </div>
      </main>

      <sideBarContext.Provider value={{ sideBarState, setSideBarState }}>
        <ProfileSideBar />
      </sideBarContext.Provider>
      <AddEventDialog
        state={addEventDialog}
        callbackFn={() => setAddEventDialog({ open: false, date: new Date() })}
      />
    </div>
  );
}

// {
/* <div className="max-h-screen min-h-screen h-screen" style={{ background: "black"}}>
            <div className="h-1/5">
                <navBarContext.Provider value={{ ...navBarCtx  }}>
                    <NavigationBar userState={userState}  />
                </navBarContext.Provider>
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
                        onClick={() => setAddEventDialog({open: true, date: new Date()}) }
                        className="font-sans flex items-center py-1 px-4 rounded-md border-2 border-grey-500"
                    >
                        Today's Event
                    <PlusCircleIcon className="ml-4 h-5 w-5"/>
                    </button>
                </div>
            </div>

            <div className="h-4/5">
                <div className="h-full min-h-full">
                    <div className="grid row-span-4" style={{ height: "90%", minHeight: "90%"}}>
                        <div style={{ maxWidth: "677px", minWidth: "579px" }} className="flex flex-col items-center flex-none col-start-1 col-end-7 box-border h-full min-h-full min-w-full">   
                            <EventList/>
                        </div>
                        <div className="flex flex-col items-center justify-start col-start-7 col-end-13 box-border">
                            <ThemeProvider theme={theme}> 
                                <Calendar callbackFn={(date: Date) => setAddEventDialog({open: true, date: date})} />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>  */
// }
