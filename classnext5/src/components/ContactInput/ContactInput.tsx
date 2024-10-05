import React from 'react'

function ContactInput({typeInput,place}:{typeInput:string,place:string}) {
  return (
    <>
     <input className='w-[40vw] p-3 rounded-full shadow-md outline-none' type={typeInput} id='' name=''  placeholder={`Enter Your ${place}`} required/> 
    </>
  )
}

export default ContactInput
