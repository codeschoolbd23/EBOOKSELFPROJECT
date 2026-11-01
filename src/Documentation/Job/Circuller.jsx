import React from 'react';
import jobImg from "./jobImg.png"
const Circuller = () => {
    const jobCircullers=[1,2,3,4,5,6,7,8,9]
    return (
      <div className="w-full bg-base-100">
        <div className="flex w-full">
          <div className="w-4/5 flex flex-wrap justify-center items-center gap-2  h-full overflow-scroll">
            {jobCircullers.map((job, index) => (
              <div key={index} className="py-3 w-60">
                <figure className="">
                  <img src={jobImg} alt="Job Circuller" className="" />
                </figure>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-primary text-2xl font-black py-1">
                    {job}.সার্কুলার
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <button className="btn btn-primary">See Details</button>
                    <button className="btn btn-primary">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-base-100 w-1/5 flex flex-col justify-center items-center h-full overflow-hidden shadow-sm shadow-green-200">
            <p className="text-xl text-yellow-500">
              Latest Circuller/Mega Circuller
            </p>
            {[1, 2]?.map((job, index) => (
              <div key={index} className="mx-1 py-2">
                <figure className="pt-3">
                  <img
                    src={jobImg}
                    alt="Job Circuller"
                    className="rounded-lg"
                  />
                </figure>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-primary text-2xl font-black py-2">
                    {job}.Government Job Circuller
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <button className="btn btn-primary">See Details</button>
                    <button className="btn btn-primary">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Circuller;