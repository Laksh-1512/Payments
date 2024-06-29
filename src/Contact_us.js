import React from 'react'
import Text_Contact from './Text_Contact'
    
    let a=["Branches"];
    let b=["Blog","Help Center","Release Note","Status"];
    let c=["Twitter","Linkedln","Instagram","Facebook","X"];
    let d=["About US","Careers","Legal"];
    
const Contact_us = () => {
    
  return (
    <div className='h-[20rem] w-full bg-black rounded-b-lg '>
        <div className='w-1/2 flex flex-row ml-20 pt-14 justify-between'>
            <Text_Contact head={"Abstract"} list={a}></Text_Contact>
            <Text_Contact head={"Resources"} list={b}></Text_Contact>
            <Text_Contact head={"Community"} list={c}></Text_Contact>
            <Text_Contact head={"Company"} list={d}></Text_Contact>
        </div>
        <div className='text-white ml-[70rem]'>
            <div className='flex flex-row'>
                <img  className="w-4 h-4 mt-1 mr-1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUVHZTpVlosYHe-lDElKsHAOLJQOm46Z3QQ&s" alt="" />
                 <h1>Copyright 2024</h1>
            </div>
           
            <h1>Abstract Studio Design,Inc.</h1>
            <h1>Made by Laksh</h1>
        </div>
      
    </div>
  )
}

export default Contact_us
