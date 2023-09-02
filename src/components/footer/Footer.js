import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-screen-xl  mx-auto lgl:px-10">
      <div className="flex flex-col w-full py-20 h-auto border-b-[1px] border-b-black justify-center items-center gap-10">
        <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex gap-3">
              <img src={logo} alt="logo" className="w-[250px] h-[80px]" />
            </div>
            <div className="flex w-1/2">
              <p className="text-lg text-gray-400 mt-2">
                To build my career by acquiring a suitable position in a
                well-established company and working hard with commitment and
                sincerity in a challenging and creative environment where my
                capabilities and technical skills are best utilized.
              </p>
            </div>
          </div>
          <h2 className="text-designColor uppercase text-xl">FIND ME IN</h2>
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
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h2 className="text-designColor uppercase text-xl">NAVIGATE</h2>
          <ul className="flex lgl:flex-row flex-col gap-10 font-titleFont font-medium overflow-hidden py-6">
            <li>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/"
                >
                  Home
                </Link>
              </span>
            </li>
            <li>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/Projects"
                >
                  Projects
                </Link>
              </span>
            </li>
            <li>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/Resume"
                >
                  Resume
                </Link>
              </span>
            </li>
            <li>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/Contact"
                >
                  Contact
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
