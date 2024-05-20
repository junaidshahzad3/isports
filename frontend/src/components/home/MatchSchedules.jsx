import React, { useState } from "react";
import data from "../../constants/matchesschedules.json";

const MatchSchedules = () => {
  return (
    <div className="w-full relative flex items-center">
      <div className="w-full flex overflow-auto">
        {data?.map((values, index) => (
          <div
            key={index}
            onClick={() => {
              return (window.location.href = `${values.link}`);
            }}
            className="border border-zinc-200 hover:border hover:border-black cursor-pointer p-6 space-y-2 min-w-[250px] w-full"
          >
            <div className="font-semibold text-zinc-400">{values.category}</div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <img
                    src={values.teams[0].logo}
                    alt=""
                    className="w-[35px] h-[35px] rounded-lg object-cover"
                  />
                  <div className="font-semibold">{values.teams[0].name}</div>
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    src={values.teams[1].logo}
                    alt=""
                    className="w-[35px] h-[35px] rounded-lg object-cover"
                  />
                  <div className="font-semibold">{values.teams[1].name}</div>
                </div>
              </div>
              <div className="flex flex-col justify-center text-zinc-400">
                <div>{values.date}</div>
                <div>{values.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[220px] h-full flex justify-center items-center bg-white">
        <button
          onClick={() =>
            (window.location.href = "https://www.foxsports.com/scores")
          }
          className="border border-zinc-200 hover:bg-black hover:text-white transition-all duration-200 py-2 px-4 rounded-full"
        >
          Show all
        </button>
      </div>
    </div>
  );
};

export default MatchSchedules;
