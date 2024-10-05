import { Poppins } from '@next/font/google';
import React from 'react'
import ProjectBox from '../ProjectBox/ProjectBox';
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function Projects() {
  return (
    <section className={`${poppins.className} flex justify-center items-center flex-col py-10`}>
      <h1 className='text-4xl pb-4'>OUR PROJECT</h1>
      <ProjectBox/>
    </section>
  )
}

export default Projects
