import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FooterSection } from "../components/FooterSection";
import { projects } from "../data/projects"; // Import the projects data

const Projects = () => {
  const categories = ["All", "Web Design", "Mobile Apps", "UI/UX", "Branding"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects // Use all projects when "All" is selected
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-dark-secondary min-h-screen">
        <div className="container px-4 mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600">
              My Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my portfolio of projects spanning web design, mobile
              applications, and branding work.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30"
                    : "bg-white dark:bg-dark-primary text-gray-600 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-900/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                      View Details
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
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Projects;
