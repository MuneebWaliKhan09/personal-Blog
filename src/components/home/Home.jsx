import React from 'react'
import "./home.css"

const Home = () => {
    return (
        <>

            <div className='flex justify-evenly main items-center gap-3 px-6 rounded-md py-3 mt-10 mx-10 bg-[ghostwhite]'>
                <div className='flex flex-col p-2'>
                    <h1 className=' font-extrabold text-[5.1vw] text-gray-800 '>Big News from Isreal</h1>
                    <h1 className=' font-extrabold text-[3.3vw] text-gray-800'>Hamas Atack Isreal</h1>
                    <p className='text-gray-700 mb-3 mt-2 max-w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At recusandae sed ipsa quo odio facere incidunt voluptatibus quibusdam nulla perferendis! Molestias conse epturi!</p>
                </div>

                <div>
                    <img className='rounded-md' width={500} height={500} src="/p.jpg" />
                </div>

            </div>

        </>
    )
}

export default Home