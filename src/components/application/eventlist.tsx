/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { toAbsoluteUrl } from "../../utils/helpers";
import { Event } from "../../redux/reducer/application/types";
import { ShowEvent } from "./eventdetails";
import { EventListProps, ViewEventState } from "../types";

export default function EventList({ events }: EventListProps) {
  const [viewEvent, setViewEvent] = React.useState<ViewEventState>({
    open: false,
    data: null,
  });

  const showEvents = (events: Event[]) => {
    if (events.length < 1) {
      return (
        <div
          style={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <div
            className="flex items-center h-full justify-center flex-col bg-[#494b4c] rounded-[8px]"
          >
            <img
              className="w-[56%] md:w-[40%]"
              style={{ height: "50%", marginBottom: "30px" }}
              src="/media/illustrations/noevent_placeholder.svg"
              alt="No Event"
            />
            <p
              className="md:w-[450px] text-[#e6e6e6] text-center py-0 px-[60px]"
            >
              No Events for the selected day. Double-click on a day to add an
              event.
            </p>
          </div>
        </div>
      );
    }
    var eventList = events.map((event, idx) => {
      return (
        <div
          className="flex flex-col rounded-2xl h-auto w-full bg-white mb-6 px-5 py-4 border-gray-200 min-w-[311px] md:w-auto"
          style={{
            background: "rgb(0 0 0)",
            borderColor: "rgb(34 34 34)",
            borderWidth: "1px",
          }}
        >
          <div className="flex flex-none flex-col col-start-1 col-end-8">
            <h1
              className="font-sans font-extrabold text-2xl mb-1 text-purple-500"
              style={{ color: "#c4c4c4" }}
            >
              {event.title}
            </h1>
            <p className="font-sans" style={{ color: "#6e7463" }}>
              {event.content}
            </p>
          </div>
          <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-between mt-6">
            <span
              style={{ background: "rgb(15 15 15)" }}
              className="flex items-center justify-items-center w-20 h-10 rounded-lg bg-gray-200 hover:bg-gray-100"
            >
              <img
                className="w-7 mx-auto my-0"
                alt="emoji"
                src={`${toAbsoluteUrl("/media/images/emojis/developer.png")}`}
              />
            </span>
            <div
              onClick={() => setViewEvent({ open: true, data: event })}
              className="flex flex-row items-center py-[6px] px-[10px] font-sans text-[#9acd32] text-[14px] underline text-xs rounded-lg flex-none w-32 bg-transparent cursor-pointer"
            >
              View More
              <ArrowNarrowRightIcon className="w-5 ml-auto" />
            </div>
          </div>
        </div>
      );
    });
    return eventList ? eventList : "No Events";
  };

  return (
    <div>
      <div className="flex flex-col rounded-xl bg-transparent h-[500px] mb-[56px] md:mb-0 px-8 overflow-auto min-h-full w-full mt-[73px] md:mt-0 md:w-auto">
        {showEvents(events)}
      </div>
      <ShowEvent viewEvent={viewEvent} setViewEvent={setViewEvent} />
    </div>
  );
}
