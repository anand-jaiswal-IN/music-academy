"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import webinarsData from "@/data/upcoming_webinars.json";

function UpcomingWebinarSection() {
  const webinars = webinarsData;
  return (
    <div className="px-10 md:px-32 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Our Upcoming Webinar
        </h1>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?</p>
      </div>
      <HoverEffect items={webinars} />
    </div>
  );
}

export default UpcomingWebinarSection;
