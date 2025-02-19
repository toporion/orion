import React from 'react';
import whoWe from '../../assets/whatWedo1.jpg';
import whoWe2 from '../../assets/whatWedo2.jpg';
import { FaSquarePhone } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { LuCircleCheckBig } from "react-icons/lu";
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    return (
        <div className="w-full bg-[#ffffff]">
            <div className="w-full lg:w-[1168px] px-4 gap-8 flex flex-wrap lg:flex-nowrap justify-between mx-auto">
                {/* Images Section */}
                <div className="py-4 md:py-10 lg:py-20 flex gap-4 w-full lg:w-1/2">
                    <img className="w-1/2 object-cover rounded-lg" src={whoWe} alt="Who We Are 1" />
                    <img className="w-1/2 object-cover rounded-lg" src={whoWe2} alt="Who We Are 2" />
                </div>

                {/* Text Section */}
                <div className="py-4 md:py-10 lg:py-20 w-full lg:w-1/2 flex flex-col">
                    <p className="text-lg font-medium text-blue-600 flex items-center"><GoDotFill className='text-2xl' />Who We Are and What We Do<GoDotFill className='text-2xl' /></p>
                    <p className="text-3xl font-semibold text-black mt-4 fugaz-one-regular">
                        Infusing Passion into Web Development for Impactful Digital Solutions
                    </p>
                    <p className='mt-6'>At Top Orion, we infuse passion into our web development services, crafting impactful digital solutions that drive business growth and elevate user experiences..</p>
                    <div className='bg-slate-300 grid grid-cols-1 sm:grid-cols-2 text-left p-6 gap-4 mt-8 rounded-lg'>
                        <p className='flex items-center gap-1 text-black'><LuCircleCheckBig className='text-xl text-blue-600' />Custom Website Development</p>
                        <p className='flex items-center gap-1 text-black'><LuCircleCheckBig className='text-xl text-blue-600' />Web Application Development</p>
                        <p className='flex items-center gap-1 text-black'><LuCircleCheckBig className='text-xl text-blue-600' />E-commerce Website</p>
                        <p className='flex items-center gap-1 text-black'><LuCircleCheckBig className='text-xl text-blue-600' />Responsive Web Design</p>
                    </div>
                    <div className='mt-10 flex flex-col sm:flex-row gap-6 sm:gap-14 items-center sm:items-start'>
                        <Link to={"/contact"}><button className='bg-blue-600 px-6 py-3 rounded-full text-white'>Contact us</button></Link>
                        <div className='flex items-center gap-4'>
                        <Link to={"https://call.whatsapp.com/voice/CqhgHnldbDVFkXkSyvM6vW"}><FaSquarePhone className='text-5xl text-blue-600' /></Link>
                            <div className='text-black'>
                                <p>Call now</p>
                                <p className=''> +88017-525-296-02</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
