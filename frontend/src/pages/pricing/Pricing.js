import React from 'react';
import PriceTable from '../../components/priceTable/PriceTable';
import price from '../../assets/pricing.jpg'
const Pricing = () => {
    return (
        <div>
            <div className="relative w-full">
                {/* Image */}
                <img src={price} alt="Pricing" className="w-full h-auto object-cover" />

                {/* Overlay Content (Shifted 40px to the right & added divider) */}
                <div className="absolute inset-0 flex items-center justify-center w-full translate-x-10">
                    {/* Left Text Area */}
                    <div className="w-[400px] text-white text-left pr-6">
                        <p className="text-4xl font-bold">Top Orion Pricing</p>
                        <p className="text-xl font-bold">
                            Affordable Custom Web Development Solutions
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-[100px] w-[2px] bg-white"></div>

                    {/* Right Pricing & Contact Section */}
                    <div className="p-4 rounded-lg shadow-md pl-6">
                        <p className="text-4xl font-bold text-white">Let's Connect</p>
                        <button className="btn btn-outline mt-2">Contact</button>
                    </div>
                </div>
            </div>
            <PriceTable />
        </div>
    );
};

export default Pricing;