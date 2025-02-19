import React, { useState } from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const NavBarMain = () => {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuVisible((prev) => !prev);
    };

    const hideSubmenu = () => {
        setIsSubmenuVisible(false);
    };

    const links = (
        <>
            <li>
                <Link to={"/"}><a className="hover:text-blue-500">Home</a></Link>
            </li>

            <li>
                <Link to={"/about"}><a className="hover:text-blue-500">About Us</a></Link>
            </li>
            <li>
                <Link to={"/services"}><a className="hover:text-blue-500">Services</a></Link>
            </li>
            <li>
                <Link to={"/blog"} className="hover:text-blue-500">Blog</Link>
            </li>

            <li>
                <Link to={"/contact"}><a className="hover:text-blue-500">Contact Us</a></Link>
            </li>
            <li>
                <Link to={"/price"}><a className="hover:text-blue-500">Pricing </a></Link>
            </li>
        </>
    );

    return (
        <div className="bg-white text-black font-semibold drop-shadow-sm z-30 relative">
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <img className="w-12" src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="https://www.toporionbd.com"
                        className="btn w-[70%] rounded-full bg-[#1A47E7] border-none text-white text-[15px]"
                    >
                        Call Us: +8801 752 529 602
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBarMain;
