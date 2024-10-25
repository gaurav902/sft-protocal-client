
const LeaderBoard = () => {
    return(
        <div>
                 <div className="w-full bg-[#0000004D] rounded-2xl mt-5 relative overflow-hidden">
        {/* Adjusted positions of the left-side and right-side blur elements */}
        <div className="bg-[#27C9FF59] rounded-full blur-[130px] -left-[80px] -top-[20px] rotate-45 w-[155px] h-[340px] absolute"></div>
        <div className="bg-[#FBD13066] rounded-full blur-[130px] -right-[80px] -top-[20px] rotate-[-16deg] w-[155px] h-[340px] absolute"></div>

        {/* Profile Text */}
        <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%] text-transparent bg-clip-text bg-gradient-to-r from-[#FBD130] to-[#FBD13066]">
          LeaderBoard
        </p>

        {/* Bottom Section with Backdrop Blur */}
        <div className="flex flex-col gap-3 p-5 mt-3">
          <div className="bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
            <div className="size-12 p-[2px] bg-gradient-to-r from-[#FBD130] to-[#FBD13066] rounded-2xl relative">
              <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
              <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjUeSKfMKkkq5r_h_MI18TlW8YqxfBnKJsQ&s`} alt="" className="rounded-2xl z-10 relative w-full h-full"/>
            </div>
            <p className="font-roboto text-xs font-bold">. 1</p>
            <div className="">
              <p className="font-roboto text-sm text-white">LARY SINTHE</p>
              <p className="font-roboto text-xs text-[#999999]">999999 <strong>SBT</strong></p>
            </div>
          </div>

          <div className="bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
            <div className="size-12 p-[2px] bg-gradient-to-r from-[#FBD130] to-[#FBD13066] rounded-2xl relative">
              {/*<div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>*/}
              <img src={`https://www.valorantpornhentai.com/wp-content/uploads/318520-resident-evil-porn-video-game-character-sweatdrop-light-skin-futanari-nude-futanari-artwork.jpg`} alt="" className="rounded-2xl z-10 relative w-full h-full"/>
            </div>
            <p className="font-roboto text-xs font-bold">. 1</p>
            <div className="">
              <p className="font-roboto text-sm text-white">SAMI MANUAL</p>
              <p className="font-roboto text-xs text-[#999999]">862655 <strong>SBT</strong></p>
            </div>
          </div>
        </div>
      </div>

        </div>
    );
};

export default LeaderBoard;