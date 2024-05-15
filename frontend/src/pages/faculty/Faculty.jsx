import React from "react";
import FacultyMembers from "../../components/faculty/FacultyMembers";

const Faculty = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-center">
        <FacultyMembers />
      </div>
    </div>
  );
};

export default Faculty;
