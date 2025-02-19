import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import JoditEditor from 'jodit-react';
import axios from "axios";

const Post = () => {
  const editorRef = useRef(null); // Ref for Jodit editor

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('keyword', data.keyword);
    formData.append('details', data.details);
    formData.append('publish_by', data.publish_by);
    formData.append('like', data.like);
    formData.append('category', data.category); // Add category
    if (data.blogImage[0]) {
      formData.append('blogImage', data.blogImage[0]);
    }

    try {
      const res = await axios.post('https://backendp-rho.vercel.app/api/blog', formData, {
        headers: {
          'Content-Type': 'multipart/formData'
        }
      });
      console.log(res.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  const config = {
    readonly: false, // Editor is editable
    height: 300,
    toolbarSticky: false,
  };

  return (
    <div className='max-w-5xl p-8 mx-auto flex justify-center items-center'>
      <div className="p-8 bg-slate-300 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Create Blog Post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block font-semibold text-gray-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              {...register('title', { required: 'Title is required' })}
              className="w-full border rounded p-2"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          {/* Keyword Field */}
          <div>
            <label htmlFor="keyword" className="block font-semibold text-gray-700">
              Keyword
            </label>
            <input
              id="keyword"
              type="text"
              {...register('keyword', { required: 'Keyword is required' })}
              className="w-full border rounded p-2"
            />
            {errors.keyword && <p className="text-red-500 text-sm mt-1">{errors.keyword.message}</p>}
          </div>

          {/* Publish By and Likes Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="publish_by" className="block font-semibold text-gray-700">
                Publish By
              </label>
              <input
                id="publish_by"
                type="text"
                {...register('publish_by', { required: 'Publisher name is required' })}
                className="w-full border rounded p-2"
              />
              {errors.publish_by && (
                <p className="text-red-500 text-sm mt-1">{errors.publish_by.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="like" className="block font-semibold text-gray-700">
                Likes
              </label>
              <input
                id="like"
                type="text"
                {...register('like', { required: 'Number of likes is required' })}
                className="w-full border rounded p-2"
              />
              {errors.like && <p className="text-red-500 text-sm mt-1">{errors.like.message}</p>}
            </div>
          </div>

          {/* Blog Image and Category in One Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="blogImage" className="block font-semibold text-gray-700">
                Blog Image
              </label>
              <input
                id="blogImage"
                type="file"
                {...register('blogImage')}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="category" className="block font-semibold text-gray-700">
                Category
              </label>
              <select
                id="category"
                {...register('category', { required: 'Category is required' })}
                className="w-full border rounded p-2"
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Technology">Technology</option>
                <option value="Daily News">Daily News</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>
          </div>

          {/* Details Field */}
          <div>
            <label htmlFor="details" className="block font-semibold text-gray-700">
              Details
            </label>
            <JoditEditor
              ref={editorRef}
              value=""
              config={config}
              onBlur={(newContent) => setValue('details', newContent)} // Update form value on blur
              onChange={() => { }} // Optional
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Blog Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
