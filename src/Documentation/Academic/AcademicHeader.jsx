import React from "react";
import { Outlet } from "react-router-dom";
import ClassNameModal from "../../Utilities/Modal/ClassNameModal";
const AcademicHeader = () => {
  return (
    <>
      <div className="w-full min-h-150 bg-base-100">
        <ClassNameModal />
        <Outlet />
      </div>
    </>
  );
};

export default AcademicHeader;
