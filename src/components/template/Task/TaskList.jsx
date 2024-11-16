// TaskList.js
import { useSelector } from "react-redux";
import { useTaskListQuery } from "../../../rtk/api/EndPoint";
import HandleClaimStateButton from "./HandleClaimStateButton"; // Import your HandleClaimStateButton component

const TaskList = () => {
  const userId = useSelector((state) => state?.UserInfo?.userId);
  console.log(userId);

  const { data, isFetching, error } = useTaskListQuery(userId);

  if (error) {
    console.error("Error fetching task list:", error);
  }

  return (
    <div className="flex flex-col gap-5 mt-5 h-[200vh]">
      {isFetching ? (
        <div className="w-full h-64 skeleton rounded-2xl"></div>
      ) : error ? (
        <div className="text-red-500">Error: {error.message}</div>
      ) : (
        <>
          {data?.data?.map((item, index) => (
            <div className="relative" key={index}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://img.freepik.com/premium-vector/new-twitter-x-logo-vector-twitter-x-sign-vector_952796-6.jpg?semt=ais_hybrid"
                    alt="social logo"
                    className="w-6 h-6"
                  />
                  <div>
                    <p className="font-roboto text-white text-sm capitalize">
                      {item?.title}
                    </p>
                    <p className="font-roboto text-[#D9D9D9] text-sm">
                      +{item?.points} SP
                    </p>
                  </div>
                </div>
                <div className="flex ml-auto">
                  {item?.isComplete ? (
                    <button className="bg-blue-500 px-3 py-1 w-16 h-8 rounded-full font-roboto font-bold flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                        />
                        <path
                          d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <HandleClaimStateButton taskId={item?._id} link={item?.link} />
                  )}
                </div>
              </div>
              <div className="w-[90%] h-[1px] bg-[#99999966] absolute -bottom-2 right-0"></div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
