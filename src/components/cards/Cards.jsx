"use client"
import "./cards.css";
import Image from "next/image";
import axios from "axios";
import ShowData from "../showdata/ShowData";
import Link from "next/link";


const Cards = async ({data}) => {
    console.log("cards", data && data);

  return (
    <>
      <div className={`flex justify-center  flex-wrap gap-12  my-10 p-4 `}>
        {data && 
          data.map((d) => (
            <div
              key={d._id}
              className="flex cardsbody overflow-hidden  gap-4 flex-col justify-center w-full max-w-[251px] mb-4 pb-1 border border-solid border-2 shadow-2xl  border-grey-600 rounded-xl"
            >
              <Image
                width={250}
                height={250}
                quality={50}
                className="rounded-t-[0.3rem] h-[26vh] max-w-sm  hover:transform object-cover"
                src={d.images && d.images[0].url}
                alt=""
              />
              <div className="flex flex-col flex-grow gap-3 px-3 pb-3 ">
                <h3 className="font-bold text-[1.1rem] opacity-90  text-gray-700">
                  {d.title &&
                    `${d.title.slice(0, 69)} ${
                      d.title.length > 69 ? "...." : ""
                    }`}
                  ..
                </h3>
                <p className="text-gray-600">
                  {d.tagLine &&
                    `${d.tagLine.slice(0, 50)} ${
                      d.tagLine.length > 57 ? "...." : ""
                    }`}
                  .
                </p>
                <button className=" bg-gray-600 justify-items-end  hover:bg-gray-500 hover:transition transition-all  text-white font-bold py-2 px-4 rounded-full ">
                  <Link href={`/blog/${d._id}`}> See More</Link>
                </button>
              </div>
            </div>
          ))}
      </div>

      <ShowData data={data} />
    </>
  );
};


export async function getServerSideProps() {
    try {
      const getdata = await axios.get("/api/blog"); // Replace with your actual API URL
      const data = getdata.data.data;
  
      return {
        props: { data },
      };
    } catch (error) {
      console.error("Error fetching blog data:", error);
      return {
        props: { data: null },
      };
    }
  }

export default Cards;
