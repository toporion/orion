import React from 'react';
import { BsFileCodeFill } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { SiNormalizedotcss } from "react-icons/si";
import { BsSearch } from "react-icons/bs";

const ServiceTab = () => {
    return (
        <div className='w-full py-8 bg-[#1C1C25] text-blue-900 font-semibold'>
            <div className='flex flex-wrap gap-4 justify-center'>
                <button className='bg-white h-20 w-full sm:w-64 rounded-md text-lg sm:text-xl flex items-center justify-center gap-2'>
                    <BsFileCodeFill /> Website Development
                </button>
                <button className='bg-white h-20 w-full sm:w-64 rounded-md text-lg sm:text-xl flex items-center justify-center gap-2'>
                    <FaCss3Alt /> Website Design
                </button>
                <button className='bg-white h-20 w-full sm:w-64 rounded-md text-lg sm:text-xl flex items-center justify-center gap-2'>
                    <SiNormalizedotcss /> Website Maintenance
                </button>
                <button className='bg-white h-20 w-full sm:w-64 rounded-md text-lg sm:text-xl flex items-center justify-center gap-2'>
                    <BsSearch className='text-2xl' /> Advanced SEO
                </button>
            </div>
        </div>
    );
};

export default ServiceTab;
