"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import teachersData from "@/data/teachers.json";

function InstructorSection() {
  const teachers = teachersData;
  return (
    <div className="overflow-hidden h-[100vh] relative px-8">
      <WavyBackground className="w-full mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-7xl md:text-5xl font-bold mb-2">
          Meet Our Instructor
        </h1>
        <p className="mb-5 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
          accusamus!
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={teachers} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default InstructorSection;
