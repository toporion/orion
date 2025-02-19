import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

const News = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('story.json')
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <div className="px-6 lg:px-12 mb-8">
      <div className="text-center mt-8 py-4">
        <p className="flex items-center justify-center text-blue-700">
          <GoDotFill className="text-2xl text-blue-600" />
          New And Blogs
          <GoDotFill className="text-2xl text-blue-600" />
        </p>
        <p className="text-3xl font-bold fugaz-one-regular text-black">
          Top Stories Making Headlines
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Main Blog Post */}
        {blogData[0] && (
          <div className="relative flex-1 h-80 rounded-lg overflow-hidden">
            <img
              src={blogData[0].image}
              alt={blogData[0].title}
              className="w-full h-full object-cover"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 text-white">
              <h2 className="text-2xl font-bold">{blogData[0].title}</h2>
              <p className="mt-2 text-sm">{blogData[0].description}</p>
              <Link to={'/blog'}><button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm">
                Read More
              </button></Link>
            </div>
          </div>
        )}

        {/* Recent Posts */}
        <div className="flex flex-col space-y-6 lg:w-1/3">
          {blogData.slice(1, 3).map((blog, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-black">{blog.title}</h3>
                <p className="text-gray-400 text-xs mt-1">
                  By {blog.publish_by} on {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
