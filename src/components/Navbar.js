"use client"
import React,{useState,useEffect} from 'react'
import MobileNavbar from './MobileNavbar';
import Link from 'next/link'
export default function Navbar() {
    const [pageWidth, setPageWidth] = useState(window.screen.width);

    useEffect(() => {
        setPageWidth(window.screen.width);
        console.log(window.screen.width);
    }, [window]);
    return (
        <header className='py-[1rem] z-50 top-0 flex items-center px-[1.5rem] fixed min-w-full bg-white text-black'>
            {
                pageWidth > 850 ? (
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <div className="text-2xl font-medium">Eduhub</div>
                        </div>
                        <div className="min-w-[30%] flex justify-between">
                            <Link className='p-3 text-xl font-medium rounded-md hover:font-bold hover:scale-105 hover:underline' href="/#features">Features</Link>
                            <Link className='p-3 text-xl font-medium rounded-md hover:font-bold hover:scale-105 hover:underline' href="/#aboutus">About us</Link>
                            <Link className='p-3 text-xl font-medium rounded-md hover:font-bold hover:scale-105 hover:underline ' href="/">Future</Link>
                            <Link className='p-3 text-xl font-medium rounded-md hover:font-bold hover:scale-105 hover:underline' href="/">Services</Link>
                        </div>
                        <div className="">
                            <Link href="/login" className='bg-black p-3 text-white rounded-md font-medium'>Login</Link>
                        </div>     
                    </div>

                ) : (
                    <MobileNavbar />
                )
            }

        </header>
    )
}
