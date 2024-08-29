import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useEditContactUsMutation, useGetSingleSettingsQuery } from '../../../redux/settings/settingsApi';
import Swal from 'sweetalert2';
import Loading from '../../../utils/Loading';

const AddHelp = () => {
    const navigate = useNavigate();
const [editContactUs,{isLoading}]=useEditContactUsMutation()
const {data:contactUs,isLoading:isContactUsLoading}=useGetSingleSettingsQuery()
    const [content, setContent] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
  
    if(isContactUsLoading){
      return <Loading/>
    }
    const handleUploadScore = (values) => {
      const contactUsObj={
        whatsapp:parseFloat(values.whatsapp),
        email:values.email
      }
      editContactUs(contactUsObj)
      .then(res=>{
        if(res.data.success){
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: res.message || 'Contact and email updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }).catch(error=>{
        if(error){
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: res.message || 'contact and email not updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

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
            initialValues={{
              whatsapp:contactUs?.data?.whatsapp,
              email:contactUs?.data?.email,
            }}
            onFinish={handleUploadScore}
            //   onFinishFailed={handleCompanyInformationFailed}
            autoComplete="off"
          >
            <div className="flex gap-5">
              <Form.Item
                name="whatsapp"
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
                name="email"
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
