import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './../../Navigation/Navbar/Navbar';
import Footer from './../../Navigation/Footer/Footer';


const Others = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Others;