import React from "react";
import { buttonVariants } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-4 w-full">
      <div className="flex flex-col h-full container max-w-4xl">
        <div className="flex-1 h-full flex flex-col justify-center items-center gap-8 py-24">
          <h1 className="text-white text-4xl font-semibold text-center">
            Want to know more about me?
          </h1>
          <a
            href="mailto:matthewlemuelr@gmail.com"
            className={buttonVariants({
              variant: "default",
              className: "w-max px-6",
            })}
          >
            Send me an email
          </a>
        </div>
        <Separator className="bg-neutral-600" />
        <div className="flex gap-4 mt-4">
          <Link href={"https://github.com/mlrey7"}>
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 text-white hover:text-blue-500"
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/matthew-lemuel-rey-714714276/"}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-6 h-6 text-white hover:text-blue-500"
            />
          </Link>
          <a href="mailto:matthewlemuelr@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-6 h-6 text-white hover:text-blue-500"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
