import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import WhyChooseUs from '../whyChooseUs/WhyChooseUs';

const PriceTable = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="w-[80%] mx-auto px-4 py-10">
                <p className='flex justify-center text-blue-700'>
                    <GoDotFill className='text-2xl' /> Price Plans <GoDotFill className='text-2xl' />
                </p>
                <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-600 fugaz-one-regular">
                    Professional Web Development Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pricing Plans */}
                    {[
                        { name: "Basic", price: "$599", features: ["Custom Web Development (Up to 5 Pages)", "Mobile-Friendly Design", "Free Basic SEO Setup", "1 Month Free Maintenance"] },
                        { name: "Standard", price: "$1599", features: ["Custom Web Development (Up to 10 Pages)", "Advanced Responsive Design", "Free SEO Optimization", "3 Months Free Maintenance"] },
                        { name: "Premium", price: "$2999", features: ["Fully Custom Web Development (Unlimited Pages)", "Premium UX/UI Design", "SEO + Analytics Integration", "6 Months Free Maintenance"] }
                    ].map((plan, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg shadow-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-gray-600 mb-4">Best for {plan.name === "Basic" ? "startups" : plan.name === "Standard" ? "growing businesses" : "enterprises"}</p>
                            <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</p>
                            <ul className="mb-6 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => setShowModal(true)}
                                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
                <WhyChooseUs />
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] text-center">
                        <h3 className="text-xl font-bold mb-4 text-blue-600">We Are Working On It</h3>
                        <p className="text-gray-700 mb-4">Please submit your inquiry here</p>
                        <button 
                            onClick={() => navigate("/contact")}
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                        >
                            Contact Us
                        </button>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="block mt-4 text-gray-500 hover:text-gray-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PriceTable;
