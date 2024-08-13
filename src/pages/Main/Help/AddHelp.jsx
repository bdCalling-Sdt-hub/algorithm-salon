import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AddHelp = () => {
    const navigate = useNavigate();

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
            Update
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
                name="adminNumber"
                label={
                  <span className="text-textColor text-[18px] ">
                   Whats App Number:
                  </span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your Number!",
                  },
                ]}
              >
                <Input
                  placeholder="Whats App Number"
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
                name="adminEmail"
                label={
                  <span className="text-textColor text-[18px] ">Email</span>
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
                  placeholder="Email"
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
          
              className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-secondary mx-auto"
            >
              Edit
            </Button>
          </Form>
        </div>
      </div>
    );
  };

export default AddHelp;
