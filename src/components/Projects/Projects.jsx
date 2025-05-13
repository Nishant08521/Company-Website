import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const Projects = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <h2 className="text-center text-xl text-purple-600 font-semibold">
        WORK HIGHLIGHTS
      </h2>
      <h1 className="text-center text-4xl font-bold mb-10">
        Discover Our <span className="text-purple-500">Latest Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          {
            img: project1,
            title: "Travel Landing Page",
            link: "/",
          },
          {
            img: project2,
            title: "Fashion Store UI",
            link: "/",
          },
          {
            img: project3,
            title: "Online Course Platform",
            link: "/",
          },
          {
            img: project4,
            title: "Mobile App Dashboard",
            link: "/",
          },
          {
            img: project5,
            title: "Business Website",
            link: "/",
          },
          {
            img: project6,
            title: "Personal Portfolio",
            link: "/",
          },
        ].map((project, i) => (
          <a
            href={project.link}
            key={i}
            className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 purple-500 bg-opacity-40  backdrop-blur-sm group-hover:backdrop-blur-md  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-black text-xl font-semibold">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
