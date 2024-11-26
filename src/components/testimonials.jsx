import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <ChatBubbleLeftRightIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          References
        </h1>
        <div className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Available upon request.
        </div>
      </div>
    </section>
  );
}
