import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion"

const Education = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}} 
    className='flex w-full gap-10 lgl:gap-20'
    >
        <div className='w-full'>
          <div className='flex justify-center items-center flex-col pt-12 pb-5 font-titleFont'>
            <p className='flex text-sm text-designColor tracking-[4px]'>2018 - Present</p>
            <h2 className='flex text-3xl md:text-4xl font-bold'>Education Quality</h2>
          </div>
          <div className=' w-full h-[1000px] border-l-[6px] border-l-black 
          border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title="BTech in Information Technology"
              subTitle="Geethanjali College of Engineering and Technology (2020 - 2024)"
              result="8.96/10"
              des="Currently pursuing my Bachelor's in Information Technology from Geethanjali College of Engineering and Technology."
            />
            <ResumeCard
              title="Intermediate in MPC"
              subTitle="Narayana Junior College (2018 - 2020)"
              result="93.7/100"
              des="Pursued my Intermediate in MPC from Narayana Junior College."
            />
            <ResumeCard
              title="Secondary Education"
              subTitle="Narayana Concept School (2016 - 2018)"
              result="9.3/10"
              des="Pursued my Secondary education in SSC from Narayana concept school."
            />
          </div>
        </div>
        
      </motion.div>
  )
}

export default Education