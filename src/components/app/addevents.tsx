/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Dialog, Divider } from "@material-ui/core";
import { addNewEventProps } from "../../containers/app/types";
import { makeStyles } from "@material-ui/styles";
import { CloseButton } from "./styled";
import { XIcon, BellIcon } from "@heroicons/react/outline";
import { Event } from "../../redux/reducer/app/types";
import { formatDate } from "../../utils/helpers";
import Select, { StylesConfig } from "react-select";
import { Height } from "@material-ui/icons";
import { useAppSelector, useAppDispatch } from "../../App";
import { EventCategory, initialAppState } from "../../redux/reducer/app/types";
import { AuthState } from "../../redux/reducer/authentication/types";
import { createNewEvent } from "../../redux/thunk";
import { EventPayload } from "../../redux/types";
import { updateCreateEventStatus } from "../../redux/actions/app";
import SendIcon from "@material-ui/icons/Send";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

type FormData = {
  title: string;
  content: string;
  category: number | undefined;
};

type CategoryOptions = {
  value: number;
  label: string;
};

const selectStyles: StylesConfig<CategoryOptions, false> = {
  container: (styles) => ({ ...styles }),
  control: (provided, state) => {
    return {
      ...provided,
      borderRadius: 5,
      borderColor: "#2a2a2a",
      backgroundColor: "#2a2a2a",
      "&:hover": {
        borderColor: "#2a2a2a",
      },
    };
  },
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: "grey",
      fontSize: "12px",
    };
  },
  singleValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#0f0e0e",
      color: "grey",
      fontSize: "12px",
      padding: "2px 9px",
      borderRadius: "5px",
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      backgroundColor: "#0f0e0e",
      padding: 0,
      borderRadius: "4px",
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      fontSize: "13px",
      color: "lightgrey",
    };
  },
};

const AddEventDialog: React.FC<addNewEventProps> = ({ state, callbackFn }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [event, setEvent] = React.useState<FormData>({
    title: "",
    content: "",
    category: -1,
  });
  const categories = useAppSelector<EventCategory[]>(
    (state) => state.AppReducer.eventCategories
  );
  const eventState = useAppSelector<initialAppState>(
    (state) => state.AppReducer
  );
  const authUser = useAppSelector<AuthState>((state) => state.AuthReducer);
  const options = React.useRef<CategoryOptions[]>();

  React.useEffect(() => {
    if (categories) {
      options.current = categories.map((category) => {
        return {
          value: category.pk,
          label: category.category_name,
        };
      });
    }
  }, [categories]);

  const onCreateEvent = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let eventPayload: EventPayload = {
      event_date: state.date.toISOString().split("T")[0],
      title: event.title,
      content: event.content,
      tag: event.category,
      owner: authUser.id,
    };
    dispatch(createNewEvent(eventPayload));
    return eventPayload;
  };

  return (
    <Dialog
      open={state.open}
      classes={{ container: state.open ? classes.container : "" }}
      PaperProps={{ classes: { root: classes.paperRoot } }}
    >
      <div className="flex-grow bg-[#2a2a2a] py-[40px] px-[30px]">
        <span className="absolute top-[16px] right-[18px] text-white">
          <CloseButton onClick={() => callbackFn("")}>
            <XIcon className="h-5 w-5" />
          </CloseButton>
        </span>
        <div>
          <h2 style={{ color: "white", fontSize: "30px", fontWeight: 600 }}>
            {formatDate(state.date) || "N/A"}
          </h2>
          <p style={{ color: "yellowgreen" }}>Monday</p>
        </div>
      </div>
      <div className="flex-grow text-white px-[20px] py-[27px] bg-[#0f0e0e]">
        <span
          className="hidden"
          //   style={{
          //     display: "flex",
          //     flexDirection: "row-reverse",
          //     width: "100%",
          //   }}
        >
          <CloseButton onClick={() => callbackFn("")}>
            <XIcon className="h-5 w-5" />
          </CloseButton>
        </span>
        <div style={{ width: "100%" }}>
          <span className={classes.addEvent}>Add Event</span>

          <form className="pt-6" onSubmit={onCreateEvent}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Title
              </label>
              <input
                id="event-title"
                name="title"
                type="text"
                autoComplete="false"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-200 placeholder-gray-200 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Title"
                onChange={(e) => {
                  setEvent({ ...event, title: e.target.value });
                }}
                style={{ background: "#2a2a2a", borderColor: "#535353" }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Content
              </label>
              <textarea
                id="event-details"
                name="content"
                autoComplete="false"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-200 placeholder-gray-200 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Content"
                onChange={(e) => {
                  setEvent({ ...event, content: e.target.value });
                }}
                style={{
                  height: "150px",
                  background: "#2a2a2a",
                  borderColor: "#535353",
                }}
              />
            </div>
            <span className={classes.footer}>
              <Select
                options={options.current}
                menuPlacement="top"
                styles={selectStyles}
                onChange={(option) =>
                  setEvent({ ...event, category: option?.value })
                }
                placeholder="Category"
              />
              {!eventState.creatingEventDone && (
                <button className={classes.submitBtn}>
                  Create
                  <SendIcon style={{ marginLeft: "10px" }} />
                </button>
              )}
              {eventState.creatingEventDone && (
                <button
                  className={classes.submitBtn}
                  type="button"
                  onClick={() => {
                    callbackFn("");
                    dispatch(updateCreateEventStatus(false));
                  }}
                >
                  Done
                  <DoneOutlineIcon style={{ marginLeft: "10px" }} />
                </button>
              )}
            </span>
            <div className="mt-[35px]">
              <div className={classes.notificationBtn}>
                <BellIcon />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default AddEventDialog;

const useStyles = makeStyles({
  paperRoot: {
    width: "100%",
    display: "flex",
    background: "#0f0e0e",
    flexDirection: "column",
  },
  container: {
    backdropFilter: "blur(5px)",
  },
  leftHalf: {
    height: "auto",
    width: "35%",
    background: "#2a2a2a",
    padding: "40px 30px",
  },
  rightHalf: {
    height: "auto",
    width: "65%",
    background: "#0f0e0e",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
    padding: "20px 35px",
  },
  eventTitle: {
    fontSize: "35px",
    fontWeight: 700,
    lineHeight: "normal",
  },
  notificationBtn: {
    padding: "8px",
    background: "#9acd32",
    borderRadius: "26%",
    display: "inline-block",
    boxShadow:
      "rgb(170 169 169 / 20%) 0px 0px 15px, rgb(0 0 0 / 15%) 0px 0px 3px 1px",
    cursor: "pointer",
    "& svg": {
      height: "17px",
      color: "#0f0e0e",
    },
  },
  addEvent: {
    fontSize: "20px",
    fontWeight: 700,
    color: "yellowgreen",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  submitBtn: {
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    backgroundColor: "#007a5a",
    padding: "7px 20px",
    borderRadius: "5px",
    textAlign: "center",
    color: "white",
  },
});
