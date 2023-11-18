import React from 'react';
import "./about.css"


const AboutPage = () => {
  return (
    <div className="bg-gray-100 p-4 aboutus">
      <div className="container mx-auto flex p-8 gap-3 aboutus">
        {/* Left Content */}
        <div className="w-2/3">
          <h1 className="text-4xl blogname font-bold mb-4 text-gray-800">BLOG {'{ MUNEEB }'}</h1>
          <p className="text-gray-600 mb-4">
            Welcome to our blog! We are passionate about [your blog topic or niche]. Our goal is to [briefly describe the purpose or mission of your blog]. 
            Whether you're [target audience], we strive to provide valuable and engaging content for everyone.
          </p>
          <p className="text-gray-600 mb-4">
            At [your blog name], we believe in [core belief or value]. Our team is dedicated to [something unique about your blog or team]. 
            Explore our blog to discover [types of content you offer] and stay updated on the latest [industry/news related to your blog].
          </p>
          <p className="text-gray-600 mb-4">
            Thank you for being a part of our community. If you have any questions or suggestions, feel free to 
            <a href="/contact" className="text-blue-500"> contact us</a>. Happy reading!
          </p>
        </div>
        
        {/* Right Content */}
        <div className="w-1/3">
          <img src="/p.jpg" alt="Blog Image" className="w-700 h-700 object-cover aboutimg" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
