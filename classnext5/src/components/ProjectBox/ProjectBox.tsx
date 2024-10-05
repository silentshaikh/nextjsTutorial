import React from 'react'

function ProjectBox() {
  return (
    <div className='flex gap-6 items-center'>
      <div className="flex items-center flex-col shadow-xl p-6">
        <img className='size-56' src="/images/countdown-timer-digital-clock_6735-1859.avif" alt="projects" />
        <h4>Count Down Timer</h4>
      </div>
      <div className="flex items-center flex-col shadow-xl p-6">
        <img className='size-56' src="/images/flat-design-illustration-calculator-with-coins-pencil-notebook_1025753-178200.avif" alt="projects" />
        <h4>Calculator</h4>
      </div>
      <div className="flex items-center flex-col shadow-xl p-6">
        <img className='size-56' src="/images/boy-reading-book-math_1308-125577.avif" alt="projects" />
        <h4>Number Guessing Game</h4>
      </div>
    </div>
  )
}

export default ProjectBox
