import React from 'react'

export default function Sidebar() {
  return (
    <nav className='bg-white h-screen border-2 border-[#efefef] w-[250px] overflow-hidden px-[2rem] py-[2rem]'>
      <div className="">
        <h1 className="text-[1.5rem] font-inter font-semibold">Eduhub</h1>
      </div>
      <div className="my-[3rem] flex gap-[2rem] flex-col">
        <div className="">Companies</div>
        <div className="">Questions</div>
        <div className="">Blogs</div>
      </div>
      <div className="absolute bottom-[3rem] flex gap-[2rem] flex-col">
        <div className="">
          settings
        </div>
        <div className="">
          profile
        </div>
      </div>
    </nav>
  )
}
