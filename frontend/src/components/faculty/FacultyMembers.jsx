import React from "react";
import { facultymembers } from "../../constants/facultymembers";

const FacultyMembers = () => {
  console.log("facultymembers[0]", facultymembers[0]);
  return (
    <div className="flex flex-col gap-4 text-center items-center my-10">
      <div className="text-3xl font-bold">Faculty Members</div>
      {/* Editor in chief here */}
      <div className="p-6 space-y-2 min-w-[220px] w-full max-w-[300px] hover:shadow-lg rounded-xl border border-transparent hover:border-zinc-200">
        <div className="flex flex-col gap-4 items-center">
          <img
            src={facultymembers[0].image}
            alt=""
            className="w-[150px] h-[150px] shadow-inner object-cover rounded-full border border-zinc-200"
          />
          <div className="">{facultymembers[0].name}</div>
          <div className="font-bold">{facultymembers[0].designation}</div>
        </div>
      </div>

      {/* others */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
        {facultymembers?.map((values, index) => {
          if (index !== 0) {
            return (
              <div
                key={index}
                className="p-6 space-y-2 min-w-[220px] w-full max-w-[300px] hover:shadow-lg rounded-xl border border-transparent hover:border-zinc-200"
              >
                <div className="flex flex-col gap-4 items-center">
                  <img
                    src={values.image}
                    alt=""
                    className="w-[150px] h-[150px] shadow-inner object-cover rounded-full border border-zinc-200"
                  />
                  <div className="">{values.name}</div>
                  <div className="font-bold">{values.designation}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FacultyMembers;
