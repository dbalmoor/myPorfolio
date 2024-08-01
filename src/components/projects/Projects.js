import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from '../../assets/index'



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
          title="Flavour Us Market website"
          des="A simple Grocery Shopping website created using HTML, CSS and JAVASCRIPT."
          src={projectOne}
          gitref="https://github.com/dbalmoor/FLAVOUR-US-MARKET"
          webref="https://dbalmoor.github.io/FLAVOUR-US-MARKET/"
        />
        
        <ProjectsCard 
          title="Electronix website"
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
        <ProjectsCard 
          title="RouteExplorer"
          des="A FullStack project to display Bus routes from a source and destination using MySQL and React. An app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them."
          src={projectFour}
          gitref="https://github.com/dbalmoor/RouteExplorer"
        />
        <ProjectsCard 
          title="WORKOUT-APP-MERN"
          des="It is a web application built using the MERN stack that allows users to create, view, and delete workouts. Users can create personalized workout routines. This website is created using RestAPI calls and MERN Technologies."
          src={projectFive}
          gitref="https://github.com/dbalmoor/WORKOUTAPP-MERN"
        />
        <ProjectsCard 
          title="HEALTH-TRACKER-MERN-FIREBASE"
          des="It is a full-stack project that keeps track of a user’s health records and also generates a health plan based on the inputs. This website is created using MERN Stack and Firebase."
          src={projectSix}
          gitref="https://github.com/dbalmoor/HEALTH-TRACKER-MERN-FIREBASE"
        />
      </div>
    </section>
  )
}

export default Projects