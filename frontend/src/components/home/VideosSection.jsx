import VideosCarousel from "./VideosCarousel";
import VideosComponentContainer from "./VideosComponentContainer";

const VideosSection = ({ mode = "video-mini", title, data }) => {
  return (
    <div className="w-full">
      {title && <div className="text-3xl font-bold">{title}</div>}
      {(mode === "video-mini" || mode === "live") && (
        <VideosCarousel data={data} mode={mode} />
      )}
      {mode === "video-full" && <VideosComponentContainer data={data} />}
    </div>
  );
};

export default VideosSection;
