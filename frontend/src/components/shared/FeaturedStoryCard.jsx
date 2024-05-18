import moment from "moment";

const FeaturedStoryCard = ({ image, title, date, className }) => {
  return (
    <div
      className={`${className} group relative overflow-hidden rounded-lg shadow-md`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition duration-300 ease-in-out"></div>
      <div className="p-4 absolute bottom-0 w-full">
        <h5 className="text-xl font-bold text-white">{title}</h5>
        <p className="text-sm text-gray-200">{moment(date).fromNow()}</p>
      </div>
    </div>
  );
};

export default FeaturedStoryCard;
