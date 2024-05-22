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
import { useEffect, useState } from "react";
import { getSearchedResults } from "../../helpers/getSearchedResults";
import { useSelector } from "react-redux";

const Home = () => {
  const search = useSelector((state) => state.feature.search);
  const [featuredStories, setFeaturedStories] = useState(
    featuredstoriesdata || []
  );
  const [liveNow, setLiveNow] = useState(livenowdata || []);
  const [footballStories, setFootballStories] = useState(
    footballstoriesdata || []
  );
  const [footballVideos, setFootballVideos] = useState(
    footballvideosdata || []
  );
  const [formula1Stories, setFormula1Stories] = useState(
    formula1storiesdata || []
  );
  const [formula1Videos, setFormula1Videos] = useState(
    formula1videosdata || []
  );
  const [featuredVideos, setFeaturedVideos] = useState(
    featuredvideosdata || []
  );

  useEffect(() => {
    setFeaturedStories(getSearchedResults(search, featuredstoriesdata));
    setLiveNow(getSearchedResults(search, livenowdata));
    setFootballStories(getSearchedResults(search, footballstoriesdata));
    setFootballVideos(getSearchedResults(search, footballvideosdata));
    setFormula1Stories(getSearchedResults(search, formula1storiesdata));
    setFormula1Videos(getSearchedResults(search, formula1videosdata));
    setFeaturedVideos(getSearchedResults(search, featuredvideosdata));
  }, [search]);

  const isDataAvailable =
    featuredStories.length > 0 ||
    liveNow.length > 0 ||
    footballStories.length > 0 ||
    footballVideos.length > 0 ||
    formula1Stories.length > 0 ||
    formula1Videos.length > 0 ||
    featuredVideos.length > 0;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1200px] p-6 flex flex-col gap-4 justify-center">
        {isDataAvailable ? (
          <>
            {featuredStories.length > 0 && (
              <FeaturedStoriesSection
                mode="stories"
                title="FEATURED STORIES"
                data={featuredStories}
              />
            )}
            {liveNow.length > 0 && (
              <VideosSection mode="live" title="LIVE" data={liveNow} />
            )}
            {(footballStories.length > 0 || footballVideos.length > 0) && (
              <div>
                {footballStories.length > 0 && (
                  <FeaturedStoriesSection
                    mode="specific"
                    title="FOOTBALL STORIES"
                    data={footballStories}
                  />
                )}
                {footballVideos.length > 0 && (
                  <VideosSection
                    mode="video-full"
                    title="FOOTBALL VIDEOS"
                    data={footballVideos}
                  />
                )}
              </div>
            )}
            {(formula1Stories.length > 0 || formula1Videos.length > 0) && (
              <div>
                {formula1Stories.length > 0 && (
                  <FeaturedStoriesSection
                    mode="specific"
                    title="FORMULA 1 STORIES"
                    data={formula1Stories}
                  />
                )}
                {formula1Videos.length > 0 && (
                  <VideosSection
                    mode="video-full"
                    title="FORMULA 1 VIDEOS"
                    data={formula1Videos}
                  />
                )}
              </div>
            )}
            {featuredVideos.length > 0 && (
              <VideosSection
                mode="video-mini"
                title="FEATURED VIDEOS"
                data={featuredVideos}
              />
            )}
          </>
        ) : (
          <div className="w-full text-2xl font-bold text-center">
            No Results Found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
