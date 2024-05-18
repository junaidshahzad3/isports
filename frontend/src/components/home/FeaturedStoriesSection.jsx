import FeaturedStoriesCarousel from "./FeaturedStoriesCarousel";
import SpecificStories from "./SpecificStories";

const FeaturedStoriesSection = ({ mode = "stories" }) => {
  return (
    <div className="w-full">
      <div className="text-3xl font-bold">FEATURED STORIES</div>
      {mode === "stories" && <FeaturedStoriesCarousel />}
      {mode === "specific" && <SpecificStories />}
    </div>
  );
};

export default FeaturedStoriesSection;
