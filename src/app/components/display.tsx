/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { 
    ChevronRightIcon, 
    ChevronLeftIcon, 
    ArrowNarrowRightIcon
} from '@heroicons/react/solid';
import { toAbsoluteUrl } from '../../utils/helpers';



export default function EventList() {

    

    return (
        <div className="flex flex-col rounded-xl bg-gray-100 h-3/4 w-9/12 px-8 pt-8 pb-7">
            <div className="flex rounded-2xl h-40 w-full bg-white mb-6 px-5 py-4 border-2 border-gray-200">
                <div className="flex flex-none flex-col col-start-1 col-end-8">
                    <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500">
                        Apple Event
                    </h1>
                    <p className="font-sans text-gray-500">
                        California Streaming
                    </p>
                    <div className="flex flex-row items-center font-sans text-xs px-3 py-2 bg-blue-300 rounded-lg mt-5 flex-none w-32">
                        <span className="font-semibold text-gray-600">View details</span>
                        <ArrowNarrowRightIcon className="ml-3 w-5" />
                    </div>
                </div>
                <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-end">
                    <span className="flex items-center justify-items-center w-20 h-14 rounded-lg bg-gray-200 hover:bg-gray-100">    
                        <img className="w-10 mx-auto my-0" alt='emoji' src={`${toAbsoluteUrl("/media/images/emojis/developer.png")}`} />
                    </span>
                </div>
            </div>
            <div className="flex rounded-2xl h-40 w-full bg-white px-5 py-4 border-2 border-gray-200">
                <div className="flex flex-col col-start-1 col-end-8">
                    <h1 className="font-sans font-extrabold text-2xl mb-1 text-purple-500">Anne's Birthday</h1>
                    <p className="font-sans text-gray-500">1800 Blvd. Party and Drinks...</p>
                    <div className="flex flex-row items-center font-sans text-xs px-3 py-2 bg-blue-300 rounded-lg mt-5 w-32">
                        <span className="font-semibold text-gray-600">View details</span>
                        <ArrowNarrowRightIcon className="ml-3 w-5" />
                    </div>
                </div>
                <div className="flex flex-row flex-grow col-start-8 col-end-12 items-center justify-end">
                    <span className="flex items-center justify-items-center w-20 h-14 rounded-lg bg-gray-200 hover:bg-gray-100">    
                        <img className="w-10 mx-auto my-0" alt='emoji' src={`${toAbsoluteUrl("/media/images/emojis/birthdaycake.png")}`} />
                    </span>
                </div>
            </div>
            <div className="flex flex-row justify-center pt-8">
                <span className="rounded-full p-2 bg-white mr-6 hover:bg-gray-300">
                    <ChevronLeftIcon className="h-7 w-7" />
                </span>
                <span className="rounded-full p-2 bg-white hover:bg-gray-300">
                    <ChevronRightIcon className="h-7 w-7" />
                </span>

            </div>
        </div>  
    )
}