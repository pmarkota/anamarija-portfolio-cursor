import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gray-100 h-[53rem] home-hero">
      <h1 className="px-20 pb-12 mt-0 mb-0 text-2xl font-extrabold text-gray-800 md:text-5xl ">
        HEY, MY NAME IS ANAMARIJA
      </h1>
      <p className="text-xl text-gray-600 px-28 md:text-lg">
        I am a UI/UX Designer passionate about creating beautiful and
        user-friendly interfaces. I have a lot of experience in designing and I
        am always looking for new challenges.
      </p>
      {/* create an appealing purple button and make it modern and fun with framer motion like a bit tilt animation and scale up when hover and change of color so rotate it a bit on hover*/}
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 5,
          backgroundColor: "#8B5CF6",
          speed: 2,
        }}
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="px-8 py-3 mt-10 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-violet-500 hover:shadow-xl hover:bg-violet-600"
      >
        Get in Touch
      </motion.button>
    </section>
  );
};
