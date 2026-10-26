import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useTitle from "../Utilities/Hook/useTitle";
import Contact from "../Documentation/Shared/Contact/Contact";
const FourZeroFour = () => {
  useTitle("404");
  return (
    <div>
      <div className="flex items-center justify-center min-h-96 bg-base-100 skeleton rounded-none">
        <div className="flex-col space-y-4 text-left px-6">
          <div className="text-7xl font-bold text-yellow-700">404</div>
          <div className="text-red-700 font-medium">
            Oops, you still haven't found what you lookng for?
          </div>
          <div className="flex space-x-4 items-center justify-start">
            <Link to="/">
              <div className="bg-blue-700 px-2 py-1  font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer">
                <FaHome />
              </div>
            </Link>
            <div className="text-sm font-medium text-red-700">
              Back to Home Page
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Contact />
      </div>
    </div>
  );
};

export default FourZeroFour;
