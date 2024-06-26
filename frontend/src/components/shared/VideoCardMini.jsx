import moment from "moment";
import playIcon from "../../assets/play-icon.png";
import { useNavigate } from "react-router-dom";

const VideoCardMini = ({ mode, data, className }) => {
  const navigate = useNavigate();
  return (
    <div
      className="overflow-hidden cursor-pointer w-full max-w-[250px] hover:shadow-lg hover:rounded"
      onClick={() => navigate(`/article/${data.id}`)}
    >
      <div className="relative">
        <img
          className="w-full h-32 object-cover shadow-inner rounded"
          src={data.image}
          alt={data.title}
        />
        <div className="absolute bottom-3 left-3 bg-black rounded-full w-10 h-10 p-2 group-hover:scale-105">
          <img src={playIcon} alt="" className="" />
        </div>
      </div>

      <div className="py-4 px-4">
        <p className="text-gray-700 text-sm">{moment(data.date).fromNow()}</p>
        <div className="font-bold mb-2">{data.title}</div>
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
