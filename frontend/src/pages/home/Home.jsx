import AllCategories from "../../components/home/AllCategories";
import FeaturedStoriesSection from "../../components/home/FeaturedStoriesSection";
import MatchSchedules from "../../components/home/MatchSchedules";
import VideosSection from "../../components/home/VideosSection";
import { formula1storiesdata } from "../../constants/formula1storiesdata";
import { formula1videosdata } from "../../constants/formula1videosdata";
import { featuredstoriesdata } from "../../constants/featuredstoriesdata";
import { featuredvideosdata } from "../../constants/featuredvideosdata";
import { footballstoriesdata } from "../../constants/footballstoriesdata";
import { footballvideosdata } from "../../constants/footballvideosdata";
import { livenowdata } from "../../constants/livenowdata";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-4 justify-center">
        <div>
          <MatchSchedules />
          <AllCategories />
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-4 justify-center">
        {/* featured section */}
        <FeaturedStoriesSection
          mode="stories"
          title="FEATURED STORIES"
          data={featuredstoriesdata}
        />
        <VideosSection mode="live" title="LIVE" data={livenowdata} />

        {/* football seciton */}
        <div>
          <FeaturedStoriesSection
            mode="specific"
            title="FOOTBALL STORIES"
            data={footballstoriesdata}
          />
          <VideosSection
            mode="video-full"
            title="FOOTBALL VIDEOS"
            data={footballvideosdata}
          />
        </div>
        {/* formula1 seciton */}
        <div>
          <FeaturedStoriesSection
            mode="specific"
            title="FORMULA 1 STORIES"
            data={formula1storiesdata}
          />
          <VideosSection
            mode="video-full"
            title="FORMULA 1 VIDEOS"
            data={formula1videosdata}
          />
        </div>
        <VideosSection
          mode="video-mini"
          title="FEATURED VIDEOS"
          data={featuredvideosdata}
        />
      </div>
    </div>
  );
};

export default Home;
