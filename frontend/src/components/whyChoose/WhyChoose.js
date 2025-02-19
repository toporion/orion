import React from 'react';
import choose from '../../assets/choose.png';
import rocket from '../../assets/rocket.png';
import { GoDotFill } from 'react-icons/go';
import { FaIndustry } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { MdDataExploration } from "react-icons/md";

const WhyChoose = () => {
    return (
        <div className='w-full mt-16 relative'>
            <div className=' flex flex-col lg:flex-row gap-2 w-[85%] mx-auto justify-center items-center'>
                <div>
                    <img
                        className='w-4/5 rounded-lg shadow-xl bg-gradient-to-r from-white to-blue-100 p-2'
                        style={{
                            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                            borderRadius: '15px',
                            filter: 'drop-shadow(0px 5px 20px rgba(0, 122, 255, 0.5))',
                        }}
                        src={choose}
                        alt=""
                    />
                </div>
                <div className='w-full lg:w-[60%] p-4 rounded-lg text-left'>
                    <p className='text-lg flex text-blue-600'>
                        <GoDotFill className='text-2xl' />
                        Why Choose Top Orion
                        <GoDotFill className='text-2xl' />
                    </p>
                    <div>
                        <h1 className='text-2xl mb-2 text-black font-semibold'>
                            The Top Orion Advantages
                        </h1>
                        <p className=' break-all'>
                        At Top Orion, we are not just another web development and design company. We are a passionate team of experts committed to empowering businesses of all sizes with custom website development and web development services. Our approach blends innovative strategies with meticulous data analysis, ensuring your business thrives in the online realm.
                        </p>
                        <div className='flex items-center gap-4'>
                            <FaIndustry className='text-6xl text-blue-500' />
                            <div>
                                <h4 className='mt-4 font-semibold'>Years in the Industry</h4>
                                <p>
                                    We helped a local bakery chain increase their social media engagement by 300% within a year,
                                    leading.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FaPeopleArrows className='text-6xl text-blue-500' />
                            <div>
                                <h4 className='mt-4 font-semibold'>Client-Centric Approach</h4>
                                <p>
                                    We helped a local business increase their social online presence by 300% within a year,
                                    leading.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <MdDataExploration className='text-6xl text-blue-500' />
                            <div>
                                <h4 className='mt-4 font-semibold'>Data-Driven Approach</h4>
                                <p>
                                    We helped a local business increase their social media engagement by 300% within a year,
                                    leading.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rocket image positioned at the bottom-right corner */}
            <div
                className='absolute bottom-[0px] right-0'
                style={{ transform: 'translateX(-1%)' }}
            >
                <img className='w-56' src={rocket} alt="Rocket" />
            </div>
        </div>
    );
};

export default WhyChoose;
