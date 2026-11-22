import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const AcademicClass = [
  { id: 1, name: "প্রথম শ্রেণি", routClass: "/academic/One" },
  { id: 2, name: "দ্বিতীয় শ্রেণি", routClass: "/academic/Two" },
  { id: 3, name: "তৃতীয় শ্রেণি", routClass: "/academic/Three" },
  { id: 4, name: "চতুর্থ শ্রেণি", routClass: "/academic/Four" },
  { id: 5, name: "পঞ্চম শ্রেণি", routClass: "/academic/Five" },
  { id: 6, name: "ষষ্ঠ শ্রেণি", routClass: "/academic/Six" },
  { id: 7, name: "সপ্তম শ্রেণি", routClass: "/academic/Seven" },
  { id: 8, name: "অষ্টম শ্রেণি", routClass: "/academic/Eight" },
  { id: 9, name: "নবম শ্রেণি", routClass: "/academic/Nine" },
  { id: 10, name: "দশম শ্রেণি", routClass: "/academic/Ten" },
  { id: 11, name: "একাদশ শ্রেণি", routClass: "/academic/Eleven" },
  { id: 12, name: "দ্বাদশ শ্রেণি", routClass: "/academic/Twelve" },
];
const ClassNameModal = () => {
    return (
      <div>
        <div className="bg-base-100 w-full">
          <dialog
            id="my_modal_4"
            className="modal modal-start text-primary-content w-full"
          >
            <div className="modal-box rounded-none w-full h-3/4 bg-base-100 text-primary-content flex flex-col">
              <Link
                to="/"
                className="btn w-fit btn-outline btn-primary focus:text-red-600 transition-colors duration-300 m-1"
              >
                <FaHome /> Home
              </Link>
              <div className="grid grid-cols-4 gap-1 m-20">
                {AcademicClass?.map((classes) => (
                  <Link
                    className="btn btn-outline btn-primary focus:text-red-600 transition-colors duration-300 m-1"
                    key={classes?.id}
                    to={classes?.routClass}
                  >
                    {classes?.name}
                  </Link>
                ))}
              </div>
              <div className="modal-action w-full flex justify-center items-center">
                <form method="dialog">
                  <button className="btn btn-outline btn-primary focus:text-red-600 transition-colors duration-300 m-1">
                    বন্ধ করুন
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {/* </div> */}
      </div>
    );
};

export default ClassNameModal;