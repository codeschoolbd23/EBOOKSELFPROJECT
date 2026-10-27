import React from 'react';
import { Outlet } from 'react-router';
import useTitle from '../../Utilities/Hook/useTitle';
import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Navigation/Footer/Footer';
import AcademicHeader from './AcademicHeader';

const Academic = () => {
  useTitle("একাডেমিক")
    return (
      <div className="container">
        <div className="relative container shadow-0">
          <Navbar />
          <AcademicHeader />
          <div className="h-full w-full">
            <Outlet></Outlet>
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Academic;