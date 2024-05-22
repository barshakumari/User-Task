import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"


import axios from 'axios'

const Edit = () => {
     
     let navigate=useNavigate()
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const [error,seterror]=useState("")
    const [emailerror,setemailerror]=useState("")
    const {id}=useParams()
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`,{
          headers:{
            "Content-Type":"application/json"
          }
        }).then((res)=>{
            setname(res.data.name)
            setemail(res.data.email)
            setphone(res.data.phone)
        })
        

    },[])

    const data={
      name:name,
      email:email,
      phone:phone
    }
   const handleSubmit=(e)=>{
        e.preventDefault()
    
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,data,{
          headers:{
            "Content-Type":'application/json'
          }
        }).then(
          navigate("/")
        )
    }
   
   

  return (
    <div className='flex justify-center flex-col items-center m-2 p-4'>
    <h1 className='text-2xl text-blue-600 font-bold'>Edit User</h1>
  <div className='border  rounded-md p-4 w-[50%]'>
    <form  className='flex flex-col gap-6 text-xl'>
      <input type="text"
      placeholder= "Enter your name"
      required
      name='name'
      value={name}
      onChange={(e)=>setname(e.target.value)}
     
      className='outline-none border rounded-md px-3 py-1 w-full text-blue-500 border-blue-300'
      />
       <input type="email"
      placeholder='Enter your email'
      required
      name='email'
      value={email}
      onChange={(e)=>setemail(e.target.value)}
   
      className='outline-none border rounded-md px-3 py-1 w-full text-blue-500 border-blue-300'
      />
       <input type="phone"
      placeholder='Enter your cell number'
      required
      name='phone'
      value={phone}
      onChange={(e)=>setphone(e.target.value)}

      className='outline-none border rounded-md px-3 py-1 w-full text-blue-500 border-blue-300'
      />
      <button type='submit' onClick={handleSubmit} className='bg-blue-400 px-3 py-1 rounded-md text-white'>Edit</button>
    </form>
  </div>
</div>
  )

  }
export default Edit