"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimatedHeader = () => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["Web Developer", "Front End Engineer"],
      typeSpeed: 50,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="text-blue-500" ref={ref}></span>;
};

export default AnimatedHeader;
