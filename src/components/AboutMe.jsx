import React from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark-primary" id="about">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-gray-900 dark:text-dark-text md:text-5xl"
          >
            About Me
          </motion.h2>
          <div className="w-16 h-1 mb-6 bg-violet-500 rounded-full"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-text">
              My Journey
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm Anamarija, a passionate UI/UX designer with a keen eye
              for detail and a commitment to creating exceptional user
              experiences. My journey in design has been driven by a deep
              fascination with how people interact with digital products.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Beyond my work in{" "}
              <span className="font-bold text-violet-600 dark:text-violet-400">
                design
              </span>
              , I'm an avid{" "}
              <span className="font-bold text-violet-600 dark:text-violet-400">
                learner
              </span>{" "}
              always exploring new trends and technologies in the industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-text">
              What I Do
            </h3>
            <div className="space-y-4">
              {[
                "Create intuitive and beautiful user interfaces",
                "Conduct user research and usability testing",
                "Develop comprehensive design systems",
                "Collaborate with development teams",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 mt-1 text-violet-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
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
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
