"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import "./nav.css"
import ThemeSwitcher from '@/app/ThemeSwitcher'
import Providers from '../../app/providers'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Navbar = () => {
    const { data: session } = useSession()
    const [toggle, setToggle] = useState(false)


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
                        session?.user ? (
                            <>
                                <p> <Link className='font-semibold' href='/create'>Create</Link></p>
                                <p> <Link className='font-semibold' href='/api/auth/signout'>Sign out</Link></p>

                                <div className=' py-1 px-2'>
                                    <Link className=' font-normal' href='/profile'>
                                        {session?.user && !session?.user.name ? (<div className=' h-8 w-8 py-1 px-1 text-center cursor-pointer text-xl flex items-center justify-center rounded-full bg-blue-600 text-white'> {session.user.name[0]}</div>) : (

                                            <Image
                                                className="border-2 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
                                                src={session?.user?.image}
                                                width={37}
                                                height={37}
                                                alt={session?.user?.name ?? "Profile Pic"}
                                                priority={true}
                                            />
                                        )}
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
                        <div>
                            {session?.user && session?.user.name ? (session.user.name[0]) : (
                                <Image
                                    className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
                                    src={session?.user?.image}
                                    width={43}
                                    height={43}
                                    alt={session?.user?.name ?? "Profile Pic"}
                                    priority={true}
                                />
                            )}
                        </div>
                    </div>
                    {
                        toggle && (
                            <div className=' flex w-40 absolute  top-[2.50rem] rounded-r-[5px] rounded-b-[6%] rounded-[6%] right-[0.9rem] py-4 pb-6 pr-3 text-gray-900 border border-gray-400 bg-[#ececff] flex-col items-end gap-5'>
                                <p > <Link className='py-2 px-2 pl-20  rounded-full bg-white ' href='/'>Home</Link></p>
                                <p > <Link className='py-2 px-2 pl-20 rounded-full bg-white ' href='/about'>About</Link></p>

                                {
                                    session?.user ? (
                                        <>
                                            <Link className='py-2 px-2 pl-20  rounded-full bg-white' href='/profile'>
                                                profile
                                            </Link>
                                            <Link className='py-2 px-2 pl-20  rounded-full bg-white' href='/create'>
                                                Create
                                            </Link>
                                            <Link className='py-2 px-2 pl-20   rounded-full bg-white' href='/api/auth/signout'>
                                                Sign<span>out</span>
                                            </Link>
                                        </>

                                    ) : (

                                        <p > <Link className='py-2 px-2 pl-20 rounded-full bg-white ' href='http://localhost:3000/api/auth/signin'>Login</Link></p>
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