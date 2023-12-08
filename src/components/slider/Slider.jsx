import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./slider.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../cards/cards.css";
import axios from "axios";
import Image from "next/image";
import { revalidatePath } from "next/cache";

const Slider = () => {
  const [data, Setdata] = useState([]);

  const blogsdata = async () => {
    const blog = await axios
      .get("/api/blog")
      .then((res) => {
        Setdata(res.data.data);
        revalidatePath(`/blog`);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const deletefunc = async (id)=>{
    const confirm = window.confirm("Are you sure you want to delete this blog ?");
    if(confirm){
      const blog = await axios.delete(`/api/blog/${id}`)
      .then((res) => {
        const filter = data && data.filter((d) => d._id !== id);
        Setdata(filter);
        revalidatePath(`/blog/${id}`); // Add this line to revalidate the deleted blog path
        alert(JSON.stringify(res.data.msg));

      })
      .catch((err) => {
        console.log(err);
      });
    };

  }

  useEffect(() => {
    blogsdata();
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className="trending">
        <div className="container">
          <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {data &&
              data.map((d) => (
                <div
                  className={`flex justify-center  flex-wrap gap-12  my-10 p-4 `}
                >
                  <div
                    key={d.id}
                    className="flex cardsbody overflow-hidden  gap-4 flex-col justify-center w-full max-w-[251px] mb-4 pb-1 border border-solid border-2 shadow-2xl  border-grey-600 rounded-xl"
                  >
                    <Image
                      width={250}
                      height={250}
                      quality={50}
                      className="rounded-t-[0.3rem] h-[26vh] max-w-sm  hover:transform object-cover"
                      src={d?.images && d.images[0].url}
                      alt=""
                    />
                    <div className="flex flex-col flex-grow gap-3 px-3 pb-3 cardslidertext">
                      <h3 className="font-bold text-[1rem] opacity-90  text-gray-700">
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
                        
                      </p>
                      <div className="flex items-center justify-between my-3">
                        <Link href={`/update/${d._id}`}><button className="py-1 px-5 bg-yellow-500 text-white rounded-lg">Update</button></Link>
                        <button className="py-1 px-5 bg-red-500 text-white rounded-lg" onClick={()=> deletefunc(d._id)}>Delete</button>
                      </div>
                      <button className=" bg-gray-600 justify-items-end  hover:bg-gray-500 hover:transition transition-all  text-white font-bold py-2 px-4 rounded-full ">
                        <Link href={`/blog/${d._id}`}>See more</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
