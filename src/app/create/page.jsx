"use client"
import React, { useState } from 'react';

const create = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    tagLine: '',
    images: '',
    desc: {
      start: '',
      mid: '',
      end: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the title of your blog"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter the category of your blog"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Tag Line */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Tag Line</label>
          <input
            type="text"
            name="tagLine"
            value={formData.tagLine}
            onChange={handleChange}
            placeholder="Enter a catchy tag line for your blog"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Images</label>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="Paste image URLs separated by commas"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Description Start */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description Start</label>
          <textarea
            name="desc.start"
            value={formData.desc.start}
            onChange={handleChange}
            placeholder="Write the beginning of your blog post here"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Description Mid */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description Mid</label>
          <textarea
            name="desc.mid"
            value={formData.desc.mid}
            onChange={handleChange}
            placeholder="Continue your blog post here"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Description End */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description End</label>
          <textarea
            name="desc.end"
            value={formData.desc.end}
            onChange={handleChange}
            placeholder="Conclude your blog post here"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
};

export default create;
