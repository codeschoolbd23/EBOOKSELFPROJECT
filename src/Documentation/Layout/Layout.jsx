import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Navigation/Footer/Footer";
const Layout = () => {
  return (
    <div className="container m-0 p-0 border-0">
     <Navbar />
      <div className="container h-full m-0 border-0 p-0">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
