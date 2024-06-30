import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Contact_us from './Contact_us'

const Body = () => {
  return (
    <div className='h-[70rem] w-full bg-green-100'>
      <div className='flex flex-col items-center '>
        <h1 className='font-bold text-5xl mt-5 '>Try GemStone free for</h1>
        <h1 className='font-bold text-5xl '>30 days.</h1>
        <h1 className='mt-5 text-gray-500'>See why GemStone is the best way to monitor your cash flow. Sign up</h1>
         <h1 className='text-gray-500'>for any plan and try GemStone absolutely free for 30 days.</h1>
      </div>
      <div className='flex flex-row justify-center mt-[9rem]'>
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
      </div>
      <div className='text-gray-600 w-full h-11 flex flex-col justify-center items-center mt-28'>
        <h1 className='w-[45rem] text-lg'>"GemStone is worth every penny because it empowers business owners with critical</h1>
        <h1 className='w-[40rem] text-lg ml-[20rem]'>Financial insight and knowledge."</h1>
        
        <h2 className='text-sm text-green-600 mt-5'>SUBVERT MARKETING,INC.</h2>
      </div>
      
    </div>
  )
}

export default Body
