/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { SunIcon } from "@heroicons/react/solid";
import { capitalize } from "../../utils/helpers";
import { NavProps } from "../types";
import { timeOfTheDay } from "../../utils/helpers";

export default function NavigationBar({
  userState,
  sideBarState,
  setSideBarState,
  username,
}: NavProps) {
  return (
    <header
      className="py-4 px-4 md:px-10 flex flex-row items-center justify-between w-screen fixed z-[1000]"
      style={{ background: "rgb(15 15 15)" }}
    >
      <div className="flex flex-row items-center">
        <span className="font-sans md:ml-5 text-[#9acd3191] font-[600]">
          {`${timeOfTheDay()} `} <span className="text-[#6a6a6a]">{`${username}`}</span>
        </span>
      </div>
      <div
        className="hidden md:flex md:flex-row md:justify-between md:w-[250px]"
      >
        <div className="flex flex-row justify-center py-1 px-4 rounded-md hover:bg-gray-100 text-white hover:text-black transition-colors ease-linear duration-[200ms]">
          <button
            style={{ color: "inherit" }}
            className="font-sans"
            onClick={() => setSideBarState({ open: true, data: userState })}
          >
            My Account
          </button>
        </div>
        <div className="flex flex-row justify-center py-1 px-4 rounded-md hover:bg-gray-100 text-white hover:text-black transition-colors ease-linear duration-[200ms]">
          <button style={{ color: "inherit" }} className="font-sans">
            All Events
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <span>
          <SunIcon style={{ color: "#cccccc" }} className="h-6 w-6 md:m-2" />
        </span>
        <span
          className="hidden font-sans"
          style={{ color: "#cccccc" }}
        >{`Good Afternoon, ${capitalize(username ? username : "n/a")}`}</span>
      </div>
    </header>
  );
}
