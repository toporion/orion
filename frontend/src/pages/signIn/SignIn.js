import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import UseAuth from '../../hook/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/socialLogin/SocialLogin';

const SignIn = () => {
    const { signIn, googleSign,user } = UseAuth();
    console.log('see user from login page',user)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('https://backendp-rho.vercel.app/api/login', data);
            console.log('see users info',res.data)
            const { jwtToken } = res.data;

            // Save the token and navigate to the intended page
            signIn(jwtToken);
            
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSign();
            if (result.user) {
                navigate(from, { replace: true });
            }
        } catch (error) {
            console.error('Google Sign-In failed', error);
        }
    };

    return (
        <div className="flex items-center justify-center p-4 w-full">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Side - Image with Text Overlay */}
                <div className="md:w-1/2 hidden md:flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 relative">
                    <img
                        src="https://i.ibb.co/WWmT9WV/smallto-big.jpg"
                        alt="Sign Up"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute fugaz-one-regular top-1/2 transform -translate-y-1/2 text-white text-4xl font-semibold bg-black bg-opacity-30 px-6 py-3 rounded-lg shadow-lg">
                        Create your future<br /> with us today!
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 p-8 bg-slate-200">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Log In
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                            Log In
                        </button>
                    </form>

                    {/* Other Options */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                to="/signUp"
                                className="text-blue-500 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                        <p className="text-gray-600 mt-2">
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </p>
                    </div>

                    {/* Sign in with Google */}
                    <div className="mt-6 flex items-center justify-center">
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
                        >
                            <FcGoogle size={24} className="mr-2" />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
