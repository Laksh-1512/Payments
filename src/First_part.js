import React from 'react'

const First_part = () => {
  return (
    <div className='h-72 bg-blue-200 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-5xl'>How can we help?</h1>
      <input className="rounded-md w-[35rem] p-3 mt-4 border border-black"type="text" placeholder="Search"onSubmit={(e)=>{e.preventDefault()}} />
    </div>
  )
}

export default First_part
