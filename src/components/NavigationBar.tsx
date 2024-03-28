import React from "react";
import NavigationBarContent from "./NavigationBarContent";

const NavigationBar = () => {
  return (
    <div className="fixed flex justify-between sm:justify-center top-0 inset-x-0 bg-blue-500 py-2 z-20 items-center max-sm:px-8">
      <h1 className="text-lg text-white sm:hidden">Matthew Rey</h1>
      <NavigationBarContent />
    </div>
  );
};

export default NavigationBar;
