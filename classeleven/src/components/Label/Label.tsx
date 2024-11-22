import React from 'react'

function Label(props:{name:string}) {
  return (
    <>
     <label htmlFor="" className='font-bold'>{props.name}</label> 
    </>
  )
}

export default Label
