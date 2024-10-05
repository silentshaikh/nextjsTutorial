import React from 'react'

function SkillSet() {
  return (
    <div className='flex items-center gap-6'>
      <div  className='shadow-xl p-5 text-center'>
        <div className="size-48 bg-orange-400 rounded-full "></div>
        <h5 className='font-bold pt-3'>HTML</h5>
      </div>
      <div className='shadow-xl p-5 text-center'>
      <div className="size-48 bg-blue-500 rounded-full "></div>
        <h5 className='font-bold pt-3'>CSS</h5>
      </div>
      <div className='shadow-xl p-5 text-center'>
      <div className="size-48 bg-yellow-300 rounded-full "></div>
        <h5 className='font-bold pt-3'>JAVASCRIPT</h5>
      </div>
      <div className='shadow-xl p-5 text-center'>
      <div className="size-48 bg-blue-400 rounded-full "></div>
        <h5 className='font-bold pt-3'>TYPESCRIPT</h5>
      </div>
    </div>
  )
}

export default SkillSet
