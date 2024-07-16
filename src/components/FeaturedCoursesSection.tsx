"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { useId } from "react";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCoursesSection() {
  const featuredCourses = courseData.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="px-10 md:px-32">
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Our Popular Courses</h1>
        <p className="mb-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          dignissimos.
        </p>
      </div>
      <div className="featured-courses-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mb-10">
        {featuredCourses.map((c) => (
          <div className="" key={useId()}>
            <Link href={"/courses/" + c.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-5 bg-white dark:bg-zinc-900">
                <h3 className="text-xl font-bold mb-4">{c.title}</h3>
                <p className="text-sm mb-4 border-[0.1px] border-teal-400 inline-block text-white rounded-full py-1 px-2">
                  {c.slug}
                </p>
                <p className="mb-2">{c.description}</p>
              </BackgroundGradient>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center flex justify-center mb-10">
        <Link href={"/courses/all-courses"}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            View All Courses
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCoursesSection;
