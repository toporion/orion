import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';

const DashBoard = () => {
    const [isPostManageOpen, setIsPostManageOpen] = useState(false);
    const [isOfferManageOpen, setIsOfferManageOpen] = useState(false);
    const {user,loading}=UseAuth()
    const navigate=useNavigate()

    if (loading) return <p>Loading...</p>;

    if (!user || user.role !== 'admin'){
        return navigate('/')
    }

    if(user || user.role === 'admin'){
        return navigate('/dashboard')
    }

    return (
        <div className='flex'>
            <div className='w-60 min-h-screen bg-slate-300 text-black font-semibold'>
                <Link to={"/dashboard"}><p className='text-xl'>Home</p></Link>

                {/* Post Manage Menu */}
                <div className="relative py-1">
                    <div 
                        className='flex items-center cursor-pointer'
                        onClick={() => setIsPostManageOpen(!isPostManageOpen)}
                    >
                        <p className='text-xl'>Post Manage</p>
                        <svg  
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-6 h-6 ml-2 transition-transform ${isPostManageOpen ? 'rotate-180' : ''}`} 
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {isPostManageOpen && (
                        <div className="absolute left-0 top-full bg-slate-300 p-2 rounded shadow-md w-full">
                            <Link to={"/dashboard/post"}><p className='text-xl hover:bg-slate-400 p-1 rounded cursor-pointer'>Create Post</p></Link>
                            <p className='text-xl hover:bg-slate-400 p-1 rounded cursor-pointer'>All Posts</p>
                        </div>
                    )}
                </div>

                {/* Offer Menu */}
                <div className="relative mt-2">
                    <div 
                        className='flex items-center cursor-pointer'
                        onClick={() => setIsOfferManageOpen(!isOfferManageOpen)}
                    >
                        <p className='text-xl'>Offer</p>
                        <svg  
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-6 h-6 ml-2 transition-transform ${isOfferManageOpen ? 'rotate-180' : ''}`} 
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {isOfferManageOpen && (
                        <div className="absolute left-0 top-full bg-slate-300 p-2 rounded shadow-md w-full">
                            <Link to={"/dashboard/offers"}><p className='text-xl hover:bg-slate-400 p-1 rounded cursor-pointer'>Active Offers</p></Link>
                            <Link to={"/dashboard/offer-create"}><p className='text-xl hover:bg-slate-400 p-1 rounded cursor-pointer'>Offer Create</p></Link>
                            <Link to={"/dashboard/users-with-offers"}><p className='text-xl hover:bg-slate-400 p-1 rounded cursor-pointer'>Users with Offers</p></Link>
                        </div>
                    )}
                </div>
                <Link to={"/dashboard/users"}><p className='text-xl py-2'>User Management</p></Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;
