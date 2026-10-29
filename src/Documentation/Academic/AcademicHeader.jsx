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
    "mr-1 text-lg border-b border-pink-600 rounded-full text-ghost font-thin  focus:text-white px-1 rounded-2xl focus:bg-blue-500  hover:bg-red-400 hover:text-white";
  return (
    <>
          <div className="flex justify-center w-full mx-auto flex-wrap">
            {AcademicClass.map((classes) => (
              <Link to={`${classes?.routClass}`}
                key={classes.id}
                className={`${class_name}`}
              >
                {classes.name}
              </Link>
            ))}
          </div>
        
    </>
  );
};

export default AcademicHeader;
