import React from "react";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";
import Trends from "./Trends";

const MainLayout = () => {
  return (
    <main>
      <Intro />
      <Services />
      <Projects />
      <Trends />
      <Footer />
    </main>
  );
};

export default MainLayout;
