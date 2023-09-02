import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex w-full gap-20"
    >
       <div className='w-full'>
          <div className='pt-12 pb-5 font-titleFont flex flex-col justify-center items-center gap-3'>
            <p className='text-sm text-designColor tracking-[4px]'>2018 - Present</p>
            <h2 className='text-4xl font-bold'>Certifications</h2>
          </div>
          <div className=' w-full h-[1000px] border-l-[6px] border-l-black 
          border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title="MERN Stack Development"
              subTitle="Proternship by Cantilever Labs (July-Sept 2022)"
              result="MERN"
              des="Trained by Mr. Nischal Aremanda, I learned about all the Basics of MERN technologies (MongoDB, Express, React, and Nodejs). 
              Also got certified as an Outstanding Performer for completing this program."
            />
            <ResumeCard
              title="Design Thinking and Critical Thinking Workshop"
              subTitle="Centre for Soft Skills Development"
              result="WORKSHOP"
              des="Participated in the Three Day Workshop on Design Thinking and Critical Thinking from 
              28 February to 2 March 2021, organized by the Centre for Soft Skills Development. "
            />
            <ResumeCard
              title="Vaisheshika - 2021"
              subTitle="Working Model"
              result="ISTE"
              des="Certified with participation in Vaisheshiks - 2021 organized by the department of GCET
              in association with Indian Society for Technical Education (ISTE), presented a Working Model on
              Movement Detection using Sensors."
            />
          </div>
        </div>
       
    </motion.div>
  );
};

export default Experience;
