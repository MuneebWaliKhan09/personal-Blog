import Image from 'next/image';
import "./blog.css"
import axios from "axios"

const blogdata = async (id) => {
  try {
    const getdata = await axios.get(`/api/blog/${id}`);
    return getdata.data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return null;
  }
};

const page = async ({ params }) => {
  const d = await blogdata(params.id)

console.log(d);

  return (
    <>

      <div className='flex mt-8 justify-between mb-96 h-full min-h-[60vh]  blog gap-4 px-10 rounded-md py-10 pt-8 mx-10  bg-gray-50 transition-all  text-white font-bold'>
          <div className='flex flex-col gap-6'>
            <h3 className=" font-bold title text-4xl text-gray-800 p-2">{d.title && d.title}</h3>
            {d.desc && d.desc.map((des) => (
              <ul className=' text-justify'>
                <h4 className='text-gray-700'>{des.start}</h4>
                <p className='text-gray-500 mt-4'>{des.mid}</p>
                <h3 className='text-gray-500 mt-5'>{des.end}</h3>
              </ul>
            ))}
          </div>
          <Image src={d?.images && d.images[0].url} alt="" className='px-4 object-contain' width={400} height={400} />
      </div>
    </>

  )
}

export default page