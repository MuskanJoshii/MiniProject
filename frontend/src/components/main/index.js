import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import Instaloginn from './Instaloginn'
import AddComponent from '../user/AddComponent'


const Main = () => {
  return (
    <div>
        <Navbar />
        {/* <AddComponent/> */}
     
     
       
      <Outlet/>
    </div>
  )
}

export default Main
