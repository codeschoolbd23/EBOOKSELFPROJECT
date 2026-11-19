import React from "react";
import { Link, Outlet } from "react-router-dom";
const AcademicHeader = () => {
  const AcademicClass = [
    { id: 1, name: "প্রথম শ্রেণি", routClass:"/academic/One" },
    { id: 2, name: "দ্বিতীয় শ্রেণি", routClass:"/academic/Two" },
    { id: 3, name: "তৃতীয় শ্রেণি", routClass:"/academic/Three" },
    { id: 4, name: "চতুর্থ শ্রেণি", routClass:"/academic/Four" },
    { id: 5, name: "পঞ্চম শ্রেণি", routClass:"/academic/Five" },
    { id: 6, name: "ষষ্ঠ শ্রেণি", routClass:"/academic/Six" },
    { id: 7, name: "সপ্তম শ্রেণি", routClass:"/academic/Seven" },
    { id: 8, name: "অষ্টম শ্রেণি", routClass:"/academic/Eight" },
    { id: 9, name: "নবম শ্রেণি", routClass:"/academic/Nine" },
    { id: 10, name: "দশম শ্রেণি", routClass:"/academic/Nine" },
    { id: 11, name: "একাদশ শ্রেণি", routClass:"/academic/Eleven" },
    { id: 12, name: "দ্বাদশ শ্রেণি", routClass:"/academic/Twelve" },
  ];
  return (
    <>
      <div className="sticky top-20 z-40  p-1 bg-base-100">
        <div className="mx-auto flex items-center justify-center">
          <nav className="flex tracking-wider gap-1">
            
            {AcademicClass?.map((classes) => (
              <Link
                to={`${classes?.routClass}`}
                key={classes?.id}
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className={`btn btn-sm btn-outline btn-primary focus:text-orange-600 transition-colors duration-300 text-shadow-primary-content`}
              >
                {classes?.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="w-full min-h-150 bg-base-100">
        <Outlet />
      </div>
    </>
  );
};

export default AcademicHeader;
