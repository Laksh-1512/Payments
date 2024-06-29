import React from 'react'

const Text_Contact = ({head,list}) => {
  return (
    <div className='text-white '>
      <h1 className='font-bold text-2xl mb-2'>{head}</h1>
      {list.map((e)=><ul>{e}</ul>)}
    </div>
  )
}

export default Text_Contact;
