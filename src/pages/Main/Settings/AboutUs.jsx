import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useGetAboutUsQuery, useGetPrivacyPolicyQuery } from '../../../redux/settings/settingsApi';
import Loading from '../../../utils/Loading'

const AboutUs = () => {
    const navigate = useNavigate();
  const {data,isLoading,isError}=useGetAboutUsQuery()

    if(isLoading){
      return <Loading/>
    }
    // const content = data?.data?.attributes?.content;
    const content = "lorem";
    return (
        <div className="relative ml-[24px] ">
        <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
       <MdOutlineKeyboardArrowLeft
        className=""
      onClick={() => navigate("/settings")}
      size={34}
    />
        <h1 className="text-[24px] ">
          About Us
        </h1>
      </div>
      <div className=" text-justify bg-primary mt-[24px] h-[60vh] overflow-y-auto border-2 border-secondary rounded-md p-2 " dangerouslySetInnerHTML={{__html: data?.data?.content}}>
        
      </div>
      <Link to={`/settings/edit-about-us`} className="absolute text-center bottom-[-60px] bg-secondary
        text-white mt-5 py-3 rounded-lg w-full text-[18px] font-medium  duration-200">Edit About Us</Link>
        </div>
    );
}

export default AboutUs;
