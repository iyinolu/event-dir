import React from "react";
// import { PlusCircleIcon } from "@heroicons/react/solid";

type Props = {
  callbacks: componentCallbacks;
};

type componentCallbacks = {
  createEvent: () => void;
};

const SubNavigation = ({ callbacks }: Props) => {
  return (
    <nav className="px-4 md:px-10 mt-3 flex flex-row justify-between items-center">
      {/* <button
        style={{
          fontSize: "11px",
          fontWeight: "bold",
          padding: "2px 9px",
          background: "#9acd32",
          borderColor: "yellowgreen",
        }}
        onClick={callbacks.createEvent}
        className="font-sans flex items-center py-1 px-4 rounded-md border-2 border-grey-500 ml-auto"
      >
        Today's Event
        <PlusCircleIcon className="ml-4 h-5 w-5" />
      </button> */}
    </nav>
  );
};

export default SubNavigation;
