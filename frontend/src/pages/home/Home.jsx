import AllCategories from "../../components/home/AllCategories";
import FeaturedStoriesSection from "../../components/home/FeaturedStoriesSection";
import LiveNowSection from "../../components/home/LiveNowSection";
import MatchSchedules from "../../components/home/MatchSchedules";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-4 justify-center">
        <div>
          <MatchSchedules />
          <AllCategories />
        </div>
        <FeaturedStoriesSection mode="stories" />
        <LiveNowSection />
        <FeaturedStoriesSection mode="specific" />
      </div>
    </div>
  );
};

export default Home;
