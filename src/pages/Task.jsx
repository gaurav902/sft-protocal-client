const Task = () => {
    return (
      <div className="min-h-screen bg-black p-5 relative ">

        <div className="fixed top-0 bg-black z-20">
        {/* Header */}
        <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%]
         text-transparent bg-clip-text bg-gradient-to-r from-[#FBD130] to-[#27C9FF]">
          Tasks
        </p>
        
        <div className="mt-5">
        <p className="text-2xl font-roboto font-bold">
            SFT socials: - <span className="text-xl">14</span>
          </p>
          <p className="text-[#D9D9D9] font-roboto text-xs">
            Join our community, be aware of new and following updates, claim your reward in rSPD with SFT fam!
          </p>
        </div>
          </div>

        {/* SFT Social Section */}
        <div className="mt-20 relative">

  
          {/* Task Items */}
          <div className="flex flex-col gap-5 mt-5 h-[200vh]">
  
            {/* Task Item 1 */}
            <div className="relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://img.freepik.com/premium-vector/new-twitter-x-logo-vector-twitter-x-sign-vector_952796-6.jpg?semt=ais_hybrid" 
                    alt="social logo" 
                    className="size-6" 
                  />
                  <div>
                    <p className="font-roboto text-white text-sm">Follow SFT Protocol on X</p>
                    <p className="font-roboto text-[#D9D9D9] text-sm">+10 SP</p>
                  </div>
                </div>
                <button className="bg-yellow-500 px-3 py-1 rounded-full font-roboto text-black font-bold">Claim</button>
              </div>
              <div className="w-[90%] h-[1px] bg-[#99999966] absolute -bottom-2 right-0"></div>
            </div>
  
            {/* Task Item 2 */}
            <div className="relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://img.freepik.com/premium-vector/new-twitter-x-logo-vector-twitter-x-sign-vector_952796-6.jpg?semt=ais_hybrid" 
                    alt="social logo" 
                    className="size-6" 
                  />
                  <div>
                    <p className="font-roboto text-white text-sm">Follow SFT Protocol on X</p>
                    <p className="font-roboto text-[#D9D9D9] text-sm">+10 SP</p>
                  </div>
                </div>
                <button className="bg-[#282828] px-3 py-1 rounded-full font-roboto text-white font-bold">Start</button>
              </div>
              <div className="w-[90%] h-[1px] bg-[#99999966] absolute -bottom-2 right-0"></div>
            </div>
  
            {/* Task Item 3 */}
            <div className="relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://img.freepik.com/premium-vector/new-twitter-x-logo-vector-twitter-x-sign-vector_952796-6.jpg?semt=ais_hybrid" 
                    alt="social logo" 
                    className="size-6" 
                  />
                  <div>
                    <p className="font-roboto text-white text-sm">Follow SFT Protocol on X</p>
                    <p className="font-roboto text-[#D9D9D9] text-sm">+10 SP</p>
                  </div>
                </div>
                <button className="bg-yellow-500 px-3 py-1 rounded-full font-roboto text-black font-bold">Claim</button>
              </div>
              <div className="w-[90%] h-[1px] bg-[#99999966] absolute -bottom-2 right-0"></div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Task;
  