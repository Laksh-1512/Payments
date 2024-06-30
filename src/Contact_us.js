import React from 'react'
const data=[{
    heading:"Product",
    list:["Features","Customer","Stories"],   
},{
    heading:"Company",
    list:["Support","Pricing","About"],   
},{
    heading:"Resources",
    list:["Blog","Sign Up","Contact"],   
}
];
const Contact_us = () => {
  return (
    <div className='h-[25rem] w-full bg-black text-white mt-20 pt-20 flex flex-row' >
      <div>
        <img className="h-[3.25rem] w-[4rem] mt-3 justify-center ml-40"src="https://img.icons8.com/external-others-inmotus-design/67/external-Green-color-picker-others-inmotus-design.png" alt="" />
        <button className='bg-green-600 text-black p-5  font-bold ml-40 mt-7 hover:p-6 '>Sign U for a Free 30-Day Trial</button>
        <h3 className='mt-20 ml-2 text-gray-600'>©2019 GemStoneapp.com, Inc. All Rights Reserved | Terms of Use | Privacy Policy.</h3>
        <h3 className='ml-2 text-gray-600'>GemStone is made by Simple Focus. We also make Ballpark, Sifter,and Curated.</h3>
      </div>
      <div className='flex flex-row font-semibold text-xl ml-[20rem] -mt-5'>
      {data.map((e)=>(<div className='p-4 m-4'>
        <h1 className='text-white'>{e.heading}</h1>
        {e.list.map((x)=>(<h1 className='text-green-600'>{x}</h1>))}
        </div>))}
      </div>

    </div>
  )
}

export default Contact_us;
