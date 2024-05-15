import AllCategories from "../../components/home/AllCategories";
import MatchSchedules from "../../components/home/MatchSchedules";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-center">
        <MatchSchedules />
        <AllCategories />
      </div>
    </div>
  );
};

export default Home;
