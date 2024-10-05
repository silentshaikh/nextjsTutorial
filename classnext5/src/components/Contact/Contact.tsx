import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import { Poppins } from '@next/font/google';
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function Contact() {
  return (
    <section className={`${poppins.className} flex flex-col items-center py-10`}>
      <h5 className='text-3xl pb-10'>Contact With Our Team</h5>
      <ContactForm/>
    </section>
);
};
export default Contact;