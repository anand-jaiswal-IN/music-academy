"use client";

import Image from "next/image";
import React, { useId } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import coursesData from "@/data/music_courses.json";

function AllCourses() {
  const courses = coursesData;
  return (
    <div className="px-10 md:px-32 mt-36">
      <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center">
        All Music Courses
      </h1>
      <div className="all-courses-container grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((c) => (
          <div key={useId()}>
            <CardContainer className="inter-var p-4">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {c.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {c.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={c.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={c.title + " image"}
                  />
                </CardItem>
                <div className="flex justify-between items-center">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={
                      "/instructor/" +
                      c.instructor.toLowerCase().replace(/\s/g, "-")
                    }
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    {c.instructor} →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={"/courses/" + c.id}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mt-4"
                  >
                    Read More
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
