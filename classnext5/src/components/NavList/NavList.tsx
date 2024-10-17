import React from 'react'

function NavList() {
  let navList:string[] = ["Home","Project","About","Contact","Skill"]; 
  return (
    <ul className='flex gap-5'>
   {
    navList.map((e,i) => {
      return (
       <li key={i}>{e}</li> 
      );
    })
   }
    </ul>
  )
}
export default NavList
