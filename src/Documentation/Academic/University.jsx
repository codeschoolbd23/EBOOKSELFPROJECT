import React from 'react';
import { Outlet } from 'react-router';
import useTitle from '../../Utilities/Hook/useTitle';
import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Navigation/Footer/Footer';

const University = () => {
    useTitle("বিশ্ববিদ্যালয়")
    return (
        <div>
           <Navbar/>
           <div className='min-h-screen'><Outlet/></div>
           <Footer/>
        </div>
    );
};

export default University;