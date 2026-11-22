import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Navigation/Footer/Footer";
const Layout = () => {       
  return (
    <div className="w-full min-h-screen bg-base-100">
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Layout;
