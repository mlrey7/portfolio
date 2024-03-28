"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const NavigationBarContent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="sm:hidden flex">
          <NavigationMenuTrigger className="text-white" />
          <NavigationMenuContent className="sm:hidden">
            <ul className="flex flex-col py-2">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm text-blue-500 font-semibold"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm text-blue-500 font-semibold"
                  )}
                >
                  Projects
                </NavigationMenuLink>
              </Link>
              <Link href="/experience" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm text-blue-500 font-semibold"
                  )}
                >
                  Experience
                </NavigationMenuLink>
              </Link>
              <NavigationMenuLink
                className={cn("px-4 py-2 text-sm text-blue-500 font-semibold")}
                href="mailto:matthewlemuelr@gmail.com"
              >
                matthewlemuelr@gmail.com
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="max-sm:hidden">
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-white/85")}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="max-sm:hidden">
          <Link href={"/projects"} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-white/85")}
            >
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="max-sm:hidden">
          <Link href={"/experience"} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-white/85")}
            >
              Experience
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="max-sm:hidden">
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "text-white/85")}
            href="mailto:matthewlemuelr@gmail.com"
          >
            matthewlemuelr@gmail.com
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBarContent;
