import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
const AcademicHeader = () => {
  const SchoolClass = [
    
    { id: 4, name: "৪র্থ শ্রেণি", content: <Four /> },
    { id: 5, name: "৫ম শ্রেণি", content: <Five /> },
    { id: 6, name: "৬ষ্ঠ শ্রেণি", content: <Six /> },
    { id: 7, name: "৭ম শ্রেণি", content: <Seven /> },
    { id: 8, name: "৮ম শ্রেণি", content: <Eight /> },
    { id: 9, name: "৯ম শ্রেণি", content: <Nine /> },
    { id: 10, name: "১০ম শ্রেণি", content: <Nine /> },
  ];
  const [classID, setClassID] = useState(9);
  const moveClasses = (m) => {
    setClassID(m);
  };
  console.log(classID);
  const class_name =
    "m-1 text-sm text-primary border-b border-indigo-900 focus:text-white p-1 rounded-full focus:bg-blue-500 focus:border-blue-200 hover:border-blue-200 hover:bg-red-400 hover:text-center";
  return (
    <>
      <section className="w-full px-1">
        <div className="w-full md:px-5 mx-auto">
          {/* classes overview section */}
          <div className="flex justify-between w-full mx-auto flex-wrap md:flex-nowrap px-0 md:px-10">
            {SchoolClass.map((classes) => (
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
            {SchoolClass?.map((classes) => (
              <div className="w-full mx-auto text-xs" key={classes.id}>
                {Number(classes.id) === Number(classID) ? (
                  <>{classes?.content}</>
                ) : (
                  <div className="hidden">There is no class</div>
                )}
              </div>
            ))}
          </>
        </div>
      </section>
    </>
  );
};

export default AcademicHeader;
