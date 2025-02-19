import React from 'react';
import { useForm } from "react-hook-form";
import hero from "../../assets/fea.png"
import { FaPhoneSquareAlt, FaSkype } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";
import { MdMarkEmailRead } from 'react-icons/md';
import axios from 'axios';
const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Message sent successfully!");
        axios.post('https://backendp-rho.vercel.app/api/contact',data)
        .then(res=>{
            console.log(res.data)
            reset()
        })
    };
    return (
        <div className='w-full'>
            <div className='flex flex-col-reverse lg:flex-row bg-gradient-to-r from-slate-100 to-slate-500 justify-between'>
                <div><img src={hero} alt="" /></div>
                <div className='w-full lg:w-[60%]'>
                    <div className="flex justify-end items-center py-4 px-4 ">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                                Contact Us
                            </h2>

                            {/* Name Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: "Name is required" })}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 font-medium mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email",
                                        },
                                    })}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 font-medium mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    {...register("message", { required: "Message is required" })}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"
                                        }`}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* flex box contact info */}
                    <div className='flex flex-col lg:flex-row px-4 gap-4 text-center items-center  w-full justify-end'>
                        <div className='w-full lg:w-[200px] h-[100px] bg-orange-400 text-black rounded-xl drop-shadow-md shadow-md'>
                            <p>Call Us</p>
                            <p className='flex items-center ml-2'><FaPhoneSquareAlt className='text-2xl text-blue-900' />+880-175-2529-602</p>
                            <p className='flex items-center ml-2'><FaPhoneSquareAlt className='text-2xl text-blue-900' />+880-197-2529-602</p>
                        </div>
                        <div className=' w-full lg:w-[200px] h-[100px] bg-orange-400 text-black rounded-xl drop-shadow-md shadow-md'>
                            <p>Locations</p>
                            <p className='flex '><IoLocationSharp className='text-3xl text-blue-800' />ka,160/2,khilkhet,Dhaka-1200,Bangladesh</p>
                        </div>
                        <div className='w-full lg:w-[200px] h-[100px] bg-orange-400 text-black rounded-xl drop-shadow-md shadow-md'>
                            
                            <p className=' flex items-center justify-center text-center px-4 gap-2' > 24/7 </p>
                            <p className='flex items-center '><FaSkype className='text-2xl text-blue-800'/>  salman.rokon</p>
                            <p className='flex items-center '><MdMarkEmailRead className='text-2xl text-blue-800'/>  rokon@toporionbd.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;