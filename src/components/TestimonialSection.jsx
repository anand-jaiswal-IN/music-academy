"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import testimonialsData from "@/data/testimonials.json";

function TestimonialSection() {
  const testimonials = testimonialsData;
  return (
    <div className="w-full h-[50vh] md:h-[80vh] p-10 sm:px-0 flex flex-col justify-center items-center overflow-hidden dark:bg-black dark:bg-dot-white/[0.2]">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Hear our Harmony :{" "}
        <span className="text-teal-400"> Voice of success</span>
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="normal"
        speed="slow"
      />
    </div>
  );
}

export default TestimonialSection;
