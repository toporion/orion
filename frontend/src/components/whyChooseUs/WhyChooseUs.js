import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import choose from "../../assets/Why choose.jpg";
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    return (
        <div className="px-4 py-6">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-6">
                {/* Text Content */}
                <div className="w-full md:w-3/5">
                    <p className="text-xl font-semibold text-blue-600">Why Choose Us?</p>
                    <p className="text-3xl font-bold text-black mb-4">
                        We don’t just build websites—we create powerful digital
                        <span className="text-purple-500 md:bg-gradient-to-r md:from-purple-500 md:to-pink-500 bg-clip-text md:text-transparent font-extrabold block md:inline">
                            experiences that drive results.
                        </span>
                    </p>
                    <p className="text-black mb-4">Here’s why businesses trust us:</p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Innovative & Scalable Solutions – Future-proof websites tailored to grow with your business.",
                            "User-Centric Design – Seamless, engaging, and conversion-focused UI/UX.",
                            "Cutting-Edge Technologies – Modern frameworks, optimized performance, and secure coding.",
                            "SEO & Speed Optimized – Higher rankings, faster load times, better user experience.",
                            "Reliable Support & Maintenance – We ensure your website stays updated and secure.",
                            "Client-Focused Approach – Your vision, our expertise—crafted with precision."
                        ].map((text, index) => (
                            <p key={index} className="flex items-center text-black">
                                <GiCheckMark className="text-2xl text-blue-700 mr-2" /> {text}
                            </p>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link to={'/contact'}><button className="btn btn-outline mt-4">Let's Talk</button></Link>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <img className="rounded-2xl drop-shadow-2xl shadow-lg w-full max-w-md md:max-w-full" src={choose} alt="Why Choose Us" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
