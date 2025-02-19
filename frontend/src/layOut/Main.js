import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarMain from '../components/navBarMain/NavBarMain';
import NavBarTop from '../components/navBarTop/NavBarTop';
import Footer from '../pages/footer/Footer';

const Main = () => {
    return (
        <div className='bg-white'>
            <NavBarTop/>
            <NavBarMain/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;