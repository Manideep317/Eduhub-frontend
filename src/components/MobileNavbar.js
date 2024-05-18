"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
function MobileNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='w-full flex items-center justify-between'>
            <div className="">
                <div className="flex items-center">
                    <h4 className='text-xl'>Eduhub</h4>
                </div>
            </div>
            <div className="">
                {sidebarOpen ? (
                    <div className="flex cursor-pointer" onClick={handleSidebar}>
                        <div className="font-bold text-2xl">x</div>
                    </div>
                ) : (
                    <div className="flex flex-col items-end cursor-pointer" onClick={handleSidebar}>
                        <div className="bg-black w-[18px] h-[2px] mb-1"></div>
                        <div className="bg-black w-[18px] h-[2px] mb-1"></div>
                        <div className="bg-black w-[9px] h-[2px] mb-1"></div>
                    </div>
                )}
            </div>
            {sidebarOpen ? (
                <div className='fixed flex flex-col items-center top-[4rem] justify-between left-0 min-h-full min-w-full bg-white'>
                    <div className='min-w-full flex flex-col bg-white'>
                        <Link href='/' className="py-[2rem] w-full px-4">Home</Link>
                        <Link href='/' className="py-[2rem]  w-full px-4">About us</Link>
                        <Link href='/' className="py-[2rem] w-full px-4">Properties</Link>
                        <Link href='/' className="py-[2rem] w-full px-4">Services</Link>
                    </div>
                    <div className='fixed flex w-[50%] justify-between bottom-10'>
                        <Link href="/login" className="px-4 py-2 rounded-md bg-black text-white hover:scale-105 hover:shadow-white hover:shadow-md hover:transition-shadow">Login</Link>
                        <Link href="/" className="px-3 py-2 rounded-md bg-black font-semibold text-white hover:scale-105 hover:shadow-[#703bf7] hover:bg-white hover:text-[#703bf7] hover:shadow-md hover:transition-shadow">Signup</Link>
                    </div>
                </div>
            ) : null}

        </div>
    )
}

export default MobileNavbar