import FeaturedStoriesCarousel from "./FeaturedStoriesCarousel";
import SpecificStories from "./SpecificStories";

const FeaturedStoriesSection = ({ mode = "stories", title, data }) => {
  return (
    <div className="w-full">
      {title && <div className="text-3xl font-bold">{title}</div>}
      {mode === "stories" && <FeaturedStoriesCarousel data={data} />}
      {mode === "specific" && <SpecificStories data={data} />}
    </div>
  );
};

export default FeaturedStoriesSection;
