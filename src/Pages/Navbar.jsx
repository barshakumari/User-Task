import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='w-full h-16 flex items-center justify-between px-10 py-2 bg-blue-600'>

    <h1 className='text-3xl text-white font-semibold'>CURD</h1>
    <div className='flex gap-x-3'>
    <Link to={"/"}>
    <button className='w-48 bg-blue-300 text-white font-semibold text-xl rounded-lg h-12'>Home</button>
    </Link>
    <Link to={"/adduser"}>
    <button className='w-48 bg-white text-blue-300 font-semibold text-xl rounded-lg h-12'>Add User</button>
    </Link>
    </div>

    </div>
  )
}

export default Navbar