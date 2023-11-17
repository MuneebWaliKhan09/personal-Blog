import React from 'react'
import data from '@/api';
import Image from 'next/image';
import "./blog.css"

const page = ({ params }) => {

  const d = data.filter((val) => val.id == params.id[1])

  return (
    <>
      {
        d && d.map((val) => (
          <div className='flex mt-8 justify-between mb-96 h-full  blog gap-4 px-10 rounded-md py-10 pt-8 mx-10  bg-gray-50 transition-all  text-white font-bold'>
            <div className='flex flex-col gap-6'>
              <h3 className=" font-bold title text-4xl text-gray-800 p-2">{val.title && val.title}..</h3>
              {val.desc && val.desc.map((des) => (
                <ul className=' text-justify'>
                  <h4 className='text-gray-700'>{des.start[0]}</h4>
                  <p className='text-gray-500 mt-4'>{des.mid[0]}</p>
                  <h3 className='text-gray-500 mt-5'>{des.end[0]}</h3>
                </ul>
              ))}
            </div>
            <Image src="/c.jpg" alt="" className='px-4 object-contain' width={400} height={400} />
          </div>
        ))
      }
    </>

  )
}

export default page