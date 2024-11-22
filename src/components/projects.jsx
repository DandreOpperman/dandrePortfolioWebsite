import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
// import { projList } from "../../utils/data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ArrowRightIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "NEWS API",
              subtitle: "Backend",
              description:
                "The purpose of this API is accessing application data programmatically, which provides information to the front end architecture of the next project NC-NEWS. parameterized queries were used to avoid SQL injection attacks. This project was created using: Javascript, Documentation, Test driven development (TDD), Jest, Supertest, Express, Model view controller (MVC), PostgreSQL, Fs/promises, Hosting using supabase for the database and render for the API",
              image: "./News-API.jpeg",
              link: "https://news-api-ovyc.onrender.com/",
            },
            {
              title: "NC News",
              subtitle: "frontend",
              description:
                "This project is a social news aggregation, web content rating, and discussion website. It allows users to view articles, read comments, vote on articles and post new comments. This project used the following skills and technologies: JavaScript, React.js, React Routers, State, HTML, CSS, Axios, Error-Handling, Vite, Conditional Rendering, Hosting, Responsive Design ",
              image: "./NC-NEWS.jpeg",
              link: "https://nc-news-dandreopperman.netlify.app/",
            },
            {
              title: "Smart money API",
              subtitle: "backend",
              description:
                "this API builds on the knowledge of the previous News API, with more refferce tables and relational data in PostgreSQL, and significantly more endpoints and tests. This project was created using: Javascript, Documentation, Test driven development (TDD), Jest, Supertest, Express, Model view controller (MVC), PostgreSQL, Fs/promises, Hosting using supabase for the database and render for the API",
              image: "./smartMoneyApi.jpeg",
              link: "https://smart-money-backend.onrender.com/api",
            },
            {
              title: "Smart Money App",
              subtitle: "frontend",
              description:
                "This cross platform app and website alows users to set financial goals, track spending that occurs monthly and daily, see that spending visualised graphically and make financial descions accordingly. Importantly this group project was coded in Flutter in the DART coding language. our team decided that the two week project phase would be an opertunity to showcase our ability to learn new technologies fast, use documentation to overcome obsticles and execute asthetically pleasing and technically robust full-stack coding projects. For a demo and explination of the application please watch this video https://youtu.be/zg74qv8YIL0. This project was created using: Dart, Flutter, Documentation, Trello, Figma and Agile methodology",
              image: "./SmartMoneyApp.jpeg",
              link: "https://smartmoney1234.netlify.app/",
            },
          ].map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4 z-0"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
