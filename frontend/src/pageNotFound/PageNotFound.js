import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='min-h-screen bg-slate-200'>
            <p className='text-7xl text-center'>404 Page Not found <br/><Link to={"/"}><button className='btn btn-secondary px-8 text-4xl'>Home</button></Link></p>
        </div>
    );
};

export default PageNotFound;
