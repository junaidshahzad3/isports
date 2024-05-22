import FeaturedStoriesCarousel from "./FeaturedStoriesCarousel";
import SpecificStories from "./SpecificStories";

const FeaturedStoriesSection = ({ mode = "stories", title, data }) => {
  return (
    <div className="w-full">
      {title && <div className="text-3xl font-bold">{title}</div>}
      {mode === "stories" && data?.length > 0 && (
        <FeaturedStoriesCarousel data={data} />
      )}
      {mode === "specific" && data?.length > 0 && (
        <SpecificStories data={data} />
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

export default FeaturedStoriesSection;
