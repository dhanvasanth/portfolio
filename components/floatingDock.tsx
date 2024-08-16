"use client"

import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "",
      icon: (
        <h1>Home</h1>
      ),
      href: "#home",
    },

    {
      title: "",
      icon: (
        <h1>About</h1>
      ),
      href: "#about",
    },
    {
      title: "",
      icon: (
        
        <h1>Edu</h1>
      ),
      href: "#edu",
    },
    {
      title: "",
      icon: (
        <h1>Tech</h1>
      ),
      href: "#tech",
    }
  ];
  return (
    <div className="fixed top-[-300px] right-[10px] flex items-center justify-center h-[35rem] w-full z-[1000]">
      <FloatingDock
          desktopClassName =" dock translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
