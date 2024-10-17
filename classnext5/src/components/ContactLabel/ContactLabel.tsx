import React from 'react'

function ContactLabel({label}:{label:string}) {
  return (
    <>
     <label htmlFor="" className='py-4'>{label}</label> 
    </>
  )
}
export default ContactLabel;