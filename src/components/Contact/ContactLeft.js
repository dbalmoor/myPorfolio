import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets";
import { BsGithub } from "react-icons/bs";


const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] 
    gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Deepana Balmoor</h3>

        <p className="text-base text-gray-400 tracking-wide">
          To build my career by acquiring a suitable position in a
          well-established company and working hard with commitment and
          sincerity in a challenging and creative environment where my
          capabilities and technical skills are best utilized.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9542111825</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">deepanabalmoor7@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
