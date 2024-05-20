import React from 'react'
import Sidebar from './_components/Sidebar'
import Navbar from './_components/Navbar'
export default function layout({children}) {
  return (
    <div className='flex text-[#000000]'>
        <Sidebar className="fixed" />
        <div className="w-full relative">
        <Navbar/>
        {children}
        </div>
    </div>
  )
}
