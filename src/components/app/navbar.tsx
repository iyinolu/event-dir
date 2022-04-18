/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { SunIcon } from "@heroicons/react/solid";
import { AuthState } from "../../redux/reducer/authentication/types";
import { capitalize } from "../../utils/helpers";
import { useAppSelector, useAppDispatch } from "../../App";
import { navBarContext } from "../../containers/app/BaseContainer";

type NavProps = {
  userState: AuthState;
};

export default function NavigationBar({ userState }: NavProps) {
  const context = React.useContext(navBarContext);
  const { sideBarCtx, username } = context;

  return (
    <header
      className="py-4 px-4 md:px-10 flex flex-row items-center justify-between w-screen"
      style={{ background: "rgb(15 15 15)" }}
    >
      <div className="flex flex-row items-center">
        <span className="font-sans md:ml-5" style={{ color: "#cccccc" }}>
          {" "}
          Friday 7th October{" "}
        </span>
      </div>
      <div className="hidden md:flex md:flex-row">
        <div className="flex flex-row justify-center ml-9 py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2  text-white hover:text-black">
          <button
            style={{ color: "inherit" }}
            className="font-sans"
            onClick={() =>
              sideBarCtx.setSideBarState({ open: true, data: userState })
            }
          >
            My Account
          </button>
        </div>
        <div className="flex flex-row justify-center ml-9 py-1 px-4 rounded-md hover:bg-gray-100 hover:border-2 text-white hover:text-black">
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
