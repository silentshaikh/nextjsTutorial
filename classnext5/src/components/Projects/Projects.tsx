import { Poppins } from '@next/font/google';
import React from 'react'
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function Projects() {
  return (
    <section className={`${poppins.className} flex justify-center items-center flex-col`}>
      <h1 className='text-4xl'>OUR PROJECT</h1>
    </section>
  )
}

export default Projects
