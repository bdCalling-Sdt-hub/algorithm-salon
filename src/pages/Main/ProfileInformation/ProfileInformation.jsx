import { Input } from "antd";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { useChangeProfilePictureMutation, useGetUserProfileQuery } from "../../../redux/user/userApi";
import Loading from "../../../utils/Loading"

const ProfileInformation = () => {
    const [currentUser,setCurrentUser] = useState()
  const navigate = useNavigate();
  // const baseUrl = import.meta.env.IP_BASE_URL;
  const {data,isLoading,isError}=useGetUserProfileQuery()
  const [changeProfilePicture,{isLoading:addingProfileLoading,isError:addingProfileError}]=useChangeProfilePictureMutation()

  // console.log(baseUrl)
  useEffect(()=>{
    const storedUser = localStorage.getItem('user-update');
    const user = JSON.parse(storedUser);
    // console.log(user);
    setCurrentUser(user);
  },[])
  
  if(isLoading){
    return <Loading/>
  }
  const {_id='',name='',email="",role="",profilePictureUrl="",contactNumber}=data?.data
    return (
        <div>
      <div className="flex justify-between items-center ml-[24px] mt-[40px] mb-[63px]">
        <h1 className="text-[30px] font-medium">Profile Information</h1>
        <div
            onClick={(e) =>navigate(`/edit-profile/${_id}`)}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-secondary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaEdit size={17} />
          <p>Edit Profile</p>
        </div>
      </div>
      <div className="lg:flex ml-[24px] p-[36px] rounded-xl gap-5">
        <div className="w-[33%] bg-primary rounded-xl ml-[24px] flex flex-col justify-center items-center gap-[30px] p-10">
          <img
            className="w-[242px] h-[242px] rounded-full"
            // src={`${import.meta.env.VITE_BASE_URL}${currentUser?.image?.publicFileURL}`}
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${profilePictureUrl}`}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            {/* <p className="text-[20px] ">{role?.toUpperCase() || "Admin"}</p> */}
            <h1 className="text-[30px] font-medium">
             {name?.toUpperCase() || ""}
            </h1>
          </div>
        </div>

        <div className="flex-1 w-[66%]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[25px]">
              <div className="flex-1">
                <label
                  htmlFor=""
                  className=" text-[18px] font-medium"
                >
                  Name
                </label>
                <Input
              
                  placeholder="First name"
                  value={name}
                  className="p-4 bg-primary
                          rounded w-full 
                          justify-start 
                          border-2 
                          border-secondary
                          mt-[12px]
                          items-center 
                         
                          gap-4 inline-flex hover:border-secondary focus:bg-primary hover:bg-primary"
                  type="text"
                  readOnly
                />
              </div>
              
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="  text-[18px] font-medium mb-[12px]"
              >
                Email
              </label>
              <Input
          
                placeholder="Email"
                value={email}
                className="p-4 bg-primary
                rounded w-full 
                justify-start 
                border-2 
                border-secondary
                mt-[12px]
                items-center 
               
                gap-4 inline-flex hover:border-secondary focus:bg-primary hover:bg-primary"
                type="text"
                readOnly
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="  text-[18px] font-medium mb-[12px]"
              >
                Phone Number
              </label>
              <Input
            
                placeholder="Phone"
                value={contactNumber || "Not Provided"}
                className="p-4 bg-primary
                rounded w-full 
                justify-start 
                border-2 
                border-secondary
                mt-[12px]
                items-center 
               
                gap-4 inline-flex hover:border-secondary focus:bg-primary hover:bg-primary"
                type="text"
                readOnly
              />
            </div>
           
          </div>
        </div>
      </div>
        </div>
    );
}

export default ProfileInformation;