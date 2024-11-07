import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-dark-secondary">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
          Project not found
        </h2>
        <Link
          to="/"
          className="mt-4 text-violet-600 dark:text-violet-400 hover:underline"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    customPaging: () => (
      <div className="w-3 h-3 mx-2 rounded-full bg-violet-200 dark:bg-violet-900"></div>
    ),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-secondary dark:to-dark-primary"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-violet-600 to-violet-400 text-white"
          >
            {project.category}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold text-gray-900 dark:text-dark-text md:text-5xl lg:text-6xl"
          >
            {project.title}
          </motion.h1>
        </div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 overflow-hidden rounded-2xl shadow-xl"
        >
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Content Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white dark:bg-dark-primary rounded-2xl shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400">
                The Challenge
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.challenge}
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-dark-primary rounded-2xl shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400">
                The Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.solution}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white dark:bg-dark-primary rounded-2xl shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400">
                The Impact
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.impact}
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-dark-primary rounded-2xl shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${project.gradient} rounded-full shadow-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-500 hover:to-violet-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-4 h-4 mr-2 rotate-180"
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
            Back to Projects
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
