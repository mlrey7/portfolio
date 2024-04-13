import React from "react";
import NavigationBarContent from "./NavigationBarContent";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <header className="fixed flex justify-between sm:justify-center top-0 inset-x-0 bg-blue-500 py-2 z-20 items-center max-sm:px-8">
      <Link href={"/"} className="text-lg text-white sm:hidden">
        Matthew Rey
      </Link>

      <NavigationBarContent />
    </header>
  );
};

export default NavigationBar;
