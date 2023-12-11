"use client"
import React, { useEffect, useState } from 'react'
import "./cards.css"
import { useRouter } from 'next/navigation'
import Image  from "next/image"
import axios from "axios"

const Cards = () => {
    const router = useRouter()
    const [showMore, setShowMore] = useState(false)
    const [data, Setdata] = useState([])
    const vissibleCards = showMore ? data && data : data && data.slice(0, 4)


    const blogsdata = async () => {
        const blog = await axios.get("/api/blog")
            .then((res) => {
                Setdata(res.data.data)
                console.log(res.data.data);
            }).catch((err) => {
                console.log(err.response.data);
            })
    }

    const handleNav = (id) => {
        router.push(`/blog/${id}`)
    }

    useEffect(() => {
        blogsdata()
    }, [])


    return (
        <>
            <div className={`flex justify-center  flex-wrap gap-12  my-10 p-4`}>

                {
                    vissibleCards.map((d) => (
                        <div key={d._id} className="flex cardsbody overflow-hidden  gap-4 flex-col justify-center w-full max-w-[251px] mb-4 pb-1 border border-solid border-2 shadow-2xl  border-grey-600 rounded-xl">
                            <Image width={250} height={250} quality={50} className="rounded-t-[0.3rem] h-[26vh] max-w-sm  hover:transform object-cover" src={d?.images && d.images[0].url} alt="" />
                            <div className="flex flex-col flex-grow gap-3 px-3 pb-3 ">
                                <h3 className="font-bold text-[1.1rem] opacity-90  text-gray-700">{d.title && `${d.title.slice(0, 35)} ${d.title.length > 35 ? "...." : ''}`}..</h3>
                                <p className='text-gray-600'>{d.tagLine && `${d.tagLine.slice(0, 50)} ${d.tagLine.length > 57 ? "...." : ''}`}.</p>
                                <button className=" bg-gray-600 justify-items-end  hover:bg-gray-500 hover:transition transition-all  text-white font-bold py-2 px-4 rounded-full " onClick={()=> handleNav(d?._id)}>See More</button>
                            </div>
                        </div>
                    ))


                }

            </div>

            <div className="flex justify-center mb-8">
                <button className='rounded-full shadow-2xl px-4 py-2  hover:bg-transparent border border-gray-400 transition-all duration-500' onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>

        </>
    )
}

export default Cards