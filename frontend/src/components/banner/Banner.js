import React from 'react';
import { useForm } from 'react-hook-form';
import banner from '../../assets/banner.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://backendp-rho.vercel.app/api/signUp", data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                // Check if error is an AxiosError and if the status code is 400
                if (error.response && error.response.status === 400) {
                    alert("User already exists");
                } else {
                    alert("An error occurred. Please try again.");
                }
            });
    };

    return (
        <div
            className="relative w-full h-[500px] lg:h-[600px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Banner Text start */}
            <div className="w-full lg:w-1/2 px-6 lg:px-12 text-center lg:text-left hidden sm:block">
                <p className="text-4xl lg:text-6xl font-bold text-white saira-stencil-one-regular mb-4">Website That Works For
                    Your Business
                </p>
                <p className="text-white tenali-ramakrishna-regular text-lg lg:text-2xl mb-6">Top Orion delivers custom website development, optimizing design and content to boost visibility and drive organic traffic.</p>
                <Link to={'/contact'}><button className="px-6 py-4 rounded-md bg-yellow-500 hover:bg-white border-none text-black text-lg lg:text-xl">Let's Start</button></Link>
            </div>
            {/* Banner Text End */}

            {/* Lead Form */}
            <div
                className="absolute top-1/2 right-8 transform -translate-y-1/2 w-80 p-6 rounded-lg bg-white/30 backdrop-blur-md shadow-lg text-gray-800"
            >
                <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input
                            id="name"
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>



                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="w-full text-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Banner;
