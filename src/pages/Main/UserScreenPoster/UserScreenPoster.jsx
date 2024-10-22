import React, { useState } from "react";
import { Button, Form } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ApiErrorAlert from "../../../utils/ApiErrorAlert";

const UserScreenPoster = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleUploadScore = async () => {
    if (!selectedFile) return;

    // Prepare the FormData object
    const formData = new FormData();
    formData.append("image", selectedFile); // Append the file
    formData.append("posterType", "user"); // Append additional properties

    try {
      let token = localStorage.getItem("token");
      // Make the fetch request
      const response = await fetch("http://192.168.10.11:8000/api/v1/poster", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include the Bearer token
        },
        body: formData,
      });

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
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      // Create a URL for the selected file and set it for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} />
        <h1 className="text-[24px] text-textColor font-semibold">
          User Screen Poster
        </h1>
      </div>
      <div>
        {/* <ApiErrorAlert isError={isError} errorMessage={error?.data?.error} /> */}
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          onFinish={handleUploadScore}
          autoComplete="off"
        >
          <div className="w-[300px]">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" />
            ) : (
              <img
                src="https://img.freepik.com/free-vector/abstract-digital-shape-with-geometric-shapes_1017-32180.jpg?w=2000"
                alt="Placeholder"
              />
            )}
          </div>
          <div className="flex gap-5">
            <Form.Item
              name="serviceName"
              label={
                <span className="text-textColor text-[18px]">
                  Screen Poster
                </span>
              }
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Screen Poster!",
                },
              ]}
            >
              <input
                className="p-4 bg-primary rounded w-full justify-start border-2 border-secondary mt-[12px] items-center gap-4 inline-flex"
                type="file"
                onChange={handleFileChange}
                required
              />
            </Form.Item>
          </div>

          <Button
            htmlType="submit"
            className="block w-[500px] h-[56px] mt-[30px] px-2 py-4 text-white bg-secondary mx-auto"
          >
            Add Poster
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserScreenPoster;
