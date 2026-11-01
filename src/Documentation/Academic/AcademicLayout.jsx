import React from 'react';
import { Outlet } from 'react-router';
import useTitle from '../../Utilities/Hook/useTitle';
import AcademicHeader from './AcademicHeader';
const AcademicLayout = () => {
  useTitle("একাডেমিক")
    return (
        <div  className="relative w-full">
          <AcademicHeader />
            <Outlet></Outlet>
        </div>
    );
};

export default AcademicLayout;