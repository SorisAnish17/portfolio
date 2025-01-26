import React from "react";
import Header from "../presentation/header/index";
import Hero from "../presentation/hero/index";
import Skills from "../presentation/skills/index";
import Experience from "../presentation/experience/index";
import AboutMe from "../presentation/about-me/index";
import Projects from "../presentation/projects/index";
import Education from "../presentation/education/index";
import Contact from "../presentation/contact/index";
import Footer from "../presentation/footer/index";

const index = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default index;
