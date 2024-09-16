import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <div className='grid-background'>
          <main className='min-h-screen container'>
            <Header/>
            <Outlet/>
          </main>
          
        </div>
       
    </div>
  )
}

export default AppLayout