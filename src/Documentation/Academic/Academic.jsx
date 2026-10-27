import React from 'react';
import { Outlet } from 'react-router';
import useTitle from '../../Utilities/Hook/useTitle';
import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Navigation/Footer/Footer';
import AcademicHeader from './AcademicHeader';
const Academic = () => {
  useTitle("একাডেমিক")
    return (
        <div className="relative w-full">
          <Navbar />
          <AcademicHeader />
            <Outlet></Outlet>
          <Footer />
        </div>
    );
};

export default Academic;