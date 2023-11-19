import React from 'react'
import "./home.css"

const Home = () => {
    return (
        <>

            <div className='flex justify-evenly main items-center gap-3 rounded-2xl p-[1.875rem] mt-12 mx-10 bg-gray-100'>
                <div className='flex flex-col p-2 innermain'>
                    {/* include 5 words only in first h1 and in second 5*/}
                    <h1 className={` font-extrabold text-[4.8vw] leading-[1] mb-3 text-gray-700 `}>Musk Shocks the World</h1>
                    <h1 className={` font-extrabold text-[2.8vw] mb-2 text-gray-600`}>Apple's Company Up for Sale!</h1>
                    <p className='text-gray-500 mb-3 mt-2 max-w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At recusandae sed ipsa quo odio facere incidunt voluptatibus quibusdam nulla perferendis! Molestias conse epturi !</p>
                </div>

                <div>
                    <img className='rounded-md' width={500} height={500} src="/elon.jfif" />
                </div>

            </div>

        </>
    )
}

export default Home