import React from "react";
import { Link } from "react-router-dom";
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Eleven from './Eleven';
import One from "./One";
import Two from "./Two";
import Three from "./Three";
const AcademicHeader = () => {
  const AcademicClass = [
    
    { id: 1, name: "প্রথম শ্রেণি", routClass:"/academic/One",content: <One /> },
    { id: 2, name: "দ্বিতীয় শ্রেণি", routClass:"/academic/Two",content: <Two/> },
    { id: 3, name: "তৃতীয় শ্রেণি", routClass:"/academic/Three",content: <Three /> },
    { id: 4, name: "চতুর্থ শ্রেণি", routClass:"/academic/Four",content: <Four /> },
    { id: 5, name: "পঞ্চম শ্রেণি", routClass:"/academic/Five",content: <Five /> },
    { id: 6, name: "ষষ্ঠ শ্রেণি", routClass:"/academic/Six",content: <Six /> },
    { id: 7, name: "সপ্তম শ্রেণি", routClass:"/academic/Seven",content: <Seven /> },
    { id: 8, name: "অষ্টম শ্রেণি", routClass:"/academic/Eight",content: <Eight /> },
    { id: 9, name: "নবম শ্রেণি", routClass:"/academic/Nine",content: <Nine /> },
    { id: 10, name: "দশম শ্রেণি", routClass:"/academic/Nine",content: <Nine /> },
    { id: 11, name: "একাদশ শ্রেণি", routClass:"/academic/Eleven",content: <Eleven /> },
    { id: 12, name: "দ্বাদশ শ্রেণি", routClass:"/academic/Twelve",content: <Eleven /> },
  ];
  
  const class_name =
    "text-lg border-b border-pink-600 rounded-full font-black focus:text-white px-1 focus:bg-blue-500  hover:bg-red-400";
  return (
    <div className="sticky top-21 z-40 bg-slate-950/98 p-1">
      <div className="mx-auto flex items-center justify-center">
        <nav className="flex font-black tracking-wider gap-1">
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
        {/* <button className="px-5 py-2 rounded-md bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold text-sm tracking-wide uppercase shadow-[0_0_15px_rgba(219,39,119,0.5)] hover:shadow-[0_0_25px_rgba(219,39,119,0.8)] transition-all duration-300 border border-pink-400/30">
          Profile
        </button> */}
      </div>
    </div>
  );
};

export default AcademicHeader;
