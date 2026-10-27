import React, {  useState } from "react";
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
    
    { id: 4, name: "৪র্থ শ্রেণি", content: <Four /> },
    { id: 5, name: "৫ম শ্রেণি", content: <Five /> },
    { id: 6, name: "৬ষ্ঠ শ্রেণি", content: <Six /> },
    { id: 7, name: "৭ম শ্রেণি", content: <Seven /> },
    { id: 8, name: "৮ম শ্রেণি", content: <Eight /> },
    { id: 9, name: "৯ম শ্রেণি", content: <Nine /> },
    { id: 10, name: "১০ম শ্রেণি", content: <Nine /> },
    { id: 11, name: "একাদশ শ্রেণি", content: <Eleven /> },
    { id: 12, name: "দ্বাদশ শ্রেণি", content: <Eleven /> },
  ];
  const [classID, setClassID] = useState(9);
  const moveClasses = (m) => {
    setClassID(m);
  };
  console.log(classID);
  const class_name =
    "mr-1 text-sm text-ghost font-thin  focus:text-white px-1 rounded-2xl focus:bg-blue-500  hover:bg-red-400 hover:text-white";
  return (
    <>
          <div className="flex justify-center w-full mx-auto flex-wrap">
            {AcademicClass.map((classes) => (
              <Link
                key={classes.id}
                onClick={() => moveClasses(classes.id)}
                className={`${class_name}`}
              >
                {classes.name}
              </Link>
            ))}
          </div>
          <>
            {AcademicClass?.map((classes) => (
              <div className="w-full mx-auto text-xs" key={classes.id}>
                {Number(classes.id) === Number(classID) && <>{classes?.content}</>}
              </div>
            ))}
          </>   
    </>
  );
};

export default AcademicHeader;
