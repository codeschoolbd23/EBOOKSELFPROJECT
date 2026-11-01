import React from 'react';

const Skeleton = () => {
    return (
      <div className="h-full bg-base-100">
        <div className="flex w-full flex-col gap-4 bg-base-100">
          <div className="skeleton h-40 w-full animate-pulse bg-gray-100 rounded"></div>
          <div className="bg-gray-100">
            Please, wait for loading your data......
          </div>
          <div className="skeleton h-12 w-28 animate-pulse bg-gray-100 rounded"></div>
          <div className="skeleton h-12 w-full animate-pulse bg-gray-100 rounded"></div>
          <div className="skeleton h-12 w-full animate-pulse bg-gray-100 rounded"></div>
        </div>
      </div>
    );
};

export default Skeleton;