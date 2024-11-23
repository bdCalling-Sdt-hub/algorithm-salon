import { Button, Form, Input, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import {
  useGetUserProfileQuery,
  useUpdateProfileInfoMutation,
} from "../../../redux/user/userApi";
import Loading from "../../../utils/Loading";

const EditProfileInformation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [
    updateProfileInfo,
    { isLoading: profileInfoLoading, isError: profileInfoError },
  ] = useUpdateProfileInfoMutation();
  const [imageUrl, setImageUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (data && data.data?.profilePictureUrl) {
      setImageUrl(`${import.meta.env.VITE_IMAGE_BASE_URL}/${data.data.profilePictureUrl}`);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading profile</div>;

  const {
    name = "",
    email = "",
    role = "",
    profilePictureUrl = "",
    profileId = {},
  } = data?.data || {};

  const handleUpdateProfile = async (values) => {
    const { contactNumber, email, name } = values;
    const data = {
      name,
      contactNumber,
      email,
    };
    updateProfileInfo({ id, data })
    .then(res=>{
      console.log(res)
      if(res.data){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: res.data.message || "File uploaded successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if(res.error){
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "update failed",
          text: res.error.message || "Fail to Update",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }).catch (error=> {
      console.log("Error is Here")
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "File upload failed",
        text: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    })
    // Implement update profile logic here
  };

  const handleFileChange = async (event) => {
    // console.log(event);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    formData.append("userId", id);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/profile-picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: result.message || "File uploaded successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "File upload failed",
        text: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
console.log(data.data.contactNumber)
  return (
    <div>
      <div
        onClick={() => navigate("/profile-information")}
        className="flex cursor-pointer items-center mt-[40px] mb-[63px]"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
        <h1 className="text-[20px] font-medium"> Edit Profile</h1>
      </div>
      <div className="ml-[24px] p-[36px] rounded-xl">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleUpdateProfile}
        >
          <div className="flex gap-5 rounded-xl">
            <div className="w-[33%] bg-primary ml-[24px] flex flex-col justify-center items-center">
              <div className="w-[242px] bg-primary h-[242px] relative rounded-full flex flex-col justify-center items-center">
                <img
                  className="w-[242px] h-[242px] rounded-full flex justify-center items-center opacity-50"
                  src={imageUrl}
                  alt="Profile"
                />

                <Form.Item name="image" className="flex-1 ">
                  <input
                    type="file"
                    className="bg-primary "
                    onChange={handleFileChange}
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col justify-center items-center">
                {/* <p className="text-[20px]">{role?.toUpperCase()}</p> */}
                <h1 className="text-[30px] font-medium">
                  {name?.toUpperCase()}
                </h1>
              </div>
            </div>

            <div className="flex-1 w-[66%]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex gap-[25px]">
                  <div className="flex-1">
                    <Form.Item
                      label={
                        <span className="text-[18px] font-medium">Name</span>
                      }
                      name="name"
                      rules={[
                        { required: true, message: "Please input your Name!" },
                      ]}
                      initialValue={name}
                    >
                      <Input
                        placeholder="Name"
                        className="p-4 bg-primary rounded w-full border-2 border-secondary mt-[12px]"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className="text-[18px] font-medium">Email</span>
                    }
                    name="email"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                    ]}
                    initialValue={email}
                  >
                    <Input
                      placeholder="Email"
                      className="p-4 bg-primary rounded w-full border-2 border-secondary mt-[12px]"
                    />
                  </Form.Item>
                </div>
                <div className="flex-1">
                 
                  <Form.Item
                    label={
                      <span className="text-[18px] font-medium">Phone</span>
                    }
                    name="contactNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your contact Number!",
                      },
                    ]}
                    initialValue={data.data.contactNumber | 123456}
                  >
                    <Input
                      placeholder="Phone number"
                      className="p-4 bg-primary rounded w-full border-2 border-secondary mt-[12px]"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <Button
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-secondary text-white"
          >
            Update profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfileInformation;
