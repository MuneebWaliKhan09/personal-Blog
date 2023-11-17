"use client"
import React, { useEffect, useState } from 'react'
import "./cards.css"
import Link from 'next/link'
import data from '@/api'

const Cards = () => {



    return (
        <>
            <div className='flex justify-center items-center flex-wrap gap-10  my-14 p-4'>

                {
                    data.map((d) => (
                        <div key={d.id} className="flex    gap-4 flex-col justify-center w-full max-w-[251px] mb-4 pb-2 border border-solid border-2 shadow-2xl  border-grey-600 rounded-xl">
                            <img className="rounded-t-[0.3rem] h-[26vh] max-w-sm  hover:transform object-cover" src='/c.jpg' alt="" />
                            <div className="flex flex-col gap-3 px-3 pb-3 ">
                                <h3 className="font-bold text-[1.1rem] opacity-90  text-gray-700">{d.title.slice(0,69)}..</h3>
                                <p className='text-gray-600'>{d.tagLine && d.tagLine.slice(0,57)}.</p>
                                <button className=" bg-gray-600 hover:bg-gray-500 hover:transition transition-all  text-white font-bold py-2 px-4 rounded-full "><Link href={`/blog/${d.title}/${d.id}`}>See more</Link></button>
                            </div>
                        </div>
                    ))


                }

            </div>

        </>
    )
}

export default Cards