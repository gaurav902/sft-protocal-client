import Profile_temp from "../components/template/Home/Profile_temp";
import Leaderboard from "../components/template/Home/Leaderboard";
import { useEffect } from "react";
import TelegramWebAppData from "../utils/TelegramWebAppData";

const Home = () => {
  useEffect(() => {
    const TelegramWebApp = TelegramWebAppData();
    console.log(TelegramWebApp);
  }, []);

  return (
    <div className="min-h-screen bg-[#041218] p-5">
      <Profile_temp />
      <Leaderboard />
    </div>
  );
};

export default Home;
