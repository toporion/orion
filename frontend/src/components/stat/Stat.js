import React from 'react';

const Stat = () => {
    return (
        <div className='w-full mt-8 overflow-hidden'>
            <div className='max-w-[1108px] mx-auto'>
                <div className="stats shadow w-full bg-slate-500 text-black  rounded-lg overflow-hidden transition-all duration-300">
                    <div className="stat w-1/2 text-base text-center relative group">
                        <div className="stat-figure text-secondary"></div>
                        <div className="stat-value">31K+</div>
                        <div className="stat-title text-black ">Customers Visit Every Month</div>
                    </div>

                    <div className="stat w-1/2 text-base text-black text-center relative group">
                        <div className="stat-figure text-secondary"></div>
                        <div className="stat-value">12K+</div>
                        <div className="stat-title text-black ">Total Members of Top Orion</div>
                    </div>

                    <div className="stat w-1/2 text-base text-center relative group">
                        <div className="stat-figure text-secondary"></div>
                        <div className="stat-value">102K+</div>
                        <div className="stat-title text-black ">Total Visitors Of Top Orion</div>
                    </div>

                    <div className="stat w-1/2 text-base text-center relative group">
                        <div className="stat-figure text-secondary"></div>
                        <div className="stat-value">97%</div>
                        <div className="stat-title text-black ">Satisfaction rate from our customers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;
