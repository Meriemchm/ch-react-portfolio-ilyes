import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 md:px-20 bg-black fixed z-10">
      <div>
        <h1 className="text-4xl font ml-2 md:text-5xl">Ilyes.dev</h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {show ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {show && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-4xl text-gray-500 hover:scale-105 duration-200 capitalize"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
