import React from "react";
import moment from "moment";

const SpecificStories = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 items-center my-10">
      <div
        onClick={() => {
          return (window.location.href = `${data[0].link}`);
        }}
        className={`w-full group relative overflow-hidden rounded-lg shadow-md`}
      >
        <img
          src={data[0].image}
          alt={data[0].title}
          className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition duration-300 ease-in-out"></div>
        <div className="p-4 absolute bottom-0 w-full">
          <h5 className="text-2xl font-bold text-white">{data[0].title}</h5>
          <p className="text-gray-200">{moment(data[0].date).fromNow()}</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        {data?.map((values, index) => {
          if (index !== 0) {
            return (
              <div
                key={index}
                className="overflow-hidden cursor-pointer w-full hover:shadow-lg hover:rounded"
                onClick={() => {
                  return (window.location.href = `${values.link}`);
                }}
              >
                <img
                  className="w-full max-h-[300px] object-cover shadow-inner rounded"
                  src={values.image}
                  alt={values.title}
                />
                <div className="py-4 px-4">
                  <p className="text-gray-700 text-sm">
                    {moment(values.date).fromNow()}
                  </p>
                  <div className="font-bold mb-2">{values.title}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SpecificStories;
