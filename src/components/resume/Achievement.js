import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex w-full gap-20"
    >
      <div className="w-full">
        <div className="pt-12 pb-5 font-titleFont flex flex-col justify-center items-center gap-3">
          <p className="text-sm text-designColor tracking-[4px]">
            Technical Club
          </p>
          <h2 className="text-4xl font-bold">WEB INSIGHTS</h2>
        </div>
        <div
          className="pb-5 w-full h-[400px] flex flex-col border-l-[6px] border-l-black 
          border-opacity-30"
        >
          <ResumeCard
            title="About WEBINSIGHTS"
            subTitle="Formed in November, 2021"
            result="CLUB OF GCET"
            des="As the Students of IT Department, We created a club called WEB INSIGHTS to conduct Technical Events and Webinars.
                We Organized many Events through this Club."
          />
        </div>
        <div className="pt-12 pb-5 font-titleFont flex flex-col justify-center items-center gap-3">
          <p className="text-sm text-designColor tracking-[4px]">
            Event Descriptions
          </p>
          <h2 className="text-4xl font-bold">WEB INSIGHTS EVENTS</h2>
        </div>
        <div
          className=" w-full h-[1000px] border-l-[6px] border-l-black 
          border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="QUIS"
            subTitle="Quiz Competition"
            result="QUIZ"
            des="Organized a Quiz competition Online on basic computer science questions. "
          />
          <ResumeCard
            title="TECHINSPIRE"
            subTitle="Technical Event"
            result="TECHNICAL"
            des="Organized a one day Technical Event comprising of 4 Rounds -	Trial by Trivia,	Tag Buzz, 
            Techarades,	ErrorOP."
          />
          <ResumeCard
            title="CODEFIESTA"
            subTitle="Technical Event"
            result="CODE"
            des="Technical Event which was conducted as a part of Bhaswara - 2023. It comprises of 3 Rounds - 
            Picnary, Comprocon, and 404 Not Found."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
