import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar />
        {/* <MainContainer /> */}
        <Outlet />
        {/* <WatchPage /> */}

    </div>
  )
}

export default Body