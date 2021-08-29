import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import Services from "./Services";

const MainLayout = () => {
  return (
    <main className="">
      <Intro />
      <Services />
      <Projects />
    </main>
  );
};

export default MainLayout;
