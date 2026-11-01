import React from 'react';
import Navbar from '../../Documentation/Navigation/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Documentation/Navigation/Footer/Footer';
// import { useLocation } from "react-router-dom";
const Search = () => {
    return (
      <div >
        <div className="w-full min-h-100 flex flex-col justify-center items-center">
          <Outlet />
        </div>
      </div>
    );
};

export default Search;