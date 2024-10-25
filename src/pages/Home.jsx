import Profile_temp from "../components/template/Home/Profile_temp";
import LeaderBoard from "../components/template/Home/LeaderBoard";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#041218] p-5 relative overflow-hidden">
      <Profile_temp />
      
      <LeaderBoard />
    </div>
  );
};

export default Home;
