"use client";
import React from "react";
import whyChooseUsContent from "../data/why_choose_us.json";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function WhyChooseUsSection() {
    const content = whyChooseUsContent.content;
  return (
    <div className="why-choose-us-container">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUsSection;
