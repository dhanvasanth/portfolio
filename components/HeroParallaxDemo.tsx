"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {

  return (<div id="projects" className="relative top-[100vh] "> 
            <HeroParallax products={products} /> 
          </div>
    );
}
export const products = [
  {
    title: "",
    link: "",
    thumbnail:
      "/trans.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:"/rogue.png"
  },

  {
    title: "",
    link: "",
    thumbnail:  "/trans.png"
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/moon.png",
  },
  {
    title: "",
    link: "",
    thumbnail:  "/trans.png"
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:"/moon.png"
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:  "/editorially.png"
  },
  {
    title: "",
    link: "",
    thumbnail:  "/trans.png"
  }
];
