import moment from "moment";
import { useNavigate } from "react-router-dom";

const FeaturedStoryCard = ({ data, className }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/article/${data.id}`)}
      className={`${className} group relative overflow-hidden rounded-lg shadow-md`}
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition duration-300 ease-in-out"></div>
      <div className="p-4 absolute bottom-0 w-full">
        <h5 className="text-xl font-bold text-white">{data.title}</h5>
        <p className="text-sm text-gray-200">{moment(data.date).fromNow()}</p>
      </div>
    </div>
  );
};

export default FeaturedStoryCard;
