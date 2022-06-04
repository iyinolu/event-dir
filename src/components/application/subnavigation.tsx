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
    {/* TODO: add content to subnavigation bar. */}
    </nav>
  );
};

export default SubNavigation;
