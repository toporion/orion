import React from 'react';
import { IoCall } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../hook/UseAuth';

const NavBarTop = () => {
    const { isAuthenticated, handleSignOut, user } = UseAuth();
    const navigate = useNavigate();

    const onSignOut = async () => {
        await handleSignOut();
        navigate('/login');
    };

    return (
        <div>
            <div className='flex justify-between bg-black p-2'>
                <div className='hidden lg:flex gap-8'>
                    <p className='flex items-center text-white'><IoCall />+8801752529602</p>
                    <p className='flex items-center text-white'><CiLocationOn />Road-2,Nikunja-2,Khilkhet,Dhaka</p>
                    <p className='flex items-center text-white'><AiOutlineMail />info@toporion.net</p>
                </div>
                <div className='flex items-center gap-2 text-white'>
                    {isAuthenticated ? (
                        <Link onClick={onSignOut}>
                            <p className='font-semibold cursor-pointer'>Sign Out</p>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <p className='font-semibold cursor-pointer'>Sign In</p>
                        </Link>
                    )}

                    <div><p className='font-bold'>Follow us on:</p></div>
                    <div className='flex gap-2 text-xl'>
                        <Link to={'https://www.facebook.com/toporionNew'}><FaFacebookSquare /></Link>
                        <Link to={'https://www.linkedin.com/in/toporionbd/'}><FaLinkedin /></Link>
                        <Link to={'https://x.com/toporionbd'}><FaXTwitter /></Link>
                        <Link to={'https://www.instagram.com/toporionnew'}> <FaInstagramSquare /> </Link>
                        <Link to={'https://www.pinterest.com/toporionbd'}> <FaPinterestSquare /> </Link>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBarTop;
