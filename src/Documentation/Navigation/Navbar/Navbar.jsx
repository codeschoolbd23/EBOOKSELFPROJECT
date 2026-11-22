import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../../../assets/logo1.png";
import ThemeControler from '../../../Utilities/Theme/ThemeControler';
import Voice from '../../../Utilities/Voice/Voice';

const Navbar = () => { 
  const classCSS = "dropdown-content menu z-50 w-fit p-2";
  return (
    <div className="fixed top-0 z-50 bg-base-100 w-full">
      
        <div className="navbar">
          <div className="navbar-start">
            <Link to="/" className="flex items-center text-4xl font-black ">
              <img src={logo1} alt="Logo" className="h-14 w-18" />
              <span className="text-amber-400 ml-1">ই-বুক</span>
              <span className="text-fuchsia-400">//</span>
              <span className="text-green-500">সেলফ</span>
            </Link>
          </div>
          <div className="navbar-center text-2xl">
            <Voice />
          </div>
          <div className="navbar-end flex">
            <ul className="menu menu-horizontal flex-nowrap text-xl text-secondary">
              <li>
                <Link to="/academic"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()}
                >আমার শ্রেণি</Link>
              </li>
              {/* <li>
                <Link to="/circuller">জব সার্কুলার</Link>
              </li>

              <li className="dropdown dropdown-center">
                <Link to="/job" tabIndex={0} role="button">
                  জব বই
                </Link>
                <ul tabIndex={-1} className={`${classCSS}`}>
                  <li>
                    <Link to="/job">বিসিএস</Link>
                  </li>
                  <li>
                    <Link to="/job">ব্যাংক</Link>
                  </li>
                  <li>
                    <Link to="/job">শিক্ষক নিবন্ধন</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-center">
                <Link to="/other" tabIndex={0} role="button">
                  অন্যান্য
                </Link>
                <ul tabIndex={-1} className={classCSS}>
                  <li>
                    <Link to="/other">হেলথ</Link>
                  </li>
                  <li>
                    <Link to="/other">হসপিটাল</Link>
                  </li>
                  <li>
                    <Link to="/other">রোগ</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <ThemeControler />
              </li>
            </ul>
          </div>
        </div>
      
      <Link to="/aichat" role="btn" className="absolute right-0 top-100  flex">
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-warning hover:chat-bubble-primary w-20">
            ASK Me?
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;