import React from "react";
import data from "../../constants/facultymembers.json";
const FacultyMembers = () => {
  console.log("data[0]", data[0]);
  return (
    <div className="flex flex-col text-center items-center my-10">
      <div className="text-3xl font-bold">Faculty Members</div>
      {/* Editor in chief here */}
      <div className="p-6 space-y-2 min-w-[220px] w-full max-w-[300px] hover:shadow-lg rounded-xl border border-transparent hover:border-zinc-200">
        <div className="flex flex-col gap-4 items-center">
          <img
            src={data[0].image}
            alt=""
            className="w-[150px] h-[150px] shadow-inner object-cover rounded-full border border-zinc-200"
          />
          <div className="">{data[0].name}</div>
          <div className="font-bold">{data[0].designation}</div>
        </div>
      </div>

      {/* others */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
        {data?.map((values, index) => {
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
