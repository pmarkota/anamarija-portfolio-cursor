import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <section
      className="relative py-20 bg-gray-50 dark:bg-dark-secondary"
      id="projects"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 glow-wrapper"
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
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
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-center text-gray-600 dark:text-gray-300"
            >
              Explore my recent work. Each project represents a unique challenge
              and creative solution.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />

              <div className="relative bg-white dark:bg-dark-primary rounded-2xl overflow-hidden border border-violet-100 dark:border-violet-900 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-sm text-violet-600 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 shadow-lg hover:shadow-xl shadow-violet-500/20"
                  >
                    View Case Study
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-400 hover:from-violet-500 hover:via-fuchsia-400 hover:to-violet-300 shadow-lg hover:shadow-xl shadow-violet-500/20"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
