import { Button, Form, Input, Space } from 'antd';
import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AddManager = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);


    const handleUploadScore = (values) => {
        // console.log(values);
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
    return (
        <div className="ml-[24px] overflow-auto">
    <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
      <MdOutlineKeyboardArrowLeft
        onClick={() => navigate(`/manager`)}
        size={34}
      />
      <h1 className="text-[24px] text-textColor font-semibold">
        Add New Manager
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
            name="managerName"
            label={
              <span className="text-textColor text-[18px] ">Manager Name</span>
            }
            className="flex-1"
            rules={[
              {
                required: true,
                message: "Please input your Manager Name!",
              },
            ]}
          >
            <Input
              placeholder="Manager name"
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
            name="phoneNumber"
            label={
              <span className="text-textColor text-[18px] ">Phone Number</span>
            }
            className="flex-1"
            rules={[
              {
                required: true,
                message: "Please input your Phone Number!",
              },
            ]}
          >
            <Input
              placeholder="Phone Number"
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
            name="phoneNumber"
            label={
              <span className="text-textColor text-[18px] ">Email Address</span>
            }
            className="flex-1"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              placeholder="E-Mail"
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
            name="phoneNumber"
            label={
              <span className="text-textColor text-[18px] ">Password</span>
            }
            className="flex-1"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              type="password"
              placeholder="Password"
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

       
        <Button
          htmlType="submit"
          // onClick={handleAddToBlog}
          block
          className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-secondary"
        >
          Add Manager
        </Button>
      </Form>
    </div>
    </div>
    );
}

export default AddManager;
