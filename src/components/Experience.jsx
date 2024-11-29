import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="flex flex-col w-full mb-20">
          <UserCircleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white mx-auto">
            Current Coding Experience
            <br />
            <br className="hidden lg:inline-block" />
            Trainee Software Developer
            <br /> Northcoders: July - October 2024
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            • Comprehensive Curriculum: Proficiency in both front-end and
            back-end JavaScript technologies. <br />• Hands-On Learning:
            Consistently deepening my understanding through daily sprints and
            long-form projects. <br />• Collaboration: Continuous
            pair-programming during sprints, utilising technical language .{" "}
            <br />• Real-World Application: Demonstrating my ability to apply
            skills through a range of back-end and front-end projects.
          </p>
        </div>
      </div>
   