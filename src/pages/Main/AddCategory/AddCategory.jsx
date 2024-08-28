import { Button, Form, Input, Space } from "antd";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useAddSubscriptionMutation } from "../../../redux/subscription/subscriptionApi";
import Swal from "sweetalert2";

const AddCategory = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [addSubscription,{isLoading,isError}]=useAddSubscriptionMutation()

  const handleUploadScore = (values) => {
    const { packageName, packageAmount, duration, features = [], tagCount } = values;
    const newFeatures = features?.map((item) => ({ title: item }));
    const subscription={
      type:packageName,
      amount:parseFloat(packageAmount),
      expirationLapse:parseFloat(duration),
      features:newFeatures,
      tagCount:parseFloat(tagCount)
    }
    // console.log(subscription)
    addSubscription(subscription)
    .then((res) => {
      if (res.data) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Try Again...",
        text: error.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} />
        <h1 className="text-[24px] text-textColor font-semibold">
          Add New Subscription
        </h1>
      </div>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            feature: ["", ""],
          }}
          onFinish={handleUploadScore}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex gap-5">
            <Form.Item
              name="packageName"
              label={
                <span className="text-textColor text-[18px] ">
                  Package Name
                </span>
              }
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Services Name!",
                },
              ]}
            >
              <Input
                placeholder="Services name"
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
            <Form.Item
              name="packageAmount"
              label={
                <span className="text-secondary text-[18px] ">
                  Package Amount
                </span>
              }
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Package Amount!",
                },
              ]}
            >
              <Input
                placeholder="Package Amount"
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
              name="duration"
              label={
                <span className="text-textColor text-[18px] ">
                  Package Expiration
                </span>
              }
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Package Expiration!",
                },
              ]}
            >
              <Input
                placeholder="Package Expiration"
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
            <Form.Item
                name="tagCount"
                label={
                  <span className="text-textColor text-[18px] ">Tag Count</span>
                }
                className="flex-1"
              >
                <Input
                  placeholder="Tag Count"
                  className="p-4 bg-primary rounded w-full border-2 border-secondary mt-[12px]"
                />
              </Form.Item>
          </div>

          <div className="flex-1">
            <label
              htmlFor=""
              className="text-[#222222] text-[18px] font-medium mb-[12px]"
            >
              * Package Features
            </label>

            <Form.List
              name="features"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 2) {
                      return Promise.reject(new Error("At least 2 passengers"));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                      required={true}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input Feature or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Features"
                          // style={{
                          //   width: '100%',
                          // }}
                          className="p-4 bg-primary
                              border-2 border-secondary
                rounded 
                justify-start
                mt-[12px]
                items-center 
                gap-4"
                        />
                      </Form.Item>

                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className=" dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                      className="block w-[500px] h-[56px] mt-[30px] px-2 py-4 text-text bg-primary"
                    >
                      Add Feature
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>

          <Button
            htmlType="submit"
            // onClick={handleAddToBlog}
            block
            className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-secondary"
          >
            Add Subscription
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCategory;
