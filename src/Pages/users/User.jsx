import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const User = () => {
    const {id}=useParams()
    const [data,setData]=useState()
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/"+id,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
            setData(res.data)
            
        })
    },[])
  return (
    <div>
         
       {data && (
          <div className='flex justify-center items-center p-5'>
            <div className='flex flex-col   px-4 py-2 border w-[50%]'>
                <h1 className='text-blue-700 font-bold text-2xl my-4'>{data.name} 💙</h1>
                <div className='flex gap-x-4 items-center '>
                    <p className='font-semibold text-lg text-blue-400'>Name</p>
                    <h1 className='text-blue-500 text-lg font-semibold'>{data.name} </h1>
                </div>
                <hr className='h-[0.11rem] bg-blue-300 mb-3' />
                <div className='flex gap-x-4 items-center'>
                    <p className='font-semibold text-lg text-blue-400'>Email</p>
                    <h1 className='text-blue-500 text-lg font-semibold'>{data.email}</h1>
                </div>
                <hr className='h-[0.11rem] bg-blue-300 mb-3' />
                <div className='flex gap-x-4 items-center'>
                    <p className='font-semibold text-lg text-blue-400'>Phone</p>
                    <h1 className='text-blue-500 text-lg font-semibold'>{data.phone}</h1>
                </div>
                <hr className='h-[0.11rem] bg-blue-300 mb-3' />

            </div>
          </div>
       )}

     </div>
  )
}

export default User