import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-secondary dark:to-dark-primary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-grid-pattern dark:opacity-10"></div>
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-dark-text sm:text-5xl md:text-6xl">
            HEY, I'M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400">
              ANAMARIJA
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            A passionate UI/UX Designer crafting beautiful and functional
            digital experiences that users love.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
              Get in Touch
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-8 py-3 text-lg font-semibold transition-all duration-300 border-2 rounded-full text-gray-700 dark:text-dark-text border-violet-500 hover:bg-violet-500 hover:text-white dark:hover:text-white"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
