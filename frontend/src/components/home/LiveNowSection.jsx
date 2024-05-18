import React from "react";
import LiveVideoCard from "../shared/LiveVideoCard";
import LiveVideosCarousel from "./LiveVideosCarousel";

const LiveNowSection = () => {
  return (
    <div>
      <div className="text-3xl font-bold">LIVE NOW</div>
      <LiveVideosCarousel />
    </div>
  );
};

export default LiveNowSection;
