import React from "react";
import { Carousel } from "antd";
import FeaturedStoryCard from "../shared/FeaturedStoryCard";
import { featuredstoriesdata } from "../../constants/featuredstoriesdata";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const FeaturedStoriesCarousel = ({ className }) => {
  const chunkedData = chunkArray(featuredstoriesdata, 3);

  return (
    <div className={`${className} w-full relative`}>
      <Carousel className="w-full" arrows infinite autoplay>
        {chunkedData.map((group, index) => (
          <div
            key={index}
            className="!flex justify-center gap-4 px-[10%] py-[2%]"
          >
            {group.map((item) => (
              <FeaturedStoryCard
                key={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
                className="h-[400px] w-full max-w-[250px]"
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default FeaturedStoriesCarousel;