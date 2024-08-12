import { Button, Form, Input, Space } from "antd";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const UserScreenPoster = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadScore = (values) => {
    // console.log(values);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
            <div className="w-[300px] ">
                <img src="https://img.freepik.com/free-vector/abstract-digital-shape-with-geometric-shapes_1017-32180.jpg?w=2000" alt="" />
            </div>
          <div className="flex gap-5">
            <Form.Item
              name="serviceName"
              label={
                <span className="text-textColor text-[18px] ">
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
            // block
            className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-secondary mx-auto"
          >
            Add Poster
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserScreenPoster;
