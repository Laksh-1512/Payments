import React from 'react'
const data = ["Manage cash flow across muttiple financial accounts","Invite your investors, book keeper, or management team to see reports or manage cast 1ow.","Intégrate with Quick Books Online for more accurate cash flow"];
const Card3 = () => {
  return (
    <div className='h-[27rem] w-[22rem] bg-white border border-gray-600 hover:cursor-pointer' >
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-green-600 text-5xl font-bold mt-5'>Unlock Extra</h1>
        <h1 className='text-green-600 text-5xl font-bold'>Features</h1>
        <h1 className='mt-2 text-gray-500 font-semibold'>$89 per month</h1>
        <button className='bg-green-600 text-gray-800 p-3 font-bold mt-3'>Try Premium</button>
        <h1 className='text-gray-500 mt-4 text-sm font-semibold'>YOU GET PULSE BASICS, PLUS:</h1>
      </div>
      {data.map((e)=><ul className='text-gray-500 ml-5 text-sm mt-3 flex flex-row'><img  className="h-5 w-5"src="https://i.pinimg.com/564x/0b/0c/3a/0b0c3a9fa3c7998613b0eaacf4a51e06.jpg" alt="" />{e}</ul>)}
    </div>
  )
}

export default Card3
