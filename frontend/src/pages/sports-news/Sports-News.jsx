import React from "react";
import Sports from "../../components/sports-news/Sports";

const SportsNews = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-center">
        <Sports />
      </div>
    </div>
  );
};

export default SportsNews;
