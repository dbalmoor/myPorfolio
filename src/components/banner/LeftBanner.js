import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaJava,
  FaHtml5,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Graduate.", "Coder.", "Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Deepana</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide ">
          I am a Graduate from Geethanjali College of Engineering and
          Technology pursued Bachelor of Technology in Information Technology.
          The skills I possess include web development and Java programming.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/dbalmoor"
              className="bannerIcon"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="bannerIcon"
              href="https://twitter.com/DBalmoor"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/deepana-balmoor-04ab90201/"
              target="_blank"
              className="bannerIcon"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div> */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <BiLogoMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
