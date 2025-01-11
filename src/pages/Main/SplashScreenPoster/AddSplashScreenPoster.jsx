import { Button, Form, Input, Space } from "antd";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useGetAllPosterQuery } from "../../../redux/poster/posterApi";
import ApiErrorAlert from "../../../utils/ApiErrorAlert";

const AddSplashScreenPoster = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const {data,isLoading,isError,error}=useGetAllPosterQuery()

 
  const handleUploadScore = async (values) => {
    // console.log(values)
    // Prepare the FormData object
    const formData = new FormData();
    formData.append("image", selectedFile); // Append the file
    formData.append("posterType", "splash"); // Append additional properties
    formData.append("headline",values.statusHeadline)
    formData.append("status",values.status)
    try {
      let token=localStorage.getItem("token")
      // Make the fetch request
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/poster`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include the Bearer token
          // "Content-Type": "multipart/form-data", // Do not set Content-Type header manually with FormData
        },
        body: formData,
      });
      console.log("Value")
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the response
      const result = await response.json();

      // Display success message
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: result.message || "File uploaded successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Upload failed:", error);
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


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} />
        <h1 className="text-[24px] text-textColor font-semibold">
          Splash Screen Poster
        </h1>
      </div>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          // initialValues={{
          //   remember: true,
          //   matchName: result?.matchName,
          //   eventName: result?.eventDetails?.eventName,
          // }}
          onFinish={handleUploadScore}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex gap-5">
            <Form.Item
              name="statusHeadline"
              label={
                <span className="text-textColor text-[18px] ">
                  Status Headline
                </span>
              }
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Status Headline!",
                },
              ]}
            >
              <Input
                placeholder="Status Headline"
                className="p-4 bg-primary
              rounded w-full 
              justify-start 
              border-2
              border-secondary
              mt-[12px]
              items-center 
              gap-4 inline-flex focus:bg-primary hover:bg-primary focus:border-secondary hover:border-secondary"
              />
            </Form.Item>
          </div>
          <div className="flex gap-5">
            <Form.Item
              name="status"
              label={
                <span className="text-textColor text-[18px] ">Status</span>
              }
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Status!",
                },
              ]}
            >
              <Input
                placeholder="Status"
                className="p-4 bg-primary
              rounded w-full 
              justify-start 
              border-2
              border-secondary
              mt-[12px]
              items-center 
              gap-4 inline-flex focus:bg-primary hover:bg-primary focus:border-secondary hover:border-secondary"
              />
            </Form.Item>
          </div>

          <div className="flex gap-5">
            <Form.Item
              name=""
              label={
                <span className="text-textColor text-[18px] ">
                  Upload Splash Screen Poster
                </span>
              }
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Splash Screen Poster!",
                },
              ]}
            >
              <input
                className="p-4 bg-primary
            rounded w-full 
            justify-start 
            border-2 
            border-secondary
            mt-[12px]
            
            items-center 
            gap-4 inline-flex"
                type="file"
                onChange={handleFileChange}
                // accept=".csv"
                required
              />
            </Form.Item>
          </div>

          <Button
            htmlType="submit"
            // onClick={handleAddToBlog}
            block
            className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-secondary"
          >
            Add Splash Screen Poster
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddSplashScreenPoster;
