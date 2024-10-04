import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div>
      <main className='flex flex-col main h-screen p-5'>
        <Header/>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
