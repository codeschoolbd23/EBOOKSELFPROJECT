import React from 'react';
import library from "../../Documentation/components/images/library.jpg";
const Academic = () => {
  return (
    <div className="relative hero w-full bg-base-100 h-full">
      <img src={library} alt="library" className="w-full h-full" />
      <div className="hero-overlay"></div>
        <p className="bottom-20 text-2xl font-bold text-yellow-300 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          আপনাকে প্রথমে একটি শ্রেণী নির্বাচন করতে হবে। <br />
          তারপর আপনি সেই শ্রেণী সম্পর্কিত বই সমূহ দেখতে পারবেন।
        </p>
    </div>
  );
};

export default Academic;