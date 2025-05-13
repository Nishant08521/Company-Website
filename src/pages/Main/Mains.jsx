import React from "react";
import Hero from "../../components/Hero/Hero";
import Servics from "../../components/Servics/Servics";
import About from "../../components/About/About";
import Counter from "../../components/Counter/Counter";
import Work from "../../components/Work/Work";
import Itservices from "../../components/Itservices/Itservices";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Ourclients from "../../components/Ourclients/Ourclients";

const Mains = () => {
  return (
    <div>
      <Hero />
      <Servics />
      <About />
      <Counter />
      <Work />
      <Itservices />
      <Team />
      <Contact />
      <Projects />
      <Ourclients />
    </div>
  );
};

export default Mains;
