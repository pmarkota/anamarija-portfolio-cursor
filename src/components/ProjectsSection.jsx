import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A short description of Project One.",
    images: [
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
      "https://via.placeholder.com/800x400.png?text=Project+One+Image+2",
      // Add more images as needed
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A short description of Project Two.",
    images: [
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
      "https://via.placeholder.com/800x400.png?text=Project+Two+Image+2",
      // Add more images as needed
    ],
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 text-center bg-gray-100">
      <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
        PROJECTS
      </h2>
      <hr className="w-16 h-2 mb-8 rounded-full bg-violet-500" />
      <p className="max-w-2xl mb-8 text-lg text-gray-600 md:text-xl">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-contain w-full h-64 mb-4"
                />
                <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mb-4 text-lg text-gray-600">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="px-4 py-2 text-white transition duration-500 ease-in-out transform rounded shadow-lg bg-violet-500 hover:bg-violet-700 hover:-translate-y-1 hover:scale-110"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectsSection;
