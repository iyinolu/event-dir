/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Calendar from "../../components/application/calendar";
import { PlusCircleIcon } from "@heroicons/react/solid";
import EventList from "../../components/application/eventlist";
import NavigationBar from "../../components/application/navbar";
import ProfileSideBar from "../../components/application/profilesidebar";
import SubNavigation from "../../components/application/subnavigation";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../utils/theme";
import { fetchEvents } from "../../redux/thunk";
import { useAppSelector, useAppDispatch } from "../../App";
import AddEventDialog from "../../components/application/addevents";
import { FetchEventPayload } from "../../redux/types";

type SideBarState = {
  open: boolean;
  data: object | null;
};

export default function BasePage() {
  const dispatch = useAppDispatch();;
  const [sideBarState, setSideBarState] = React.useState<SideBarState>({
    open: false,
    data: null,
  });
  const userStore = useAppSelector((state) => state.AuthReducer);
  const eventStore = useAppSelector((state) => state.AppReducer.event);
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
        <NavigationBar
          userState={userStore}
          sideBarState={sideBarState}
          setSideBarState={setSideBarState}
          username={userStore.firstname}
        />
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
          <section
            className={`md:flex-[2] md:${
              eventStore.length > 0 ? "self-start" : "self-center"
            }`}
          >
            <div>
              <EventList events={eventStore} />
            </div>
          </section>
        </div>
      </main>

      <ProfileSideBar
        sideBarState={sideBarState}
        setSideBarState={setSideBarState}
      />

      <AddEventDialog
        state={addEventDialog}
        callbackFn={() => setAddEventDialog({ open: false, date: new Date() })}
      />

      <button
        style={{
          fontSize: "11px",
          fontWeight: "bold",
          borderColor: "yellowgreen",
          boxShadow: "0px 0px 10px 4px rgb(55 73 18)",
        }}
        // onClick={callbacks.createEvent}
        className="fixed left-[47px] bottom-[42px] font-sans flex items-center border-2 border-grey-500 bg-[#9acd32] md:px-[12px] md:py-[7px] rounded-full text-[15px] text-[600]"
      >
        Today's Event
        <PlusCircleIcon className="ml-[9px] h-5 w-5" />
      </button>
    </div>
  );
}
