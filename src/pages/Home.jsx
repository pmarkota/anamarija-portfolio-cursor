import React from "react";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { MySkills } from "../components/MySkills";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";

export const Home = () => {
  return (
    <>
      <Hero />
      <section id="about">
        <AboutMe />
      </section>
      <MySkills />
      <ProjectsSection />

      <section id="contact">
        <ContactSection />
      </section>
      <FooterSection />
    </>
  );
};
