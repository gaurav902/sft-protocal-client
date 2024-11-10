import Profile_temp from "../components/template/Home/Profile_temp";
import Leaderboard from "../components/template/Home/LeaderBoard"; // Fixed the import name


const Home = () => {


  return (
    <div className="min-h-screen bg-[#041218] p-5">
      <Profile_temp />
      <Leaderboard />
    </div>
  );
};

export default Home;
