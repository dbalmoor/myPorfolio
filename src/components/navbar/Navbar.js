import React, { useState } from "react";
import { logo } from "../../assets/index";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="px-2 w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <img src={logo} alt="logo" className="w-[250px] h-[80px]" />

      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/Projects"
                  >
                    Projects
                  </Link>
                </li>
                <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/Resume"
                  >
                    Resume
                  </Link>
                </li>
                <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
        justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div
            className="w-[80%] h-screen overflow-scroll absolute top-0 
          left-0 bg-gray-900 p-4 scrollbar-hide "
          >
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-52" src={logo} alt="" />
                <p className="text-sm text-gray-400 mt-2">
                  To build my career by acquiring a suitable position in a
                  well-established company and working hard with commitment and
                  sincerity in a challenging and creative environment where my
                  capabilities and technical skills are best utilized.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/Projects"
                  >
                    Projects
                  </Link>
                </li>
                <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/Resume"
                  >
                    Resume
                  </Link>
                </li>
                <li
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
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
              </div>
              <span
                onClick={() => {
                  setShowMenu(false);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor
                duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
