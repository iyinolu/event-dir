/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SunIcon } from '@heroicons/react/solid';
import { AuthState } from '../../redux/reducer/authentication/types';
import { capitalize } from '../../utils/helpers';

type NavProps = {
    userState?:AuthState;
}

export default function NavigationBar({userState}:NavProps) {
    return (
        <header className="py-2 px-10 flex flex-row items-center justify-between w-screen" style={{ background: "rgb(15 15 15)"}}>
            <div className="flex flex-row items-center">
                {/* <span className="font-sans py-0.5 px-2 rounded-md" style={{ backgroundColor: "#cccccc"}}>Today</span> */}
                <span className="font-sans ml-5" style={{ color: "#cccccc"}}> Friday 7th October </span>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row justify-center ml-9 py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2  text-white hover:text-black">
                    <button style={{ color: "inherit"}} className="font-sans">My Account</button>
                </div>
                <div className="flex flex-row justify-center ml-9 py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2 text-white hover:text-black">
                    <button style={{ color: "inherit"}} className="font-sans">All Events</button>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <span><SunIcon style={{ color: "#cccccc"}} className="h-6 w-6 m-2" /></span>
                <span className="font-sans" style={{ color: "#cccccc"}}>{`Good Afternoon, ${capitalize(userState ? userState.username : 'n/a')}`}</span>
            </div>
        </header>
    )
}