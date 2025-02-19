import React from "react";
import { FaCode, FaPaintBrush, FaRocket, FaTools } from "react-icons/fa";
import service from "../../assets/service1.jpg";
import service2 from "../../assets/service12.png";
import WorkProcess from "../../components/workProcess/WorkProcess";
import { Link} from 'react-router-dom';

const services = [
    {
        title: "Custom Website Development",
        description: "Scalable, user-friendly, and fully responsive solutions.",
        icon: <FaCode className="text-4xl text-blue-600" />,
    },
    {
        title: "Website Design",
        description: "Creative and intuitive UI/UX for better engagement.",
        icon: <FaPaintBrush className="text-4xl text-green-600" />,
    },
    {
        title: "SEO & Performance Optimization",
        description: "Boost rankings and speed for a seamless experience.",
        icon: <FaRocket className="text-4xl text-purple-600" />,
    },
    {
        title: "Website Maintenance & Support",
        description: "Ensuring security, updates, and smooth functionality.",
        icon: <FaTools className="text-4xl text-red-600" />,
    },
];

const Services = () => {
    return (
        <div className="relative">
            {/* Hero Section with Overlay */}
            <div className="relative w-full">
                <img className="h-[500px] w-full object-cover" src={service} alt="Services" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-7xl font-bold">Services</h2>
                </div>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col md:flex-row gap-8 items-center  p-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative w-[385px] h-[400px] bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center text-center group transition-all duration-500"
                    >
                        {/* Hover Circles */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 scale-0 group-hover:scale-100 transition-all duration-500"></div>

                        {/* Service Content */}
                        <div className="relative z-10 flex flex-col  text-left gap-3">
                            {service.icon}
                            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white">{service.description}</p>
                            <Link to={'/contact'}><button className="mt-24 px-4 w-1/2 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                                Read More
                            </button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative w-full mb-6">
                {/* Background Image */}
                <div className="relative">
                    <img className="w-full h-[500px] object-cover" src={service2} alt="Contact Us" />
                    {/* Blue Overlay */}
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex flex-col items-center justify-center text-center text-white p-6">
                        <h2 className="text-4xl font-bold">CONTACT US</h2>
                        <p className="text-2xl mt-4">Need Any Kind Of Web  Solution For Your Business?</p>
                        <Link to={'/contact'}><button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                            Get In Touch
                        </button></Link>
                    </div>
                </div>
            </div>
            <WorkProcess/>
        </div>
    );
};

export default Services;
