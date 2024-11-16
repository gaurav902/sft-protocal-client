import { useState } from "react";
import { Link } from "react-router-dom";
import { useMarkAsCompleteMutation } from "../../../rtk/api/EndPoint";
import { useSelector } from "react-redux";

const HandleClaimStateButton = ({ link, taskId }) => {
  const [isClaim, setClaim] = useState(false);
  const userId = useSelector((state) => state?.UserInfo?.userId);
  const [triggerClaim, { isLoading }] = useMarkAsCompleteMutation();

  const handleClaim = async () => {
    const DataObject = {
      taskId: taskId,
      userId,
    };
    await triggerClaim(DataObject);
    setClaim(false); // Reset state if needed after successful claim
  };

  return (
    <div>
      {isClaim ? (
        <button
          className={`${isLoading ? "bg-[#27c9ff] flex justify-center items-center" : "bg-yellow-500"} 
          px-3 py-1 w-16 h-8 rounded-full text-black font-bold`}
          onClick={handleClaim}
        >
          {isLoading ? (
            <span className="loading loading-ball loading-sm"></span>
          ) : (
            "Claim"
          )}
        </button>
      ) : (
        <Link
          to={link}
          target="_blank"
          className="bg-[#282828] px-3 py-1 w-16 h-8 rounded-full font-roboto text-white font-bold"
          onClick={() => setClaim(true)} // Set claim to true when "Start" is clicked
        >
          Start
        </Link>
      )}
    </div>
  );
};

export default HandleClaimStateButton;
