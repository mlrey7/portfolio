import React from "react";
import NavigationBarContent from "./NavigationBarContent";

const NavigationBar = () => {
  return (
    <div className="fixed flex justify-center top-0 inset-x-0 bg-blue-500 py-2">
      <NavigationBarContent />
    </div>
  );
};

export default NavigationBar;
