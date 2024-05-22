import React, { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"


const Home = () => {
    
    const [users,setUsers]=useState([])
    const  [show,setshow]=useState(false)
    const [searchdata,setsearchdata]=useState([])
    const [search,setsearch]=useState("")
    const loadusers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            
            if(res?.status===200){
                setUsers(res.data)

            }
            console.log("res------------",res?.data)
            
        })
    }
    useEffect(()=>{
        loadusers()
        setshow(false)
    },[])

    function handledelete(id){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
            setshow(false)
               console.log("delete",res)
            loadusers()
        }
        )
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(search===""){
            console.log("empty")
            setshow(false)
        } else {
            const filteredUsers = users.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            );
            if(filteredUsers?.length===0){
                setshow(false)
                console.log("not user found")
            }else{
                setshow(true)
            setsearchdata(filteredUsers)
            }
        }
        }
        
    
  return (
    <div className='w-full h-full text-black flex flex-col px-10 py-8 '>

       <div className="flex flex-col ml-[4rem]">
        <div className='flex justify-between'>
            <h1 className='text-3xl text-blue-600 font-semibold mb-2'>Home page</h1>
            
<form class="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required 
        value={search} onChange={(e)=>setsearch(e.target.value)}/>
    </div>
    <button type="submit" onClick={handlesubmit} class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>


        </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 border border-blue-100 rounded-lg p-2 ">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table
                    className="min-w-full text-left text-lg font-light text-surface dark:text-white">
                    <thead
                        className="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                        <th scope="col" className="px-6 text-black py-4">#</th>
                        <th scope="col" className="px-6 py-4 text-black">Name</th>
                        <th scope="col" className="px-6 py-4 text-black">Email</th>
                        <th scope="col" className="px-6 py-4 text-black">Phone</th>
                        <th scope="col" className="px-6 py-4 text-black">Action</th>
                        </tr>
                    </thead>
                    {
                        !show ? 
                    <tbody>
                        {users.map((data,index)=>(  
                        <tr key={index} className="border-b border-neutral-200 dark:border-white/10">
                        <td className="whitespace-nowrap text-gray-700 px-6 py-4 font-medium">{index+1}</td>
                        <td className="whitespace-nowrap text-gray-700 px-6 py-4">{data.name}</td>
                        <td className="whitespace-nowrap text-gray-700 px-6 py-4">{data.email}</td>
                        <td className="whitespace-nowrap text-gray-700 px-6 py-4">{data.phone}</td>
                        <td className="whitespace-nowrap flexjjustify-center items-center space-x-4">
                            
                            <Link to={`/users/${data.id}`}>
                            <button className='bg-blue-400 text-white px-3 py-1 rounded-md'>View</button>
                            </Link>
                         
                        </td>
                        </tr>
                        ))}
                    </tbody>
                     :   <tbody>
                     {searchdata.map((data,index)=>(  
                     <tr key={index} className="border-b border-neutral-200 dark:border-white/10">
                     <td className="whitespace-nowrap text-gray-700 px-6 py-4 font-medium">{index+1}</td>
                     <td className="whitespace-nowrap text-gray-700 px-6 py-4">{data.name}</td>
                     <td className="whitespace-nowrap text-gray-700 px-6 py-4">{data.email}</td>
                     <td className="whitespace-nowrap text-gray-700 px-6 py-4">{data.phone}</td>
                     <td className="whitespace-nowrap flexjjustify-center items-center space-x-4">
                         
                         <Link to={`/users/${data.id}`}>
                         <button className='bg-blue-400 text-white px-3 py-1 rounded-md'>View</button>
                         </Link>
                        
                       
                     </td>
                     </tr>
                     ))}
                 </tbody> }
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home