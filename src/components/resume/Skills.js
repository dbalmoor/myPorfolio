import React from "react";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col lgl:flex-row gap-10 lgl:gap-20 pt-5"
    >
      <div className="w-full lgl:w-1/2">
        <div className="pt-5 lgl:pt-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-3xl lgl:text-4xl font-bold">Professional Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">JAVA</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 
                  to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">SQL</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 
                  to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">REACTJS</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 
                  to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">50%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">JS</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 
                  to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">HTML</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 
                  to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="pt-5 lgl:pt-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-3xl lgl:text-4xl font-bold">Personal Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-10 text-2xl">
          <div className="overflow-x-hidden flex gap-5 hover:text-designColor duration-300 cursor-pointer">
            <span className="flex justify-center text-designColor">
              <BiRightArrow />
            </span>
            <p className="flex text-sm uppercase font-medium justify-center">
              LEADERSHIP
            </p>
          </div>
          <div className="overflow-x-hidden flex gap-5 hover:text-designColor duration-300 cursor-pointer">
            <span className="flex justify-center text-designColor">
              <BiRightArrow />
            </span>
            <p className="flex text-sm uppercase font-medium justify-center">
              PROBLEM-SOLVING
            </p>
          </div>
          <div className="overflow-x-hidden flex gap-5 hover:text-designColor duration-300 cursor-pointer">
            <span className="flex justify-center text-designColor">
              <BiRightArrow />
            </span>
            <p className="flex text-sm uppercase font-medium justify-center">
              CREATIVITY
            </p>
          </div>
          <div className="overflow-x-hidden flex gap-5 hover:text-designColor duration-300 cursor-pointer">
            <span className="flex justify-center text-designColor">
              <BiRightArrow />
            </span>
            <p className="flex text-sm uppercase font-medium justify-center">
              ACTIVE LISTENING
            </p>
          </div>
          <div className="overflow-x-hidden flex gap-5 hover:text-designColor duration-300 cursor-pointer">
            <span className="flex justify-center text-designColor">
              <BiRightArrow />
            </span>
            <p className="flex text-sm uppercase font-medium justify-center">
              EMOTIONAL INTELLIGENCE
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
