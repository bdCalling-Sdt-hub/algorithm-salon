import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PosterCart from "../../../Components/PosterCart";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Loading from "../../../utils/Loading"
import { useGetAllSplashPostersQuery } from "../../../redux/poster/posterApi";
import { space } from "postcss/lib/list";

const SplashScreenPoster = () => {
  const navigate = useNavigate();
  const {data,isLoading,isError,error,refetch}=useGetAllSplashPostersQuery(undefined,{
    refetchOnMountOrArgChange:true
  })

  if(isLoading){
    return <Loading/>
  }
  const service = [
    {
      id: 1,
      name: "Total Pool Cleaning",
    },
    {
      id: 2,
      name: "Total Pool Cleaning",
    },
    {
      id: 3,
      name: "Total Spa",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center cursor-pointer">
          <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} />
          <p className=" text-[24px]">Splash Screen Poster</p>
        </div>

        <div
          onClick={(e) => navigate("/poster/add-splash-screen")}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-secondary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaPlus size={17} />
          <p>Add Splash Screen</p>
        </div>
      </div>
      <div className="grid grid-cols-3 my-4 ">
        {data?.data?.map(splashPoster=><PosterCart key={splashPoster._id} data={splashPoster} />)}
        {/* <PosterCart />
        <PosterCart />
        <PosterCart /> */}
      </div>
    </div>
  );
};

export default SplashScreenPoster;
