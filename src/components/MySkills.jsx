import React from "react";
import { motion } from "framer-motion";

export const MySkills = () => {
  const skills = [
    {
      category: "Design",
      gradient: "from-rose-400 via-fuchsia-500 to-indigo-500",
      bgGlow: "after:bg-fuchsia-500",
      items: [
        "UI/UX Design",
        "Visual Design",
        "Interaction Design",
        "Design Systems",
      ],
    },
    {
      category: "Tools",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      bgGlow: "after:bg-blue-500",
      items: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      category: "Process",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      bgGlow: "after:bg-teal-500",
      items: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-gray-900 dark:text-dark-text md:text-5xl"
          >
            My Skills
          </motion.h2>
          <div className="w-16 h-1 mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-8 bg-white rounded-2xl dark:bg-dark-primary shadow-lg group hover:shadow-xl transition-all duration-300 
                after:absolute after:content-[''] after:-z-10 after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 
                after:w-[calc(100%-2rem)] after:h-[calc(100%-2rem)] after:opacity-40 after:blur-2xl after:rounded-2xl ${skillGroup.bgGlow}`}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skillGroup.gradient} opacity-10 dark:opacity-20 rounded-2xl`}
              ></div>

              <h3
                className={`mb-6 text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r ${skillGroup.gradient}`}
              >
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${skillGroup.gradient} rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
