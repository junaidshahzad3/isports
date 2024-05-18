import React from "react";
import data from "../../constants/sportscategories.json";

const AllCategories = () => {
  return (
    <div className="w-full relative flex items-center">
      <div className="w-full flex gap-2 overflow-auto ps-6">
        {data?.map((values, index) => (
          <div key={index} className="py-2 space-y-2 min-w-max w-full">
            <button className="w-max flex gap-4 items-center border border-zinc-200 hover:bg-black hover:text-white transition-all duration-200 rounded-full py-2 px-3">
              <img
                src={values.logo}
                alt=""
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <div className="font-semibold">{values.name}</div>
            </button>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[220px] h-full flex justify-center items-center bg-white">
        <button className="border border-zinc-200 hover:bg-black hover:text-white transition-all duration-200 py-2 px-4 rounded-full">
          More
        </button>
      </div>
    </div>
  );
};

export default AllCategories;
