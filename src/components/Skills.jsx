import React from "react";
import { BiLogoDjango, BiLogoPython, BiLogoGit } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import Skill from "./Skill";

const Skills = () => {
  const techs = [
    {
      id: 1,
      child: <BiLogoPython color="black" size={40} />,
      title: "Python",
      style: "from-blue-300 via-cyan-200 to-yellow-300",
      type: "backend",
    },
    {
      id: 2,
      child: <BiLogoDjango color="black" size={40} />,
      title: "Django",
      style: "from-green-200 via-green-400 to-green-500",
      type: "backend",
    },
    {
      id: 3,
      child: <FaLaravel color="black" size={40} />,
      title: "Laravel",
      style: "from-pink-500 via-red-500 to-yellow-500",
      type: "backend",
    },
    {
      id: 4,
      child: <BiLogoGit color="black" size={40} />,
      title: "Git & Github",
      style: "from-orange-500 to-yellow-300",
      type: "others",
    },
  ];

  const backendTechs = techs.filter((tech) => tech.type === "backend");
  const othersTechs = techs.filter((tech) => tech.type === "others");

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I work with</p>
        </div>
        {/* backend */}
       <Skill Title="Back-end" data={backendTechs}/>
        {/* others */}
        <Skill Title="Others" data={othersTechs}/>
      </div>
    </div>
  );
};

export default Skills;
