import { useLeaderboardQuery } from "../../../rtk/api/EndPoint";

const LeaderBoard = () => {
  const { data, isFetching } = useLeaderboardQuery(undefined);

  if (isFetching) {
    return <div className="w-full h-72 skeleton"></div>;
  }

  if (!data || !data.data || data.data.length === 0) {
    return <div>No leaderboard data available.</div>;
  }

  return (
    <div>
      <div className="w-full bg-[#0000004D] rounded-2xl mt-5 relative overflow-hidden">
        {/* Background Blur Elements */}
        <div className="bg-[#27C9FF59] rounded-full blur-[130px] -left-[80px] -top-[20px] rotate-45 w-[155px] h-[340px] absolute"></div>
        <div className="bg-[#FBD13066] rounded-full blur-[130px] -right-[80px] -top-[20px] rotate-[-16deg] w-[155px] h-[340px] absolute"></div>

        {/* Title */}
        <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%] text-transparent bg-clip-text bg-gradient-to-r from-[#FBD130] to-[#FBD13066]">
          LeaderBoard
        </p>

        <div className="flex flex-col gap-3 p-5 mt-3">
          {/* Top User - Larger Container */}
          <div className="bg-[#FFFFFF1A] backdrop-blur-sm h-20 mt-0 rounded-2xl flex items-center gap-4 px-4 overflow-hidden">
            <div className="size-14 p-[3px] bg-gradient-to-r from-[#FBD130] to-[#FBD13066] rounded-2xl relative">
              <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
              <img
                src={data?.data[0]?.userId?.profilePicture || "/fallback-image.jpg"} // fallback image
                alt="Profile"
                className="rounded-2xl z-10 relative w-full h-full"
              />
            </div>
            <p className="font-roboto text-sm font-bold">. 1</p>
            <div className="">
              <p className="font-roboto text-base text-white">
                {data?.data[0]?.userId?.fullName || "Unknown User"} {/* Fallback name */}
              </p>
              <p className="font-roboto text-sm text-[#999999]">
                {data?.data[0]?.points || 0} <strong>SBT</strong>
              </p>
            </div>
          </div>

          {/* Remaining Users */}
          {data?.data?.slice(1, 50)?.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden"
            >
              <div className="size-12 p-[2px] bg-gradient-to-r from-[#FBD130] to-[#FBD13066] rounded-2xl relative">
                <img
                  src={item?.userId?.profilePicture || "/fallback-image.jpg"} // fallback image
                  alt="Profile"
                  className="rounded-2xl z-10 relative w-full h-full"
                />
              </div>
              <p className="font-roboto text-xs font-bold">. {index + 2}</p>
              <div className="">
                <p className="font-roboto text-sm text-white">
                  {item?.userId?.fullName || "Unknown User"} {/* Fallback name */}
                </p>
                <p className="font-roboto text-xs text-[#999999]">
                  {item?.points || 0} <strong>SBT</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
