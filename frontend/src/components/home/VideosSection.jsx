import VideosCarousel from "./VideosCarousel";
import VideosComponentContainer from "./VideosComponentContainer";

const VideosSection = ({ mode = "video-mini", title, data }) => {
  return (
    <div className="w-full">
      {title && <div className="text-3xl font-bold">{title}</div>}
      {(mode === "video-mini" || mode === "live") && data?.length > 0 && (
        <VideosCarousel data={data} mode={mode} />
      )}
      {mode === "video-full" && data?.length > 0 && (
        <VideosComponentContainer data={data} />
      )}
      {!data ||
        (data?.length === 0 && (
          <div className="w-full text-2xl font-bold text-center">
            No Results Found!
          </div>
        ))}
    </div>
  );
};

export default VideosSection;
