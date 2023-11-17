"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "./nav.css"

const Navbar = () => {
    const isLoged = false
    const [toggle, setToggle] = useState(false)



    return (
        <>
            <nav className='flex  nav items-center justify-between px-20 py-5  bg-gray-100 shadow-lg'>
                <div>
                    <span className=' font-bold text-2xl'>BLOG {'{ MUNEEB }'}</span>
                </div>
                <div className=' items-center gap-9 sm:flex hidden '>

                    <p> <Link className='font-semibold' href='/'>Home</Link></p>
                    <p> <Link className='font-semibold' href='/about'>About</Link></p>
                    {
                        isLoged ? (
                            <div className=' py-1 px-2 flex items-center justify-center cursor-pointer   text-xl  rounded-full bg-blue-600 text-white'>
                                <Link className=' font-normal text-white' href='/profile'>
                                    M
                                </Link>
                            </div>
                        ) : (

                            <p> <Link className='font-semibold' href='/login'>Login</Link></p>
                        )
                    }
                </div>

                <div className=' sm:hidden flex relative'>
                    <div onClick={() => setToggle(prev => !prev)} className=' py-1 px-2 flex items-center justify-center cursor-pointer   text-xl  rounded-full bg-blue-600 text-white'>
                        <div>
                            M
                        </div>
                    </div>
                    {
                        toggle && (
                            <div className=' flex w-40 absolute  top-[2.50rem] rounded-r-[5px] rounded-b-[6%] rounded-[6%] right-[0.9rem] py-4 pb-6 pr-3 text-gray-900 border border-gray-400 bg-[#ececff] flex-col items-end gap-6'>
                                <p > <Link className='py-2 px-2 pl-20  rounded-full bg-white ' href='/'>Home</Link></p>
                                <p > <Link className='py-2 px-2 pl-20 rounded-full bg-white ' href='/about'>About</Link></p>
                                {
                                    isLoged ? (
                                        <Link className='py-2 px-2 pl-20 rounded-full bg-white ' href='/profile'>
                                            profile
                                        </Link>
                                        
                                    ) : (

                                        <p > <Link className='py-2 px-2 pl-20 rounded-full bg-white ' href='/login'>Login</Link></p>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </nav >

        </>
    )
}

export default Navbar