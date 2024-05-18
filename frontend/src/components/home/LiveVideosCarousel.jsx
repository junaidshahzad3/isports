import { Carousel } from "antd";
import LiveVideoCard from "../shared/LiveVideoCard";
import { livenowdata } from "../../constants/livenowdata";
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const LiveVideosCarousel = ({ className }) => {
  const chunkedData = chunkArray(livenowdata, 4);

  return (
    <div className={`${className} w-full relative`}>
      <Carousel className="w-full" arrows infinite autoplay>
        {chunkedData.map((group, index) => (
          <div
            key={index}
            className="!flex justify-center gap-4 px-[10%] py-[2%]"
          >
            {group.map((item) => (
              <LiveVideoCard
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
export default LiveVideosCarousel;
