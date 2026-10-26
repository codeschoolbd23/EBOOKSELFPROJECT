import React from 'react';
import { Outlet } from 'react-router';
import useTitle from '../../Utilities/Hook/useTitle';
import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Navigation/Footer/Footer';
import AcademicHeader from './AcademicHeader';

const Academic = () => {
  useTitle("বিদ্যালয়")
    return (
      <div className="w-full aura aura-rainbow">
        <div className='w-full'>
          <Navbar />
          <AcademicHeader/>
          <div className="h-full w-full">
            <Outlet></Outlet>
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Academic;