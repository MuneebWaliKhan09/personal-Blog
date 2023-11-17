"use client"
import React, { useEffect, useState } from 'react'
import "./cards.css"
import Link from 'next/link'
import data from '@/api'

const Cards = () => {
    const [showMore, setShowMore] = useState(false)
    const vissibleCards = showMore ? data : data.slice(0, 4)


    return (
        <>
            <div className={`flex justify-center items-center flex-wrap gap-12  my-10 p-4 `}>

                {
                    vissibleCards.map((d) => (
                        <div key={d.id} className="flex    gap-4 flex-col justify-center w-full max-w-[251px] mb-4 pb-1 border border-solid border-2 shadow-2xl  border-grey-600 rounded-xl">
                            <img className="rounded-t-[0.3rem] h-[26vh] max-w-sm  hover:transform object-cover" src='/c.jpg' alt="" />
                            <div className="flex flex-col gap-3 px-3 pb-3 ">
                                <h3 className="font-bold text-[1.1rem] opacity-90  text-gray-700">{d.title && `${d.title.slice(0, 69)} ${d.title.length > 69 ? "...." : ''}`}..</h3>
                                <p className='text-gray-600'>{d.tagLine && `${d.tagLine.slice(0, 57)} ${d.tagLine.length > 57 ? "...." : ''}`}.</p>
                                <button className=" bg-gray-600 hover:bg-gray-500 hover:transition transition-all  text-white font-bold py-2 px-4 rounded-full "><Link href={`/blog/${d.title}/${d.id}`}>See more</Link></button>
                            </div>
                        </div>
                    ))


                }

            </div>

            <div className="flex justify-center mb-8">
                <button className=' bg-gray-500 rounded-full shadow-2xl px-4 py-2 text-white hover:bg-transparent hover:text-black border hover:border-gray-300 transition-all duration-500' onClick={()=> setShowMore(!showMore)}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>

        </>
    )
}

export default Cards