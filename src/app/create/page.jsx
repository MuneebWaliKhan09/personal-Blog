"use client";
import Slider from "@/components/slider/Slider";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [images, setImages] = useState("");
  const [descStart, setDescStart] = useState("");
  const [descMid, setDescMid] = useState("");
  const [descEnd, setDescEnd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("tagLine", tagLine);
    formData.append("start", descStart);
    formData.append("mid", descMid);
    formData.append("end", descEnd);
    formData.append("images", images);

    try {
      const response = await axios
        .post("/api/blog/create", formData)
        .then((res) => {
          alert(JSON.stringify(res.data.msg));
        })
        .catch((err) => {
          alert(err.response.data.err);
        });

    } catch (error) {
      console.error("Error submitting form:", error.response.data);
    }
  };

  return (
    <div className="container mx-auto my-12 p-8 bg-white adminblog shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-12 mt-10">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of your blog"
            className="mt-1 p-2 border rounded-md w-full border-gray-500"
          />
        </div>

        {/* category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter the title of your blog"
            className="mt-1 p-2 border rounded-md w-full border-gray-500"
          />
        </div>

        {/* Tagline */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            TagLine
          </label>
          <input
            type="text"
            name="tagLine"
            value={tagLine}
            onChange={(e) => setTagLine(e.target.value)}
            placeholder="Enter the title of your blog"
            className="mt-1 p-2 border rounded-md w-full border-gray-500"
          />
        </div>

        {/* ... (similar structure for other fields) */}

        {/* Description Start */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Description Start
          </label>
          <textarea
            name="start"
            value={descStart}
            onChange={(e) => setDescStart(e.target.value)}
            placeholder="Write the beginning of your blog post here"
            className="mt-1 p-2 border rounded-md w-full border-gray-500"
          />
        </div>

        {/* Description Mid */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Description Mid
          </label>
          <textarea
            name="mid"
            value={descMid}
            onChange={(e) => setDescMid(e.target.value)}
            placeholder="Continue your blog post here"
            className="mt-1 p-2 border rounded-md w-full border-gray-500"
          />
        </div>

        {/* Description End */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Description End
          </label>
          <textarea
            name="end"
            value={descEnd}
            onChange={(e) => setDescEnd(e.target.value)}
            placeholder="Conclude your blog post here"
            className="mt-1 p-2 border rounded-md w-full border-gray-500"
          />
        </div>

        {/* images */}
        <div className="flex gap-4 items-center">
          <div className="mb-4 w-10/12">
            <label className="block text-sm font-medium text-gray-600">
              Image
            </label>
            <input
              name="images"
              type="file"
              onChange={(e) => setImages(e.target.files[0])}
              placeholder="Write the beginning of your blog post here"
              className="mt-1 p-2 border rounded-md w-full border-gray-500 imageinput"
            />
          </div>
          <div>
            {images && (
              <Image
                src={URL.createObjectURL(images)}
                alt=""
                height={50}
                width={50}
                className=" rounded-full"
              />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Create Blog Post
        </button>
      </form>
      {/* carosule of blog cards */}
      <div className="">
        <Slider />
      </div>
    </div>
  );
};

export default Create;
