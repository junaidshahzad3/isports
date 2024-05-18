import moment from "moment";

const LiveVideoCard = ({ image, title, date, onClick }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer w-full max-w-[250px] hover:shadow-lg hover:rounded"
      onClick={onClick}
    >
      <img
        className="w-full h-32 object-cover shadow-inner rounded"
        src={image}
        alt={title}
      />
      <div className="py-4 px-4">
        <p className="text-gray-700 text-sm">{moment(date).fromNow()}</p>
        <div className="font-bold mb-2">{title}</div>
        <strong className="text-red-500 border border-red-500 px-1">
          Live
        </strong>
      </div>
    </div>
  );
};

export default LiveVideoCard;
