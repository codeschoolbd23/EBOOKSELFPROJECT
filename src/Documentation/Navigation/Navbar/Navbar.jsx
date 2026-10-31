import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import ThemeControler from '../../../Utilities/Theme/ThemeControler';
import Voice from '../../../Utilities/Voice/Voice';
// import Voice from '../../../Utilities/Voice/Voice';
// import Search from '../../../Utilities/search/Search';
const Navbar = () => { 
  const classCSS = "dropdown-content menu bg-fuchsia-500 z-1 w-fit p-2";
  return (
    <div className="sticky top-0 border-b border-purple-900/20 bg-slate-950/80 backdrop-blur-md z-50 ">
      <div className="bg-slate-950 text-purple-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden relative">
        <div className="collapse-title navbar">
          {/* Synthwave Retro Sun & Grid Background Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0)_60%,rgba(219,39,119,0.1)_100%)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2  bg-linear-to-b from-pink-600 to-amber-500 rounded-full blur-[120px] opacity-20 pointer-events-none" />
          <div className="navbar-start">
            <Link
              to="/"
              className="flex items-center text-4xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-pink-500 to-purple-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            >
              <img src={logo1} alt="Logo" className="h-16 w-18" />
              <span className="text-amber-400 ml-1">ই-বুক</span>
              <span className="text-fuchsia-400">//</span>
              <span className="text-green-300">সেলফ</span>
            </Link>
          </div>
          <div className="navbar-center text-2xl text-pink-200">
            <Voice/>
          </div>
          <div className="navbar-end flex">
            <ul className="menu menu-horizontal flex-nowrap text-2xl text-primary">
              <li>
                <Link to="/academic">একাডেমিক বই</Link>
              </li>

              <li className="dropdown dropdown-center">
                <Link to="/job" tabIndex={0} role="button">
                  জব
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
              </li>
              <li>
                <ThemeControler />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link
        to="/aichat"
        role="btn"
        className="absolute right-0 top-100 bottom-0 flex"
      >
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