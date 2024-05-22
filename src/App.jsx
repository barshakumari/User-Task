import React from 'react'
import Navbar from './Pages/Navbar'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import User from './Pages/users/User'
import AddUser from './Pages/users/AddUser'


const App = () => {
  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/users/:id' element={<User/>}/>
     <Route path='/adduser' element={<AddUser/>}/>
    </Routes>


      </BrowserRouter>
   
  )
}

export default App