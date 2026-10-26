import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Navigation/Footer/Footer";
const Layout = () => {
  return (
    <div className="w-full">
     <Navbar />
      <div className="h-full">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
