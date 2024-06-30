import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-green-100 h-20 w-full gird grid-cols-2'>
        <div className='w-1/2'>
      <img className="h-[3.25rem] w-[4rem] mt-3 justify-center ml-40"src="https://img.icons8.com/external-others-inmotus-design/67/external-Green-color-picker-others-inmotus-design.png" alt="" />
        </div>
      <div className='flex justify-center w-full space-x-8 mt-5 text-green-600 font-bold cursor-pointer'>
        <h1>Features</h1>
        <h1>Customer Stories</h1>
        <h1 className='text-black'>Pricing</h1>
        <h1>Blog</h1>
        <button className=' border border-green-600 h-[2.5rem] w-[4.5rem] mt-[-7px]'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
