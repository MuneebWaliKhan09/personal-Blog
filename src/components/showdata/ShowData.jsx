"use client"
import React, { useState } from "react";

const ShowData = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  //   const [data, Setdata] = useState([]);
  const vissibleCards = showMore ? data && data : data && data.slice(0, 4);

  return (
    <>
      <div className="flex justify-center mb-8">
        <button
          className="rounded-full shadow-2xl px-4 py-2  hover:bg-transparent border border-gray-400 transition-all duration-500"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default ShowData;
