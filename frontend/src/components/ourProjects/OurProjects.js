import React from 'react';
import pro from '../../assets/pro-1.jpg';
import pro2 from '../../assets/pro-2.jpg';
import pro3 from '../../assets/pro-3.jpg';
import pro4 from '../../assets/pro-4.jpg';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

const OurProjects = () => {
  return (
    <div className='w-full'>
      <div className='text-center py-8'>
        <p className='text-lg'></p>
        <p className='text-3xl font-semibold'></p>
        <p className='text-lg text-center flex justify-center text-blue-600'>
          <GoDotFill className='text-2xl' />Our Projects<GoDotFill className='text-2xl' />
        </p>
        <h1 className='text-center text-3xl mb-2 text-black font-semibold fugaz-one-regular'>
          Discover Our Latest Projects
        </h1>
      </div>
      <div className='w-[87%] mx-auto '>
        <div className='flex gap-4 py-6'>
          {/* First Image */}
          <div className='relative group w-1/2'>
            <img className='w-full rounded-xl' src={pro} alt="" />
            <div className='absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-xl'></div>
            <Link to={'/projects'}><button className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white font-bold'>
                Discover
              </button></Link>
          </div>
          {/* Second and Third Images */}
          <div className='w-1/2'>
            <div className='relative group'>
              <img className='rounded-xl' src={pro2} alt="" />
              <div className='absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-xl'></div>
              <Link to={'/projects'}><button className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white font-bold'>
                Discover
              </button></Link>
            </div>
            <div className='flex overflow-hidden mt-8 gap-2'>
              <div className='relative group w-1/2'>
                <img className='w-full rounded-xl' src={pro3} alt="" />
                <div className='absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-xl'></div>
                <Link to={'/projects'}><button className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white font-bold'>
                Discover
              </button></Link>
              </div>
              <div className='relative group w-1/2'>
                <img className='w-full rounded-xl' src={pro4} alt="" />
                <div className='absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-xl'></div>
                <Link to={'/projects'}><button className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white font-bold'>
                Discover
              </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
