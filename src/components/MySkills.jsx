import React from "react";
import { motion } from "framer-motion";

export const MySkills = () => {
  const skills = [
    {
      category: "Design",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      gradient: "from-violet-400 via-fuchsia-500 to-violet-600",
      shadowGradient: "shadow-[0_20px_50px_-15px_rgba(139,92,246,0.3)]",
      bgGlow:
        "after:bg-gradient-to-r after:from-violet-400 after:to-violet-600",
      items: [
        "UI/UX Design",
        "Visual Design",
        "Interaction Design",
        "Design Systems",
      ],
    },
    {
      category: "Tools",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      gradient: "from-violet-400 via-fuchsia-500 to-violet-600",
      shadowGradient: "shadow-[0_20px_50px_-15px_rgba(139,92,246,0.3)]",
      bgGlow:
        "after:bg-gradient-to-r after:from-violet-400 after:to-violet-600",
      items: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      category: "Process",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      gradient: "from-violet-400 via-fuchsia-500 to-violet-600",
      shadowGradient: "shadow-[0_20px_50px_-15px_rgba(139,92,246,0.3)]",
      bgGlow:
        "after:bg-gradient-to-r after:from-violet-400 after:to-violet-600",
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
    <section className="py-12 sm:py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-8 sm:mb-12 glow-wrapper"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center glow-container">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 md:text-5xl"
            >
              Professional Skills
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-center text-gray-600 dark:text-gray-300"
            >
              Combining creativity with technical expertise to deliver
              exceptional digital experiences
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />

              <div className="relative p-4 sm:p-8 bg-white dark:bg-dark-primary rounded-2xl border border-violet-100 dark:border-violet-900 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6 space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    <div className="text-white">{skillGroup.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-3 space-x-3 transition-all duration-200 bg-gray-50 dark:bg-dark-secondary rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/30"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
