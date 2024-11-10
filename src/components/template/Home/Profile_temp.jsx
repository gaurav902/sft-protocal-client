import { useForm } from "react-hook-form";
import profile_img from "../../../assets/images/profile_img.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFindAccountQuery, useUpdateAccountMutation } from "../../../rtk/api/EndPoint";

const Profile_temp = () => {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
  const [profileImage, setProfileImage] = useState(profile_img);
  const [isEdit, setEdit] = useState(false);
  const [isLoadingFinally, setLoadingFinally] = useState(false);
  const userId = useSelector((state) => state.UserInfo.userId);
  const [triggerUpdateProfile] = useUpdateAccountMutation();
  const { data: userData, isFetching } = useFindAccountQuery(userId);

  useEffect(() => {
    if (userData?.profilePicture) {
      setProfileImage(userData.profilePicture);
    }
  }, [userData]);

  const handleProfileSubmission = async (e) => {
    try {
      setLoadingFinally(true);
      const ImageFormData = new FormData();
      if (e.img[0]) {
        ImageFormData.append("image", e.img[0]);
      }

      const imgLink = await fetch("https://api.imgbb.com/1/upload?&key=75954d08c8d971343989021f38eab2b9", {
        method: "POST",
        body: ImageFormData,
      }).then((res) => res.json());

      if (!imgLink?.data?.display_url) throw new Error("Failed to upload image.");

      const userInfoObject = {
        userId,
        profilePicture: imgLink.data.display_url,
        fullName: e.name,
      };

      const update = await triggerUpdateProfile(userInfoObject);
      if (update?.error) throw new Error(update.error.message || "Failed to update account.");

      reset();
      setEdit(false);
    } catch (error) {
      console.error("Error:", error.message || error);
      setError("submit", { type: "manual", message: error.message || "An unknown error occurred." });
    } finally {
      setLoadingFinally(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="bg-[#00000033] rounded-2xl relative overflow-hidden p-4 max-w-md mx-auto">
        <div className="bg-[#27C9FF59] rounded-[340px] blur-[100px] -left-[120px] -top-[20px] rotate-45 w-[130px] h-[300px] absolute"></div>
        <div className="bg-[#FBD13066] rounded-[340px] blur-[100px] -right-[120px] -bottom-[100px] rotate-[-16deg] w-[130px] h-[300px] absolute"></div>

        <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] translate-x-[-50%] text-transparent bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-clip-text">
          Profile
        </p>

        {isFetching ? (
          <div className="w-full h-40 skeleton rounded-2xl mt-5"></div>
        ) : (
          <div className="flex flex-col justify-center gap-5 items-center mt-6">
            {isEdit ? (
              <form onSubmit={handleSubmit(handleProfileSubmission)} className="w-full flex flex-col justify-center items-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="p-[2px] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] rounded-full relative flex justify-center items-center overflow-hidden w-[60px] h-[60px]">
                    <img src={profileImage || profile_img} alt="Profile" className="rounded-full w-full h-full object-cover absolute z-0 opacity-60" />
                    <input
                      type="file"
                      className="h-full w-full absolute opacity-0 cursor-pointer"
                      {...register("img")}
                      onChange={handleImageChange}
                      aria-label="Upload profile image"
                    />
                    <div className="absolute z-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center">
                      <p className="text-[4px] text-center font-roboto text-white font-bold">Upload Picture</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="text-lg outline-none w-[150px] font-roboto text-white text-center"
                      defaultValue={userData?.fullName}
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    <p className="text-xs font-roboto text-[#999999]">@{userData?.username}</p>
                  </div>
                </div>
                <button type="submit" className="bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] p-[1px] rounded-md">
                  <div className="bg-black px-4 py-1 rounded-md">
                    <p className="font-roboto text-white text-opacity-70">
                      {isLoadingFinally ? <span className="loading loading-dots loading-xs"></span> : "Save"}
                    </p>
                  </div>
                </button>
              </form>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <div className="p-[2px] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] rounded-full relative flex justify-center items-center overflow-hidden w-[60px] h-[60px]">
                    <img src={profileImage} alt="Profile" className="rounded-full w-full h-full object-cover absolute z-0" />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-roboto text-white">{userData?.fullName}</p>
                    <p className="text-xs font-roboto text-[#999999]">@{userData?.username}</p>
                  </div>
                </div>
                <button onClick={() => setEdit(true)} type="button" className="bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] p-[1px] rounded-md mt-4">
                  <div className="bg-black px-4 py-1 rounded-md">
                    <p className="font-roboto text-white text-opacity-70">Edit</p>
                  </div>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile_temp;
