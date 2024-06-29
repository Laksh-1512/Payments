import React from 'react'

const Body_Card = ({name,text,img}) => {
  return (
    <div className='flex flex-col '>
        <div className='flex '>
            <img className="h-25 w-45 mt-2"src={img}></img>
        <h1 className='font-semibold  text-lg mt-2 ml-3'>{name}</h1>
        </div>
      <h1 className='ml-[4.0rem] w-80 -mt-5'>{text}</h1>
    </div>
  )
}

export default Body_Card
