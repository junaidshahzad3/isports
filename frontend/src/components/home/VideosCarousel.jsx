import { Carousel } from "antd";
import VideoCardMini from "../shared/VideoCardMini";
import useScreenWidth from "../../helpers/useScreenWidth";
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const VideosCarousel = ({ className, data, mode }) => {
  let width = useScreenWidth();
  const chunkedData = chunkArray(
    data,
    width >= 1100 ? 4 : width < 1100 && width > 786 ? 2 : 1
  );

  return (
    <div className={`${className} w-full relative`}>
      <Carousel className="w-full" arrows infinite autoplay>
        {chunkedData.map((group, index) => (
          <div
            key={index}
            className="!flex !justify-center gap-4 px-[10%] py-[2%]"
          >
            {group.map((item) => (
              <div key={index} className="w-max">
                <VideoCardMini
                  mode={mode}
                  data={item}
                  className="h-[400px] w-full max-w-[250px]"
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default VideosCarousel;
