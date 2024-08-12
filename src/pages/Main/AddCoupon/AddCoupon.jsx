import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Select,
  Space,
  Table,
} from "antd";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AddCoupon = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();

  const dataSource = [
    {
      key: "1",
      couponCode: "ABC123",
      packageName: "Standard",
      startDate: "2023-12-12",
      endDate: "2024-12-12",
      percentage: 10,
    },
    {
      key: "1",
      couponCode: "ABC123",
      packageName: "Standard",
      startDate: "2023-12-12",
      endDate: "2024-12-12",
      percentage: 10,
    },
  ];
  const handleDelete = (record) => {
      console.log(record);
      
  }

  const columns = [
    {
      title: "#SI",
      dataIndex: "",
      key: "",
      render: (text, _, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "Coupon Code",
      dataIndex: "couponCode",
      key: "name",
    },
    {
      title: "Package Name",
      dataIndex: "packageName",
      key: "providerName",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "phoneNumber",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "date",
    },
    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "date",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Button
          onClick={() => {
            handleDelete(record);
          }}
        >
          X
        </Button>
      ),
    },

  ];

  const handleUploadScore = (values) => {
    console.log(values);
  };

  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} />
        <h1 className="text-[24px] text-textColor font-semibold">Add Coupon</h1>
      </div>

      <div className="space-y-4">
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
                name="couponCode"
                label={
                  <span className="text-secondary text-[18px] ">
                    Coupon Code
                  </span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your Coupon Code!",
                  },
                ]}
              >
                <Input
                  placeholder="Coupon Code"
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
                name="package"
                label={
                  <span className="text-secondary  text-[18px] ">Package</span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your Package!",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Select a Package"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Basic",
                    },
                    {
                      value: "2",
                      label: "Standard",
                    },
                    {
                      value: "3",
                      label: "Premium",
                    },
                  ]}
                  className=" bg-primary
              rounded w-full 
                h-[58px]
                mt-[12px]
              border-2
             "
                />
              </Form.Item>

              <Form.Item
                name="startDate"
                label={
                  <span className="text-secondary text-[18px] ">
                    Start Date
                  </span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your Start Date!",
                  },
                ]}
              >
                <Input
                  placeholder="Start Date"
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
                name="endDate"
                label={
                  <span className="text-secondary text-[18px]">End Date</span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your End Date!",
                  },
                ]}
              >
                <Input
                  placeholder="End Date"
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
                    Percentage
                  </span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your Percentage!",
                  },
                ]}
              >
                <Input
                  placeholder="%"
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
              Add Subscription
            </Button>
          </Form>
        </div>
        <div>
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: "#00A572",
                  headerColor: "white",
                  headerBorderRadius: 2,
                  colorBgContainer: "#E6F6F1",
                },
              },
            }}
          >
            <Table
            //   pagination={{
            //     position: ["bottomCenter"],
            //     current: currentPage,
            //     // pageSize:10,
            //     // total:usersAll?.pagination?.Users,
            //     // showSizeChanger: false,
            //     //   onChange: handleChangePage,
            //   }}
              pagination={false}
              columns={columns}
              // dataSource={usersAll?.data?.attributes}
              dataSource={dataSource}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;
