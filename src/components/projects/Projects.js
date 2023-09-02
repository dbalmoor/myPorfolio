import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import { projectOne, projectTwo, projectThree } from '../../assets/index'



const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title 
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectsCard 
          title="E-commerce website"
          des="A simple Grocery Shopping website created using HTML, CSS and JAVASCRIPT."
          src={projectOne}
          gitref="https://github.com/dbalmoor/FLAVOUR-US-MARKET"
          webref="https://dbalmoor.github.io/FLAVOUR-US-MARKET/"
        />
        
        <ProjectsCard 
          title="E-commerce website"
          des="A simple Responsive Electronics Shopping Website created using HTML, CSS and JS."
          src={projectTwo}
          gitref="https://github.com/dbalmoor/Elektronix"
          webref="https://dbalmoor.github.io/Elektronix/"
        />
        <ProjectsCard 
          title="To-Do List"
          des="A simple To-do List website using REACTJS to store, update and filter todo's."
          src={projectThree}
          gitref="https://github.com/dbalmoor/mytodo"
          webref="https://mytodo-deepanabalmoor.vercel.app/"
        />
      </div>
    </section>
  )
}

export default Projects