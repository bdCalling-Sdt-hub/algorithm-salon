import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../../assets/Rectangle 2521.png";
import { useGetSingleSalonQuery, useVerifySalonMutation } from "../../../redux/user/userApi";
import Loading from "../../../utils/Loading";
import Swal from "sweetalert2";

const RequestDetails = () => {
  const params = useParams();
  const {
    data: salon,
    isLoading,
    isError,
    error,
  } = useGetSingleSalonQuery(params?.id);
  const [verifySalon,{isLoading:isVerifyLoading}]=useVerifySalonMutation()
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return "Error in Fetching";
  }

  const {
    _id="",
    name = "",
    address = "",
    accessabilities = [],
    contactNumber = "",
    description = "",
    coverPhotoUrl = {},
    isSubscribed,
    location = {},
    maximumCost = "",
    minimumCost = "",
    salonType,
    schedule = [],
    services = [],
    specializedFor = "",
    tags = [],
    userId=""
  } = salon?.data;

  const handleVerify=(id)=>{
    let verify={isAdminVerified:true}
    verifySalon({id,verify})
    .then(res=>{
      if(res.data.success){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Verified Successfully",
          text: res.data?.message || "verified",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      navigate(-1)
    })
    .catch(error=>{
      if(error){
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Not Verified Succesfully",
          text: error?.message || "Salon Doesn't verified due to server problem",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    })
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <div className="flex items-center p-4 border-b">
          <MdOutlineKeyboardArrowLeft
            onClick={() => navigate(-1)}
            size={34}
            className="cursor-pointer"
          />
          <h1 className="text-[24px] text-gray-700 font-semibold ml-4">
            Salon Owner Detail
          </h1>
        </div>

        {/* Image and Basic Info */}
        <div className="p-4">
          <img
            src={`http://192.168.10.11:8000:8000/${coverPhotoUrl.publicUrl}`} // Replace with actual image URL
            alt="Barber Shop"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-[22px] font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-2">{address}</p>
          <p className="text-gray-600 mt-4">{description}</p>
        </div>

        {/* Tags and Services */}
        <div className="px-4 py-4 bg-gray-50">
          <h3 className="text-[18px] font-semibold text-gray-700">Tags:</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>

          <h3 className="text-[18px] font-semibold text-gray-700 mt-6">
            Services:
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Pricing, Accessibility, and Hours */}
        <div className="px-4 py-4">
          <div className="mb-6">
            <h3 className="text-[18px] font-semibold text-gray-700">
              Price Range:
            </h3>
            <p className="text-gray-600 mt-2">
              $ {minimumCost}- $ {maximumCost}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[18px] font-semibold text-gray-700">
              Accessibility:
            </h3>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              {accessabilities.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold text-gray-700">
              Available Service Hours:
            </h3>
            <ul className="mt-2 text-gray-600">
              {schedule.map((hour, index) => (
                <li key={index} className="flex justify-between py-1">
                  <span>{hour.day}:</span>
                  <span>
                    {hour.startTime} - {hour.endTime}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact and Specialization */}
        <div className="px-4 py-4 bg-gray-50">
          <div className="mb-6">
            <h3 className="text-[18px] font-semibold text-gray-700">
              Contact Information:
            </h3>
            <p className="text-gray-600 mt-2">{contactNumber}</p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-700">
              Salon Specialization:
            </h3>
            <p className="text-gray-600 mt-2">{specializedFor}</p>
          </div>
        </div>

        {/* Accept and Reject Buttons */}
        <div className="p-4 flex justify-around">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full text-lg shadow-md transition" onClick={()=>handleVerify(userId)}>
            Accept
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full text-lg shadow-md transition" onClick={()=>navigate(-1)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
