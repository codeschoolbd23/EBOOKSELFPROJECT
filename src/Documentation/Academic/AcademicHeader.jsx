import React from "react";
import { Link } from "react-router-dom";
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Eleven from './Eleven';
const AcademicHeader = () => {
  const AcademicClass = [
    
    { id: 4, name: "৪র্থ শ্রেণি", routClass:"/academic/Four",content: <Four /> },
    { id: 5, name: "৫ম শ্রেণি", routClass:"/academic/Five",content: <Five /> },
    { id: 6, name: "৬ষ্ঠ শ্রেণি", routClass:"/academic/Six",content: <Six /> },
    { id: 7, name: "৭ম শ্রেণি", routClass:"/academic/Seven",content: <Seven /> },
    { id: 8, name: "৮ম শ্রেণি", routClass:"/academic/Eight",content: <Eight /> },
    { id: 9, name: "৯ম শ্রেণি", routClass:"/academic/Nine",content: <Nine /> },
    { id: 10, name: "১০ম শ্রেণি", routClass:"/academic/Nine",content: <Nine /> },
    { id: 11, name: "একাদশ শ্রেণি", routClass:"/academic/Eleven",content: <Eleven /> },
    { id: 12, name: "দ্বাদশ শ্রেণি", routClass:"/academic/Twelve",content: <Eleven /> },
  ];
  
  const class_name =
    "mr-1 text-lg  border-b border-pink-600 rounded-full text-ghost font-thin  focus:text-white px-1 rounded-2xl focus:bg-blue-500  hover:bg-red-400";
  return (
      <div className="border-b border-purple-900/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              CLASSES:
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wider text-purple-300">
            {AcademicClass.map((classes) => (
              <Link
                to={`${classes?.routClass}`}
                key={classes.id}
                className={`${class_name} hover:text-blue-600 transition-colors duration-300`}
              >
                {classes.name}
              </Link>
            ))}
          </nav>
          <button className="px-5 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm tracking-wide uppercase shadow-[0_0_15px_rgba(219,39,119,0.5)] hover:shadow-[0_0_25px_rgba(219,39,119,0.8)] transition-all duration-300 border border-pink-400/30">
            Profile
          </button>
        </div>
      </div>
  );
};

export default AcademicHeader;
