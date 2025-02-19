import React from 'react';
import { useForm } from 'react-hook-form';
import { GoDotFill } from 'react-icons/go';
import light from '../../assets/light.png';
import axios from 'axios';

const FreeTry = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        // Await the axios request to get the response properly
        const res = await axios.post('https://backendp-rho.vercel.app/api/mockUp', data);

        // Now you can safely log the response data
        console.log(res.data);
        reset()
        return res.data;

    };

    return (
        <div className='w-full'>
            <div className='w-[80%] mx-auto bg-slate-200 py-20 rounded-md p-2'>
                <div className='px-8'>
                    <p className='flex items-center text-blue-500'>
                        <GoDotFill className='text-2xl text-blue-600' />Contact Us
                        <GoDotFill className='text-2xl text-blue-500' />
                    </p>
                    <p className='text-3xl font-semibold text-black fugaz-one-regular'>Free Trial Available Now</p>
                    <div className='flex flex-col lg:flex-row items-center gap-6'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='bg-white p-10 flex flex-col lg:flex-row gap-4 rounded-md'>
                                    <div className='w-full lg:w-[50%]'>
                                        <div>
                                            <input
                                                type='text'
                                                placeholder='Name'
                                                {...register('name', { required: 'Name is required' })}
                                                className='outline-none border bg-slate-50 w-full mb-2 py-2 rounded-md px-2'
                                            />
                                            {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type='email'
                                                placeholder='Email'
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' }
                                                })}
                                                className='outline-none border bg-slate-50 w-full rounded-md py-2 px-2'
                                            />
                                            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                                        </div>
                                    </div>
                                    <div className='w-full lg:w-[50%]'>
                                        <textarea
                                            {...register('message', { required: 'Message is required' })}
                                            className='w-full bg-slate-50 border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500'
                                            rows='3'
                                            placeholder='Write your message'
                                        ></textarea>
                                        {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
                                        <button type='submit' className='bg-blue-600 w-full py-1 rounded-2xl text-white font-semibold mt-2'>
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <img className='w-full lg:w-4/6 rounded-xl' src={light} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTry;
