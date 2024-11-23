import { Button, Form, Input, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {
  useEditSubscriptionMutation,
  useGetSingleSubscriptionQuery,
} from "../../../redux/subscription/subscriptionApi";
import Loading from "../../../utils/Loading";
import FeatureComponent from "./EditableFeatures";
import Swal from "sweetalert2";

const EditServices = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, isError } = useGetSingleSubscriptionQuery(params.id);
  const [
    editSubscription,
    { isLoading: isSubscriptionLoading, isError: isSubscriptionError },
  ] = useEditSubscriptionMutation();
  const [features, setFeatures] = useState([]);

  const [initialFeatures, setInitialFeatures] = useState([]);

  useEffect(() => {
    if (data?.data?.features?.length > 0) {
      setInitialFeatures(data.data.features.map((feature) => feature.title));
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return "Error Happened";
  }

  const subscription = data?.data;
  const { type, amount, expirationLapse, tagCount } = subscription;

  const handleFeaturesChange = (updatedFeatures) => {
    setFeatures(updatedFeatures);
    // You can also perform other actions here, like submitting data
  };
  const handleForm = async (values) => {
    const { type, amount, expirationLapse, tagCount } = values;
    const newFeatures = features?.map((item) => ({ title: item }));
    
    const subscription = {
      type,
      amount: parseFloat(amount),
      expirationLapse: parseFloat(expirationLapse),
      features: newFeatures,
      tagCount: parseFloat(tagCount),
    };
  
    try {
      const res = await editSubscription({ id: params.id, data: subscription }).unwrap();
      
      if (res) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: res.message || 'Subscription updated successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error('Subscription update error:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Try Again...',
        text: error.message || 'An unexpected error occurred.',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  

  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} />
        <h1 className="text-[24px] text-textColor font-semibold">
          Edit Subscription
        </h1>
      </div>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            type: type,
            amount: amount,
            tagCount: tagCount,
            expirationLapse: expirationLapse,
          }}
          onFinish={handleForm}
          autoComplete="off"
        >
          <div className="flex gap-5">
          <Form.Item
           label={
            <span className="text-secondary text-[18px] ">
              Package Name
            </span>
          }
          name="type"
              className="flex-1 rounded-sm"
          rules={[
            {
              required: true,
              message: "Please input hotspot available!",
            },
          ]}
        >
          <Select
            placeholder="Basic"
            size="large"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            
            options={[
              {
                value: "Basic",
                label: "Basic",
              },
              {
                value: "Standard",
                label: "Standard",
              },
              {
                value: "Premium",
                label: "Premium",
              },
              {
                value: "VIP",
                label: "VIP",
              },
              {
                value: "Silver",
                label: "Silver",
              },
              {
                value: "Gold",
                label: "Gold",
              },
              {
                value: "Platinum",
                label: "Platinum",
              },
              {
                value: "Diamond",
                label: "Diamond",
              },
            ]}
         className="mt-[12px] gap-4 "
         style={{height:"58px" }}
          />
        </Form.Item>
            <Form.Item
              name="amount"
              label={
                <span className="text-secondary text-[18px] ">
                  Package Amount
                </span>
              }
              className="flex-1"
            >
              <Input
                placeholder="Package Amount"
                className="p-4 bg-primary rounded w-full border-2 border-secondary mt-[12px]"
              />
            </Form.Item>
          </div>

          <div className="flex gap-5">
            <Form.Item
              name="expirationLapse"
              label={
                <span className="text-textColor text-[18px] ">
                  Package Expiration
                </span>
              }
              className="flex-1"
            >
              <Input
                placeholder="Package Expiration"
                className="p-4 bg-primary border-2 border-secondary rounded mt-[12px]"
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
            <label className="text-[#222222] text-[18px] font-medium mb-[12px]">
              * Package Features
            </label>
          </div>
          <FeatureComponent
            initialFeatures={initialFeatures}
            onFeaturesChange={handleFeaturesChange}
          />
          <Button
            htmlType="submit"
            block
            className="block w-[500px] h-[56px] mt-[30px] px-2 py-4 text-white bg-secondary"
          >
            Add Subscription
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditServices;
