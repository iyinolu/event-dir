import React from 'react';
import { SunIcon } from '@heroicons/react/solid';

export default function NavigationBar() {
    return (
        <header className="py-2 px-10 flex flex-row items-center justify-between w-screen" style={{ background: "#161b22"}}>
            <div className="flex flex-row items-center">
                {/* <span className="font-sans py-0.5 px-2 rounded-md" style={{ backgroundColor: "#cccccc"}}>Today</span> */}
                <span className="font-sans ml-5" style={{ color: "#cccccc"}}> Friday 7th October </span>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row justify-center py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2">
                    <button className="font-sans" style={{ color: "#cccccc"}}>My Account</button>
                </div>
                <div className="flex flex-row justify-center ml-9 py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2">
                    <button className="font-sans">All Events</button>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <span><SunIcon style={{ color: "#cccccc"}} className="h-6 w-6 m-2" /></span>
                <span className="font-sans" style={{ color: "#cccccc"}}>Good Afternoon, Micheal</span>
            </div>
        </header>
    )
}