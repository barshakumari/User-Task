import React from 'react'
import {useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import { loginschema } from './log'
import axios from 'axios'

const formval={
  name:"",
  email:"",
  phone:""
}



const AddUser = () => {
  const navigate=useNavigate()
  const {values,errors,touched,handleBlur,handleSubmit,handleChange}=useFormik({
    initialValues:formval,
    validationSchema:loginschema,
    onSubmit:(values)=>{
      console.log(values)
      axios.post("https://jsonplaceholder.typicode.com/users",values,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then((res)=>console.log("ressssssss",res))

    }

  })
  return (
    <div className='flex justify-center flex-col items-center m-2 p-4'>
        <h1 className='text-2xl text-blue-600 font-bold'>Add User</h1>
      <div className='border  rounded-md p-4 w-[50%]'>
        <form onClick={handleSubmit} className='flex flex-col gap-6 text-xl'>
          <input type="text"
          placeholder='Enter your name'
          required
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className='outline-none border rounded-md px-3 py-1 w-full text-blue-500 border-blue-300'
          />
          {errors.name && touched.name ? <p className='text-blue-600 animate-bounce'>{errors.name}</p> :null}
           <input type="email"
          placeholder='Enter your email'
          required
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className='outline-none border rounded-md px-3 py-1 w-full text-blue-500 border-blue-300'
          />
          {errors.email && touched.email ? <p className='text-blue-600 animate-bounce'>{errors.email}</p> :null}
           <input type="phone"
          placeholder='Enter your cell number'
          required
          name='phone'
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className='outline-none border rounded-md px-3 py-1 w-full text-blue-500 border-blue-300'
          />
          {errors.phone && touched.phone ? <p className='text-blue-600 animate-bounce'>{errors.phone}</p> :null}
          <button type='submit' className='bg-blue-400 px-3 py-1 rounded-md text-white'>Add </button>
        </form>
      </div>
    </div>
  )
}

export default AddUser