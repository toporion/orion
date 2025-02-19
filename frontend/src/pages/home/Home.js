import React from 'react';
import { useInView } from 'react-intersection-observer';
import Banner from '../../components/banner/Banner';
import ServiceTab from '../../components/serviceTab/ServiceTab';
import WhoWeAre from '../../components/whoWeAre/WhoWeAre';
import Blogs from '../../components/blogs/Blogs';
import OurProjects from '../../components/ourProjects/OurProjects';
import Stat from '../../components/stat/Stat';
import WhyChoose from '../../components/whyChoose/WhyChoose';
import Team from '../../components/team/Team';
import PriceTable from '../../components/priceTable/PriceTable';
import Faq from '../../components/faq/Faq';
import FreeTry from '../../components/freeTry/FreeTry';
import News from '../../components/news/News';

const LazyLoadComponent = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the component is visible
        triggerOnce: true, // Trigger only once
    });

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </div>
    );
};

const Home = () => {
    return (
        <div className="bg-white">
            {/* Navbar and Banner - Always visible */}
            <Banner />

            {/* Lazy-loaded components below the fold */}
            <LazyLoadComponent><ServiceTab /></LazyLoadComponent>
            <LazyLoadComponent><WhoWeAre /></LazyLoadComponent>
            <LazyLoadComponent><Blogs /></LazyLoadComponent>
            <LazyLoadComponent><OurProjects /></LazyLoadComponent>
            <LazyLoadComponent><Stat /></LazyLoadComponent>
            <LazyLoadComponent><WhyChoose /></LazyLoadComponent>
            <LazyLoadComponent><Team /></LazyLoadComponent>
            {/* <LazyLoadComponent><PriceTable /></LazyLoadComponent> */}
            <LazyLoadComponent><Faq /></LazyLoadComponent>
            <LazyLoadComponent><FreeTry /></LazyLoadComponent>
            <LazyLoadComponent><News /></LazyLoadComponent>
        </div>
    );
};

export default Home;
