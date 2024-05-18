import AllCategories from "../../components/home/AllCategories";
import FeaturedStoriesSection from "../../components/home/FeaturedStoriesSection";
import MatchSchedules from "../../components/home/MatchSchedules";
import VideosSection from "../../components/home/VideosSection";
import { basketballstoriesdata } from "../../constants/basketballstoriesdata";
import { basketballvideosdata } from "../../constants/basketballvideosdata";
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
        {/* basketball seciton */}
        <div>
          <FeaturedStoriesSection
            mode="specific"
            title="BASKETBALL STORIES"
            data={basketballstoriesdata}
          />
          <VideosSection
            mode="video-full"
            title="BASKETBALL VIDEOS"
            data={basketballvideosdata}
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
