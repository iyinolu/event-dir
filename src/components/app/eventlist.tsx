/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { 
    ChevronRightIcon, 
    ChevronLeftIcon, 
    ArrowNarrowRightIcon
} from '@heroicons/react/solid';
import { toAbsoluteUrl } from '../../utils/helpers';
import { Event } from '../../redux/reducer/app/types';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

type Events = {
    events: Event[]
}

const showEvents = (events:Event[]) => {
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
                    <div className="flex flex-row items-center font-sans text-xs px-3 py-2 rounded-lg flex-none w-32" style={{ background: "#9acd32", color: "black", padding: "6px ​10px"}}>
                        <span style={{ color: "black" }} className="font-semibold text-gray-600">View details</span>
                        <ArrowNarrowRightIcon className="ml-3 w-5" />
                    </div>                    
                </div>
            </div>
        )
    })

    return eventList ? eventList : "No Events"
}

export default function EventList({events}:Events) {
    const eventStateValue = useAppSelector((state) => state.AppReducer.event)

    return (
        <div className="flex flex-col rounded-xl bg-transparent h-full w-9/12 px-8 pt-8 pb-7 overflow-auto min-h-full">
            {showEvents(eventStateValue)}



            {/* <div className="flex flex-col rounded-2xl h-40 w-full bg-white mb-6 px-5 py-4 border-gray-200" style={{ background: "rgb(0 0 0)", borderColor: "rgb(34 34 34)", borderWidth: "1px"}}>
                <div className="flex flex-none flex-col col-start-1 col-end-8">
                    <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500" style={{ color: "#c4c4c4"}}>
                        Apple Event
                    </h1>
                    <p className="font-sans" style={{ color: "#6e7463"}}>
                        California Streaming
                    </p>
                </div>
                <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-between mt-6">
                    <span style={{ background: "rgb(15 15 15)" }} className="flex items-center justify-items-center w-20 h-10 rounded-lg bg-gray-200 hover:bg-gray-100">    
                        <img className="w-7 mx-auto my-0" alt='emoji' src={`${toAbsoluteUrl("/media/images/emojis/developer.png")}`} />
                    </span>
                    <div className="flex flex-row items-center font-sans text-xs px-3 py-2 rounded-lg flex-none w-32" style={{ background: "#9acd32", color: "black", padding: "6px ​10px"}}>
                        <span style={{ color: "black" }} className="font-semibold text-gray-600">View details</span>
                        <ArrowNarrowRightIcon className="ml-3 w-5" />
                    </div>                    
                </div>
            </div>
            <div className="flex flex-col rounded-2xl h-40 w-full bg-white mb-6 px-5 py-4 border-gray-200" style={{ background: "rgb(0 0 0)", borderColor: "rgb(34 34 34)", borderWidth: "1px"}}>
                <div className="flex flex-none flex-col col-start-1 col-end-8">
                    <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500" style={{ color: "#c4c4c4"}}>
                        Anne's Birthday
                    </h1>
                    <p className="font-sans" style={{ color: "#6e7463"}}>
                        1800 Blvd. Party and Drinks...
                    </p>
                </div>
                <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-between mt-6">
                    <span style={{ background: "rgb(15 15 15)" }} className="flex items-center justify-items-center w-20 h-10 rounded-lg bg-gray-200 hover:bg-gray-100">    
                        <img className="w-7 mx-auto my-0" alt='emoji' src={`${toAbsoluteUrl("/media/images/emojis/birthdaycake.png")}`} />
                    </span>
                    <div className="flex flex-row items-center font-sans text-xs px-3 py-2 rounded-lg flex-none w-32" style={{ background: "#9acd32", color: "black", padding: "6px ​10px"}}>
                        <span style={{ color: "black" }} className="font-semibold text-gray-600">View details</span>
                        <ArrowNarrowRightIcon className="ml-3 w-5" />
                    </div>                    
                </div>
            </div>
            <div className="flex flex-col rounded-2xl h-40 w-full bg-white mb-6 px-5 py-4 border-gray-200" style={{ background: "rgb(0 0 0)", borderColor: "rgb(34 34 34)", borderWidth: "1px"}}>
                <div className="flex flex-none flex-col col-start-1 col-end-8">
                    <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500" style={{ color: "#c4c4c4"}}>
                        NextJs Event
                    </h1>
                    <p className="font-sans" style={{ color: "#6e7463"}}>
                        Anne's Birthday
                    </p>
                </div>
                <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-between mt-6">
                    <span style={{ background: "rgb(15 15 15)" }} className="flex items-center justify-items-center w-20 h-10 rounded-lg bg-gray-200 hover:bg-gray-100">    
                        <img className="w-7 mx-auto my-0" alt='emoji' src={`${toAbsoluteUrl("/media/images/emojis/developer.png")}`} />
                    </span>
                    <div className="flex flex-row items-center font-sans text-xs px-3 py-2 rounded-lg flex-none w-32" style={{ background: "#9acd32", color: "black", padding: "6px ​10px"}}>
                        <span style={{ color: "black" }} className="font-semibold text-gray-600">View details</span>
                        <ArrowNarrowRightIcon className="ml-3 w-5" />
                    </div>                    
                </div>
            </div>
            <div className="flex flex-col rounded-2xl h-40 w-full bg-white mb-6 px-5 py-4 border-gray-200" style={{ background: "rgb(0 0 0)", borderColor: "rgb(34 34 34)", borderWidth: "1px"}}>
                <div className="flex flex-none flex-col col-start-1 col-end-8">
                    <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500" style={{ color: "#c4c4c4"}}>
                        GRE Exams
                    </h1>
                    <p className="font-sans" style={{ color: "#6e7463"}}>
                        Wuse 2, Abuja
                    </p>
                </div>
                <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-between mt-6">
                    <span style={{ background: "rgb(15 15 15)" }} className="flex items-center justify-items-center w-20 h-10 rounded-lg bg-gray-200 hover:bg-gray-100">    
                        <img className="w-7 mx-auto my-0" alt='emoji' src={`${toAbsoluteUrl("/media/images/emojis/developer.png")}`} />
                    </span>
                    <div className="flex flex-row items-center font-sans text-xs px-3 py-2 rounded-lg flex-none w-32" style={{ background: "#9acd32", color: "black", padding: "6px ​10px"}}>
                        <span style={{ color: "black" }} className="font-semibold text-gray-600">View details</span>
                        <ArrowNarrowRightIcon className="ml-3 w-5" />
                    </div>                    
                </div>
            </div> */}



            {/* <div className="flex flex-row justify-center pt-8">
                <span className="rounded-full p-2 bg-white mr-6 hover:bg-gray-300">
                    <ChevronLeftIcon className="h-7 w-7" />
                </span>
                <span className="rounded-full p-2 bg-white hover:bg-gray-300">
                    <ChevronRightIcon className="h-7 w-7" />
                </span>

            </div> */}
        </div>  
    )
}