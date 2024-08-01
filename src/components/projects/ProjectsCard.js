import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, gitref, webref }) => {
  return (
    <div
      className="w-full p-4 xl:px-4 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b 
    hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          className="w-full h-52 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div>
        <div className="w-full mt-0 xl:px-5 h-auto xl:py-8 flex flex-col gap-2">
          <div className="xs:pt-2 flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={gitref}
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex
              justify-center items-center text-gray-400 hover:text-designColor duration-300
              cursor-pointer"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                href={webref}
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex
              justify-center items-center text-gray-400 hover:text-designColor duration-300
              cursor-pointer"
                rel="noreferrer"
                target="_blank"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
