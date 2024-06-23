//create myskills component that showcases skills that i have and that i am proud of. It should be simple and clean while visually appealing, It should say My Skills and have a list of skills in small little boxes like HTML, CSS, but instead of programming skills, put UI/UX skills as placeholders. they should be read from an array

import React from "react";
import { motion } from "framer-motion";

export const MySkills = () => {
  const skills = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "User Testing",
    "Interaction Design",
    "Visual Design",
    "UI/UX Design",
    "User Flows",
    "Design Systems",
    "Figma",
    "Adobe XD",
    "Sketch",
  ];

  return (
    <section className="flex flex-col items-center justify-center py-8 text-center bg-gray-100">
      <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-4xl">
        MY SKILLS
      </h2>
      <hr className="w-16 h-2 mb-8 rounded-full bg-violet-500" />
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 m-0 text-lg font-semibold transition-all duration-300 transform rounded-lg shadow-lg text-slate-600 bg-slate-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
