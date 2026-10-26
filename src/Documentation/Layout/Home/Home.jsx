import React from 'react';
import Calendar from './../../Shared/calendar/Calendar';
import layoutProfile from "../../../assets/layoutProfile.png";
export default function Home() {
  return (
    <div
      className="relative text-center w-full mx-0 min-h-150 aura aura-rainbow rounded-none"
    >
      <div className="absolute right-0">
        <Calendar />
      </div>
      <div className="card flex flex-col justify-center items-center">
        <h2 className="card-title">
          জীবনের শ্রেষ্ঠ সম্পদ
          <div className="badge badge-secondary p-2 rotate-6 font-extrabold text-2xl">
            পড়া
          </div>
        </h2>
        <div className="avatar aura aura-rainbow rounded-full p-6">
          <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring-2 ring-offset-2">
            <img alt="layoutProfile" src={layoutProfile} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-8xl">
            <span className="text-fuchsia-700">
              <span className="aura aura-dual rounded-full">তুমি</span> পড়
            </span>
            -
            <span className="text-green-700">
              <span className="aura aura-dual rounded-full">তুমি</span> পাড়বে
            </span>
          </p>
          <p className="text-5xl">শুরু কর,শেষ হবে</p>
        </div>
      </div>
    </div>
  );
}
