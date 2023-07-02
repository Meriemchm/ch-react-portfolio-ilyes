import React from "react";
import site1 from "../assets/site-1.jpg";
import site2 from "../assets/site-2.jpg";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: site1,
      title: "title",
      description: "lorem",
    },
    {
      id: 2,
      src: site2,
      title: "title",
      description: "lorem",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projects
          </p>
          <p className="py-6">Check out some of my project</p>
        </div>
        {/*projects*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-2  gap-8  sm:px-0">
          {projects.map(({ id, src, title, description }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-600 bg-white rounded-lg  duration-200 hover:scale-105"
              >
                <img src="" alt="" className="rounded-md h-52 w-full object-cover" />

                <div className="flex flex-col items-start justify-start text-gray-800 mx-5 my-4 ">
                  <h2 className="text-bold capitalize">{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="flex items-center justify-center text-gray-500 ">
                  <button className="flex w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code{" "}
                    <span>
                      <AiFillGithub size={25} className="ml-2" />
                    </span>
                  </button>
                  <button className="flex w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo{" "}
                    <span>
                      <CiShare1 size={20} className="ml-2 mt-1" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
