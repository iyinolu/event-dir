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
  const eventStateValue = useAppSelector((state) => state.AppReducer.event);
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
  }, [dispatch]);

  return (
    <div
      className="max-h-screen min-h-screen h-screen"
      style={{ background: "black" }}
    >
      <div className="h-[121px]">
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
        <div className="flex items-center md:justify-center flex-col md:flex-row min-h-full my-0 mx-auto md:py-[35px] md:px-[86px] max-w-[1200px]">
          <section className="md:flex-1 md:self-center">
            <ThemeProvider theme={theme}>
              <Calendar
                callbackFn={(date: Date) =>
                  setAddEventDialog({ open: true, date: date })
                }
              />
            </ThemeProvider>
          </section>
          <section className={`md:flex-[2] md:${eventStateValue.length > 0 ? "self-start" : "self-center"}`}>
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