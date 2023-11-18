"use client"
import React, { useEffect, useState } from 'react'
import "./cat.css"
import Image from 'next/image'
import Link from 'next/link'
import data from '@/api'

const Category = () => {

    const categories = [
        'Tech',
        'Intertainment',
        'Political',
        'Drama',
        'Bollywood',
        'Movies',
        'All',
    ]

    // console.log(categories);
    const [filt, setFilt] = useState([])


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
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[6]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[0]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[1]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[2]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[3]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[4]}</h4>
                        <h4 onClick={handleCategoryClick} className=' py-1 px-5 rounded-lg  bg-gray-200 hover:bg-gray-500 hover:transition transition-all  text-gray-600 hover:text-white   font-medium cursor-pointer'>{categories[5]}</h4>
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
                                    <Image src='/c.jpg' alt={d.title} width={80} height={80} />
                                    <div className='flex flex-col '>
                                        <h3 className=' font-bold text-[#3939a9de]'>{d.category}</h3>
                                        <p className=' underline text-[#21219dbf] hover:text-blue-600 cursor-pointer'><Link href={`/blog/${d.title}/${d.id}`}>{d.title && `${d.title.slice(0, 70)} ${d.title.length > 70 ? "...." : ''}`}</Link></p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            data && data.map((d) => (
                                <div className='flex items-center p-2 gap-2 blogs border border-gray-400 rounded-md hover:bg-gray-100 '>
                                    <Image src='/c.jpg' alt={d.title} width={80} height={80} />
                                    <div className='flex flex-col '>
                                        <h3 className=' font-bold text-[#3939a9de]'>{d.category}</h3>
                                        <p className=' underline text-[#21219dbf] hover:text-blue-600 cursor-pointer'><Link href={`/blog/${d.title}/${d.id}`}>{d.title.slice(0, 70)}....</Link></p>
                                    </div>
                                </div>
                            ))
                        )

                    }

                </div>

                <div className=' w-[50%] mt-9 column2 '>
                    <h4 className='font-semibold text-3xl p-2 mb-4 text-center text-gray-500 '>Trending</h4>
                    <div className='bg-gray-50 w-full cat flex flex-col gap-6'>


                        {

                            filt && filt.length > 0 ? (
                                filt.map((d) => (
                                    <div className="tech bg-gray-100">
                                        <p className='font-bold text-gray-600'>{d.category}</p>
                                        <h3>{d.title && `${d.title.slice(0, 70)} ${d.title.length > 70 ? "...." : ''}`}</h3>
                                        <div className="trendingLine"></div>
                                        <br />
                                    </div>
                                ))
                            ) : (
                                data && data.filter((val)=>{
                                    return val.category === "Tech" || val.category === "Intertainment"
                                }).map((d) => (
                                    <div className="tech bg-gray-100">
                                        <p className='font-bold text-gray-600'>{d.category}</p>
                                        <h3>{d.title && `${d.title.slice(0, 70)} ${d.title.length > 70 ? "...." : ''}`}</h3>
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