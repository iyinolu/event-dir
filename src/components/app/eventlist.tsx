/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Dispatch, SetStateAction,} from 'react';
import { 
    ChevronRightIcon, 
    ChevronLeftIcon, 
    ArrowNarrowRightIcon
} from '@heroicons/react/solid';
import { toAbsoluteUrl } from '../../utils/helpers';
import { Event } from '../../redux/reducer/app/types';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { ShowEvent } from './eventdetails';

type Events = {
    events: Event[]
}

type veiwEventContextType = {
    open: boolean;
    data: Event|null;
}
type viewEventContextValue = {
    viewEvent: veiwEventContextType;
    setViewEvent: Dispatch<SetStateAction<veiwEventContextType>>
}

const viewEventCtxDefaultValue: viewEventContextValue = {
    viewEvent: {open: false, data: null},
    setViewEvent: () => {}
}

export const viewEventContext = React.createContext(viewEventCtxDefaultValue)

export default function EventList() {
    const eventStateValue = useAppSelector((state) => state.AppReducer.event)
    const [viewEvent, setViewEvent] = React.useState<veiwEventContextType>({open: false, data: null})

    const showEvents = (events:Event[]) => {
        if (events.length < 1) {
            return (
                <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
                    <div style={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <img style={{ height: "50%", marginBottom: "30px"}} src="/media/illustrations/noevent_placeholder.svg" alt="No Event"/>
                        <p style={{ color: "grey", textAlign: "center", padding: "0px 60px"}}>No Events for the selected day. Double-click on a day to add an event.</p>
                    </div>
                </div>  
            )
        }
        var eventList = events.map((event, idx) => {
            return (
                <div className="flex flex-col rounded-2xl h-auto w-full bg-white mb-6 px-5 py-4 border-gray-200" style={{ background: "rgb(0 0 0)", borderColor: "rgb(34 34 34)", borderWidth: "1px"}}>
                    <div className="flex flex-none flex-col col-start-1 col-end-8">
                        <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500" style={{ color: "#c4c4c4"}}>
                            {event.title}
                        </h1>
                        <p className="font-sans" style={{ color: "#6e7463"}}>
                            {event.content}                        
                        </p>
                    </div>
                    <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-between mt-6">
                        <span style={{ background: "rgb(15 15 15)" }} className="flex items-center justify-items-center w-20 h-10 rounded-lg bg-gray-200 hover:bg-gray-100">    
                            <img className="w-7 mx-auto my-0" alt='emoji' src={`${toAbsoluteUrl("/media/images/emojis/developer.png")}`} />
                        </span>
                        <div onClick={() => setViewEvent({open: true, data: event})} className="flex flex-row items-center font-sans text-xs px-3 py-2 rounded-lg flex-none w-32" style={{ background: "#9acd32", color: "black", padding: "6px ​10px", cursor: "pointer"}}>
                            <span style={{ color: "black" }} className="font-semibold text-gray-600">View details</span>
                            <ArrowNarrowRightIcon className="ml-3 w-5" />
                        </div>                    
                    </div>
                </div>
            )
        })
        return eventList ? eventList : "No Events"
    }

    return (
        <>
            <div style={{ maxWidth: "600px" }} className="flex flex-col rounded-xl bg-transparent h-full w-9/12 px-8 pt-0 pb-7 overflow-auto min-h-full">
                {showEvents(eventStateValue)}
            </div>  
            <viewEventContext.Provider value={{viewEvent, setViewEvent}}>
                <ShowEvent/>
            </viewEventContext.Provider>
        </>
    )
}