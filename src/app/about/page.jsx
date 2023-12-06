import React from 'react';
import "./about.css";
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 p-4 aboutus">
      <div className="container mx-auto justify-between flex p-8 gap-3 aboutus">
        {/* Left Content */}
        <div className="w-2/3 text-justify bloginner">
          <h1 className="text-4xl blogname font-bold mb-4 text-gray-800">BLOG {'{ MUNEEB }'}</h1>
          <p className="text-gray-600 mb-4">
            Welcome to our blog! We are passionate about technology and innovation. Our goal is to share the latest trends and insights in the tech world. 
            Whether you're a tech enthusiast, developer, or just curious about emerging technologies, we strive to provide valuable and engaging content for everyone.
          </p>
          <p className="text-gray-600 mb-4">
            At Tech Insights, we believe in the power of knowledge. Our team is dedicated to exploring cutting-edge technologies and providing in-depth analysis. 
            Explore our blog to discover articles on programming, artificial intelligence, and stay updated on the latest tech news.
          </p>
          <p className="text-gray-600 mb-4">
            Thank you for being a part of our community. If you have any questions or suggestions, feel free to 
            <a href="/contact" className="text-blue-500"> contact us</a>. Happy reading!
          </p>
        </div>
        
        {/* Right Content */}
        <div className="w-1/3 bloginnerimg px-4">
          <Image src="/about.jpg" width={700} height={700} alt="Blog Image" className="w-700 h-700 object-cover aboutimg" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
