import React from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
  ];

  const skills = [
    "UI/UX Design",
    "Web Design",
    "Mobile Design",
    "Design Systems",
    "Prototyping",
    "User Research",
  ];

  return (
    <section
      className="py-12 sm:py-20 bg-gray-50 dark:bg-dark-secondary"
      id="about"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 mb-12 sm:mb-20 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 to-violet-400/20 blur-3xl" />
            <div className="relative p-4 sm:p-8 bg-white dark:bg-dark-primary rounded-3xl shadow-xl">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-dark-text">
                Crafting Digital Experiences with Purpose
              </h2>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                As a UI/UX designer, I blend creativity with functionality to
                create intuitive and engaging digital experiences. My approach
                combines user-centered design principles with modern aesthetics.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-2 sm:p-4 text-center bg-gray-50 dark:bg-dark-secondary rounded-xl"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-violet-600 dark:text-violet-400">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-violet-600 bg-violet-100 rounded-full dark:text-violet-300 dark:bg-violet-900/30"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="p-6 bg-white dark:bg-dark-primary rounded-xl shadow-lg">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-dark-text">
                My Design Philosophy
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in creating designs that not only look beautiful but
                also solve real problems. Every pixel has a purpose, and every
                interaction should feel natural and intuitive.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-500 hover:to-violet-300 shadow-lg hover:shadow-xl"
          >
            Let's Create Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
