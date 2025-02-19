import React from "react";
import about from "../../assets/about.jpg";
import CountUp from "react-countup";
import pic from '../../assets/pro-1.jpg';
import salman from '../../assets/owner.png';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <img className="h-[500px] object-cover w-full" src={about} alt="About Us" />

            {/* Overlay Text Container */}
            <div className="absolute top-[8%] md:top-[12%] left-6 md:left-10 transform -translate-y-[50%] text-white p-4 md:p-6 rounded-lg max-w-md">



                <p className="text-lg font-semibold">Wanna learn who we are?</p>
                <p className="text-4xl font-bold mt-2 leading-tight md:leading-normal">
                    Get a chance to know about us and <br />
                    <span className="text-purple-500 md:bg-gradient-to-r md:from-purple-500 md:to-pink-500 bg-clip-text md:text-transparent font-extrabold block md:inline">
                        Relive our journey
                    </span>
                </p>

                <p className="mt-2 font-bold bg-green-800 bg-opacity-30 rounded-xl p-2">
                    Meet our dynamic team and discover the roadmap to success as we will let you know how we work
                </p>
                <Link to={'/contact'}><button className="btn btn-outline mt-4">Let's Talk</button></Link>
            </div>

            {/* Stats Counter Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-6 md:p-10 bg-gray-100">
                <StatCard title="Total Visitors" value={23000} />
                <StatCard title="Total Customers" value={400} />
                <StatCard title="Satisfaction Rate" value={98} suffix="%" />
                <StatCard title="Projects Completed" value={520} />
            </div>

            {/* About Our Values Section */}
            <div className="px-4 md:px-10 py-6">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="md:w-[40%]">
                        <p className="text-xl mb-4 font-bold text-blue-700">About Our Values</p>
                        <p className="text-black break-all">At Top Orion, we are a leading web development agency specializing in custom website development and fitness website design. With over 5 years of experience, we deliver high-performance websites that enhance brand presence and user engagement. Our mission is to provide top-tier web development services tailored to help businesses grow and succeed in the digital world.</p>
                        <div className="mt-6 md:mt-10">
                            <p className="text-xl text-blue-700 font-bold">Our Goal</p>
                            <p className="text-black">Our goal is to be the go-to web development agency for businesses looking to establish a strong online presence. Whether you need a fitness website design, a corporate site, or a custom-built platform, we are here to turn ideas into reality.</p>
                        </div>
                    </div>
                    <div className="md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ValueCard title="Integrity" text="We believe in honest, transparent, and ethical practices. Our team ensures that every project is handled with integrity, delivering custom website development solutions that align with our clients' needs." />
                        <ValueCard title="Commitment" text="As a dedicated web development agency, we go the extra mile to turn your vision into reality. From planning to execution, we stay committed to delivering exceptional web development services that drive results." />
                        <ValueCard title="Passion" text="Web development is more than just coding—it’s our passion. We take pride in designing fitness websites, business platforms, and eCommerce solutions that are both visually appealing and functionally powerful." />
                        <ValueCard title="Teamwork" text="Collaboration is key to delivering exceptional results. At Top Orion, we work closely with our clients, combining creativity and technical expertise to develop custom website development solutions that stand out." />

                    </div>

                </div>


            </div>

            {/* Our Journey Section */}
            <div className="text-center mt-10">
                <p className="text-xl text-sky-600">Our Journey</p>
                <p className="text-4xl font-bold text-black">Come join us on our journey <br /><span className="text-purple-500 md:bg-gradient-to-r md:from-purple-500 md:to-pink-500 bg-clip-text md:text-transparent font-extrabold block md:inline">to grow your business</span></p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-10 mt-6">
                <div className="md:w-[60%]">
                    <p className="text-black"> At Top Orion, we partner with you to build powerful, results-driven websites tailored to your brand's needs. Our expertise in custom website development and web development services ensures your digital presence thrives. Together, we'll elevate your business to new heights with innovative solutions that drive growth and success.</p>
                </div>
                <div className="w-full md:w-[40%]">
                    <img className="w-full rounded-lg" src={pic} alt="Our Journey" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto ">
                <p className="text-4xl font-bold text-black text-center mt-6 mb-6">Meet our <span className="text-purple-500 md:bg-gradient-to-r md:from-purple-500 md:to-pink-500 bg-clip-text md:text-transparent font-extrabold block md:inline">inspiring CEO</span> </p>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="relative w-fit ">
                        {/* Gradient Background */}
                        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative mt-6 ">
                            {/* Image with Overlapping Top */}
                            <img
                                src={salman}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 object-cover rounded-full"
                                alt="Salman"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-[60%]">
                        <p className="text-blue-600 mb-2">Salman Haider</p>
                        <div className="flex gap-4 mb-2 text-2xl text-blue-700">
                            <FaFacebook />
                            <FaLinkedin />
                            <FaInstagram />
                        </div>
                        <p className="text-black">A visionary leader with a passion for technology and innovation. With over 5 years of experience in the web development industry, our CEO drives Top Orion's mission to deliver custom website development solutions that help businesses succeed online. Their commitment to excellence and dedication to clients have shaped the company into a trusted web development agency. Under their leadership, we continue to create impactful, user-centered digital experiences.</p>
                    </div>
                </div>
            </div>
            <WhyChooseUs/>
        </div>
    );
};

const StatCard = ({ title, value, suffix = "" }) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-3xl font-bold text-blue-600">
                <CountUp start={0} end={value} duration={3} separator="," />{suffix}
            </p>
        </div>
    );
};

const ValueCard = ({ title, text }) => {
    return (
        <div>
            <p className="text-xl text-blue-700">{title}</p>
            <p className="text-black">{text}</p>
        </div>
    );
};

export default AboutUs;