import React from 'react'

const Head = () => {
  return (
    <div className='flex bg-black h-20 w-full text-white rounded-t-lg'>
        <img  className="mt-7 ml-36 w-7 h-7 mr-1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBFee8JsEKTH--1xnQM8riYxP5AMpTW4dHQ&s"/>
      <h1 className='mt-7 ml-1'>Abstract | Help Center </h1>
      <div className='flex ml-[50rem]'>
        <button className='h-[2.25rem] mt-[1.5rem] rounded-xl border border-white p-[.3rem]'>Submit a request</button>
      <button className='rounded-xl ml-4  mt-[1.5rem] h-[2.25rem] w-20 bg-blue-800 '>Sign In</button>
      </div>
      
    </div>
  )
}

export default Head
