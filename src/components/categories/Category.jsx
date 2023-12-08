"use client"
import React, { useEffect, useState } from 'react'
import "./cat.css"
import Image from 'next/image'
import Link from 'next/link'
// import data from '@/api'
import axios from "axios"
import { revalidatePath } from 'next/cache'

const Category = () => {

    const categories = [
        'All',
        'Tech',
        'Entertainment',
        'Political',
        'Drama',
    ]

    // console.log(categories);
    const [filt, setFilt] = useState([])
    const [data, Setdata] = useState([])

    const blogsdata = async () => {
        const blog = await axios.get("/api/blog")
            .then((res) => {
                Setdata(res.data.data)
                revalidatePath('/')
            }).catch((err) => {
                console.log(err.response.data);
            })
    }

    useEffect(() => {
        blogsdata()
    }, [])

    const handleCategory = (e) => {
        let a = data.filter((val) => {
            return val.category === e.target.value
        })
        setFilt(a)
    }

    const handleCategoryClick = (e) => {
        let a = data.filter((val) => {
            return val.category === e.target.textContent
        })
        setFilt(a)
    }



    return (
        <>
            {
                <div className='flex items-center'>
                    <div className='flex categories items-center justify-center gap-12 px-4 p-2'>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[0]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[1]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[2]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[3]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[4]}</h4>
                    </div>

                    <div className='smallcat'>
                        <select className='p-2 rounded' onChange={handleCategory}>
                            <option value="">Select category</option>
                            {
                                categories.map((val) => (
                                    <option value={val}>{val}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            }

            <div className='flex mt-9 mainDev'>

                <div className=' p-9 gap-6 column1 '>

                    {

                        filt && filt.length > 0 ? (
                            filt.map((d) => (
                                <div className='flex items-center p-2 gap-2 blogs border border-gray-400 rounded-md'>
                                    <Image  src={d?.images && d.images[0].url} alt={d.title} width={80} height={80} quality={80} />
                                    <div className='flex flex-col '>
                                        <h3 className=' font-bold text-[#3939a9de]'>{d.category}</h3>
                                        <p className=' underline text-[#21219dbf] hover:text-blue-600 cursor-pointer'><Link href={`/blog/${d._id}`}>{d.tagLine && `${d.tagLine.slice(0, 100)} ${d.tagLine.length > 100 ? "...." : ''}`}</Link></p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            data && data.map((d) => (
                                <div className='flex items-center p-2 gap-2 blogs border border-gray-400 rounded-md hover:bg-gray-100 '>
                                    <Image  src={d?.images && d.images[0].url} alt={d.title} width={80} height={80} quality={80} />
                                    <div className='flex flex-col '>
                                        <h3 className=' font-bold text-[#3939a9de]'>{d.category}</h3>
                                        <p className=' underline text-[#21219dbf] hover:text-blue-600 cursor-pointer'><Link href={`/blog/${d._id}`}>{d.tagLine.slice(0, 100)}....</Link></p>
                                    </div>
                                </div>
                            ))
                        )

                    }

                </div>

                <div className=' w-[50%] mt-9 column2 '>
                    <h4 className='font-semibold text-3xl p-2 mb-4 text-center text-gray-500  '>Trending</h4>
                    <div className='bg-gray-50 w-full cat flex flex-col gap-6 overflow-y-scroll'>


                        {

                            filt && filt.length > 0 ? (
                                filt.map((d) => (
                                    <div className="tech bg-gray-100">
                                        <p className='font-bold text-gray-600'>{d.category}</p>
                                        <h3 className=' underline text-[#21219dbf] hover:text-blue-600 cursor-pointer'><Link href={`/blog/${d._id}`}>{d.tagLine && `${d.tagLine.slice(0, 100)} ${d.tagLine.length > 100 ? "...." : ''}`}</Link></h3>
                                        <div className="trendingLine"></div>
                                        <br />
                                    </div>
                                ))
                            ) : (
                                data && data.filter((val) => {
                                    return val.category === "Tech" || val.category === "Entertainment" || val.category === "Drama"
                                }).map((d) => (
                                    <div className="tech bg-gray-100 ">
                                        <p className='font-bold text-gray-600'>{d.category}</p>
                                        <h3 className=' underline text-[#21219dbf] cursor-pointer'><Link href={`/blog/${d._id}`}>{d.tagLine && `${d.tagLine.slice(0, 70)} ${d.tagLine.length > 70 ? "...." : ''}`}</Link></h3>
                                        <div className="trendingLine"></div>
                                    </div>

                                ))
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Category