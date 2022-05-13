/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { DayProps } from "@material-ui/pickers/views/Calendar/Day";
import { DatePicker, Day } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Component } from "react";
import UpdateCreateEventStatus from "../../redux/reducer/app/appSlice";
import { initialAppState } from "../../redux/reducer/app/types";
import { updateCreateEventStatus } from "../../redux/actions/app";
import { fetchEvents } from "../../redux/thunk";
import { FetchEventPayload } from "../../redux/types";
import { CircularProgress } from "@material-ui/core";
import { useAppSelector } from "../../App";

const useStyles = makeStyles({
  root: {
    "& .MuiToolbar-root": {
      backgroundColor: "red",
    },
  },
});

export default function Calendar({
  callbackFn,
}: {
  callbackFn: (date: Date) => void;
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<Date>(new Date());
  const displayDate = React.useRef<any>(new Date());
  const fetchingEvent = useAppSelector(
    (state) => state.AppReducer.fetchingEvent
  );

  React.useEffect(() => {
    const date: FetchEventPayload = { date: value };
    dispatch(fetchEvents(date));
  }, [value, dispatch]);

  const handleAddNewEventWithDoubleClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    switch (e.detail) {
      case 1:
        break;
      case 2:
        dispatch(updateCreateEventStatus(false));
        callbackFn(displayDate.current);
        break;
      default:
        break;
    }
  };

  const eventLoadingDay = (day: any) => {
    return (
      <button
        className="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"
        type="button"
      >
        <span className="MuiIconButton-label">
          <p className="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit flex items-center justify-center">
            {!fetchingEvent ? (
              day?.getDate()
            ) : (
              <CircularProgress
                thickness={5}
                style={{ height: "19px", width: "19px", color: "black" }}
              />
            )}
          </p>
        </span>
      </button>
    );
  };

  return (
    <>
      <DatePicker
        className={classes.root}
        autoOk
        variant="static"
        openTo="date"
        label="Date desktop"
        value={value}
        onChange={(e) => {
          displayDate.current = e;
          setValue(e ? e : new Date());
        }}
        open={true}
        renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) => {
          return (
            <span onClick={(e) => handleAddNewEventWithDoubleClick(e)}>
              {selectedDate?.getDate() === day?.getDate() &&
              dayInCurrentMonth ? (
                <Day {...day} children={eventLoadingDay(day)} />
              ) : (
                <Day {...day} children={dayComponent} />
              )}
            </span>
          );
        }}
      />
    </>
  );
}
