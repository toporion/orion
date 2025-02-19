import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import sign from '../../assets/sign2.svg'

const SignUp = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [userToken, setUserToken] = useState('');
    const [userDiscount, setUserDiscount] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
const handleNavigateToLogin=()=>{
    navigate('/login')
}
 
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post('https://backendp-rho.vercel.app/api/signUp', data)
            .then((res) => {
                console.log(res.data);
                reset();
    
                const { token, discount } = res.data.data;
    
                if (token && discount) {
                    // Set token and discount if available
                    setUserToken(token);
                    setUserDiscount(discount);
    
                    // Show the modal only if an offer is active
                    setShowModal(true);
                } else {
                    // If no active offer, navigate to login directly
                    alert('Your account has been successfully created, but no active offers are available.');
                    navigate('/login');
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    alert('User already exists');
                } else {
                    alert('An error occurred. Please try again.');
                }
            });
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
        navigate('/login'); // Redirect to login page after closing the modal
    };

    const handleDownload = () => {
        const offerDetails = `
        Congratulations!
        Your account has been successfully created.

        Bonus Token: ${userToken}
        Discount Rate: ${userDiscount}%
        `;

        const blob = new Blob([offerDetails], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'OfferDetails.txt';
        link.click();
    };

    return (
        <div className="flex items-center justify-center p-4 w-full">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Side - Image with Text Overlay */}
                <div className="md:w-1/2 hidden md:flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 relative">
                    <img
                        src={sign}
                        alt="Sign Up"
                        className="object-cover w-full h-full"
                    />
                    {/* Text Overlay */}
                    {/* <div className="absolute fugaz-one-regular top-1/2 transform -translate-y-1/2 text-white text-4xl font-semibold bg-black bg-opacity-30 px-6 py-3 rounded-lg shadow-lg">
                        Create your future<br /> with us today!
                    </div> */}
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 bg-slate-200">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Create an Account
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-600 mb-1">Name</label>
                            <input
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                })}
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Other Options */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="text-blue-500 hover:underline"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal for Displaying Token and Discount */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-[500px] h-[440px] p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-purple-600">
                            🎉 Congratulations! 🎉
                        </h3>
                        <p className="text-lg text-gray-700 text-center mb-4">
                            Your account has been successfully created.
                        </p>
                        <p className="text-lg">
                            <strong>Bonus Token:</strong> {userToken}
                        </p>
                        <p className="text-lg mb-6">
                            <strong>Discount Rate:</strong> {userDiscount}%
                        </p>
                        <button
                            onClick={handleDownload}
                            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200 mb-3"
                        >
                            Download Offer
                        </button>
                        <button
                            onClick={handleCloseModal}
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 mb-3"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleNavigateToLogin}
                            className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-200"
                        >
                            Go to Login Page
                        </button>
                        <p>Note:Please download the offer ,Once you close you will never find the token number!!</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default SignUp;
