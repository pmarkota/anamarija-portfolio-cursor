import React from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center bg-gray-100">
      <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-4xl">
        ABOUT ME
      </h2>
      <hr className="w-16 h-2 mb-8 rounded-full bg-violet-500" />
      <p className="max-w-2xl mb-20 text-lg text-gray-600 md:text-lg">
        Hello! I'm Anamarija, a passionate UI/UX designer who loves crafting
        beautiful and functional user experiences. I have a keen eye for detail
        and a commitment to excellence in everything I create.
      </p>
      <div className="max-w-3xl text-left">
        <h3 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
          Get to know me!
        </h3>
        <p className="text-lg text-gray-600 md:text-lg">
          <p className="max-w-3xl text-lg text-gray-600 md:text-lg">
            Beyond my work in <span className="font-bold">design</span>, I'm an
            avid <span className="text-violet-500">learner</span> always looking
            to expand my skill set and explore new trends in the industry. I{" "}
            <span className="font-bold">believe</span> in the power of{" "}
            <span className="text-violet-500">design</span> to solve problems
            and make the world a better place.
          </p>
          <p className="max-w-3xl text-lg text-gray-600 md:text-lg">
            When I'm not designing, you can find me exploring the outdoors,
            reading a good book, or experimenting with new recipes in the
            kitchen.
          </p>
          <p className="max-w-3xl text-lg text-gray-600 md:text-lg">
            Let's <span className="font-bold">connect</span> and create
            something <span className="text-violet-500">amazing</span> together!
          </p>
        </p>
        {/* create exciting button that says CONTACT, is modernly styled, is vioolet color and use framer motion to add some fun to it with animations while being different from one from hero.jsx */}
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
          CONTACT
        </motion.button>
      </div>
    </section>
  );
};
