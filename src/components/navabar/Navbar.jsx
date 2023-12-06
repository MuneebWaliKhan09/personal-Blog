"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import "./nav.css"
import ThemeSwitcher from '@/app/ThemeSwitcher'
import Providers from '../../app/providers'
// import Image from 'next/image'

const Navbar = () => {
    const { data: session } = useSession();
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
            setData(session ? session : null)
    }, [session])
    


    return (
        <>
            <nav className='flex  nav items-center justify-between px-20 py-[19px]  bg-gray-100 shadow-lg'>
                <div>
                    <span className=' font-bold text-2xl'>BLOG {'{ MUNEEB }'}</span>
                </div>
                <div className=' items-center gap-9 sm:flex hidden '>

                    <p> <Link className='font-semibold' href='/'>Home</Link></p>
                    <p> <Link className='font-semibold' href='/about'>About</Link></p>
                    <p>
                        <Providers>
                            <ThemeSwitcher />
                        </Providers>
                    </p>
                    {
                        data  ? (
                            <>
                                <p> <Link className='font-semibold' href='/create'>Create</Link></p>
                                <div> <Link className='font-semibold cursor-pointer' href='/api/auth/signout?callbackUrl=/'>Sign out</Link></div>

                                <div className=' py-1 px-2'>
                                    <Link className=' font-normal' href='/profile'>
                                        <div className=' rounded-full h-7 w-7 text-center flex items-center justify-center bg-blue-600 text-white'>
                                            {/* {data?.user?.email ? data.user.email.charAt(0).toUpperCase() : 'U'} */}
                                            {data?.user?.image ? <Image src={data.user.image} alt="" width={50} height={50} className='rounded-full' /> : data?.user?.email.charAt(0).toUpperCase()}
                                        </div>
                                    </Link>
                                </div>
                            </>
                        ) : (

                            <p> <Link className='font-semibold' href='/api/auth/signin'>Login</Link></p>
                        )
                    }
                </div>

                <div className=' sm:hidden flex relative'>
                    <div onClick={() => setToggle(prev => !prev)} className=' py-1 px-2 flex items-center justify-center cursor-pointer   text-xl  rounded-full bg-blue-600 text-white'>
                        {data?.user?.image ? <Image src={data.user.image} alt="" width={50} height={50} className='rounded-full' /> : data?.user?.email.charAt(0).toUpperCase()}
                    </div>
                    {
                        toggle && (
                            <div className=' flex w-40 absolute  top-[2.50rem] rounded-r-[5px] rounded-b-[6%] rounded-[6%] right-[0.9rem] py-4 pb-6 pr-3 text-gray-900 border border-gray-400 bg-[#ececff] flex-col items-end gap-5'>
                                <p > <Link className='py-2 px-2 pl-20  rounded-full bg-white ' href='/'>Home</Link></p>
                                <p > <Link className='py-2 px-2 pl-20 rounded-full bg-white ' href='/about'>About</Link></p>

                                {
                                    data ? (
                                        <>
                                            <Link className='py-2 px-2 pl-20  rounded-full bg-white' href='/profile'>
                                                profile
                                            </Link>
                                            <Link className='py-2 px-2 pl-20  rounded-full bg-white' href='/create'>
                                                Create
                                            </Link>
                                            <Link className='py-2 px-2 pl-20   rounded-full bg-white' href='/api/auth/signout?callbackUrl=/'>
                                                Sign<span>out</span>
                                            </Link>
                                        </>

                                    ) : (

                                        <p > <Link className='py-2 px-2 pl-20 rounded-full bg-white ' href='/api/auth/signin'>Login</Link></p>
                                    )
                                }
                                <p className=' flex items-center gap-2 py-2 px-2 pl-6 rounded-full bg-white'>
                                    <Providers>
                                        <ThemeSwitcher />
                                    </Providers>
                                    <span>dark</span>
                                </p>
                            </div>
                        )
                    }
                </div>
            </nav >

        </>
    )
}

export default Navbar