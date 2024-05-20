import moment from "moment";
import playIcon from "../../assets/play-icon.png";

const VideoCardMini = ({ link, mode, image, title, date }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer w-full max-w-[250px] hover:shadow-lg hover:rounded"
      onClick={() => {
        return (window.location.href = `${link}`);
      }}
    >
      <div className="relative">
        <img
          className="w-full h-32 object-cover shadow-inner rounded"
          src={image}
          alt={title}
        />
        <div className="absolute bottom-3 left-3 bg-black rounded-full w-10 h-10 p-2 group-hover:scale-105">
          <img src={playIcon} alt="" className="" />
        </div>
      </div>

      <div className="py-4 px-4">
        <p className="text-gray-700 text-sm">{moment(date).fromNow()}</p>
        <div className="font-bold mb-2">{title}</div>
        {mode === "live" && (
          <strong className="text-red-500 border border-red-500 px-1">
            Live
          </strong>
        )}
      </div>
    </div>
  );
};

export default VideoCardMini;
