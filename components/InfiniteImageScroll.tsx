"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-image-scroll";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[60rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden top-[20em]">
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-[100px]">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
            My Projects <br /> And internships
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            This section briefs about the upcoming and on going projects and internships
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "In this internship at Stitch Financial Technologies Ltd, I worked on backend development using Golang. I started by learning Go basics and fundamentals, Linux basics, and used WSL for development. I also learned dependency injection using Wire, integrated GORM with MariaDB for ORM and database interaction, and used the Gin framework to build fast and modular RESTful APIs efficiently.",
    name: "Internship",
    title: "Stitch Financial technologies",
  },
  {
    quote:
      "I developed the TicketSys UI using Next.js and TypeScript, implementing full CRUD operations for the ticketing system. On the backend, I built services using Golang, connected with MariaDB for data persistence. I also implemented SMTP-based OTP verification for login through a dedicated email-service. Additionally, I designed and developed the user-manager microservice with JWT authentication and planned the User Access Management (UAM) schema for role-based access control",
    name: "Project",
    title: "Simple ticketing System",
  },
  
];
