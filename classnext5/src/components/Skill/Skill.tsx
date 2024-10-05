import React from 'react'
import SkillSet from '../SkillSet/SkillSet';
import { Poppins } from '@next/font/google';
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function Skill() {
  return (
    <section className={`${poppins.className} flex items-center flex-col py-10`} >
      <h4 className='text-3xl pb-5'>Skill</h4>
      <SkillSet/>
    </section>
  )
}
export default Skill;
