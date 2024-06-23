import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A detailed description of Project One.",
    images: [
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
      "https://via.placeholder.com/800x400.png?text=Project+One+Image+2",
      // Add more images as needed
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A detailed description of Project Two.",
    images: [
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
      "https://via.placeholder.com/800x400.png?text=Project+Two+Image+2",
      // Add more images as needed
    ],
  },
  // Add more projects as needed
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

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
        {project.title}
      </h2>
      <div className="w-full max-w-4xl mb-8">
        <Slider {...settings}>
          {project.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${project.title} Image ${index + 1}`}
                className="object-contain w-full h-64"
              />
            </div>
          ))}
        </Slider>
      </div>
      <p className="max-w-2xl text-lg text-gray-600 md:text-xl">
        {project.description}
      </p>
    </section>
  );
};

export default ProjectDetail;
