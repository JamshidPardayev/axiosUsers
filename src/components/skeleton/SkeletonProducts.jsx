import React from "react";

const SkeletonProducts = () => (
  <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-w-[1200px] mx-auto gap-6 p-4">
    {Array(30)
      .fill("")
      .map((_, index) => (
        <div
          key={index}
          className="max-w-[350px] max-sm:w-[300px] flex flex-col rounded-2xl shadow-[2px_2px_4px_#333333] max-sm:mx-auto justify-center p-2"
        >
          <div className="w-full h-[200px] bg-gray-300 rounded-2xl mb-3"></div>
          <div className="h-[20px] bg-gray-300 rounded mb-2"></div>
          <div className="h-[60px] bg-gray-300 rounded mb-2"></div>
          <div className="h-[35px] bg-gray-300 rounded mt-3"></div>
        </div>
      ))}
  </div>
);


export default SkeletonProducts;
