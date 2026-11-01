import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './../../Navigation/Navbar/Navbar';
import Footer from '../../Navigation/Footer/Footer';

const Jobs = () => {
    return (
        <div>
            <Navbar/>
            <div className=''><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Jobs;