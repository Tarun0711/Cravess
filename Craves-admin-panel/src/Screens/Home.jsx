import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

function Home() {
  return (
    <div className=''>
        <Navbar/>
        <div className='flex'>
           <Sidebar/> 
           <Outlet />

        </div>
    </div>
  )
}

export default Home