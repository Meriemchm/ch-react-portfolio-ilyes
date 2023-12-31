import React from "react";
import { links } from "./Data";
const Home = () => {

  return (
    <div
      name="home"
      className="flex md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-4 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center h-full px-8 my-16 gap-5 md:gap-0 md:flex-row md:my-0">
        <div className="flex flex-col md:justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Backend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Ilyes Aboura Mohammed here, a{" "}
            <span className="text-bold text-white">Laravel</span> and{" "}
            <span className="text-bold text-white">Django</span> developer. I
            create amazing web applications that will amaze you. Let's embark on
            a magical development journey together, filled with humor and
            professionalism!.
          </p>
          <div className="flex lg:hidden">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-150">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full text-white"
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="h-full md:flex items-center justify-center pt-10">
     
            <img
              src="https://file.rendit.io/n/NxtiAGtt5YH6YM1hkPKS.png"
              alt="MyProfile"
              className="mx-auto md:w-[30rem] h-auto md:h-[20rem] "
            />
          </div>
    
      </div>
    </div>
  );
};

export default Home;
