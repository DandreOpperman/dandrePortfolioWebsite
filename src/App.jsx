import React from "react";
import "./index.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}

export default App;
