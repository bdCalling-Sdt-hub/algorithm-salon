import {
  Alert,
  Button,
  ConfigProvider,
  DatePicker,
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
import { PoweroffOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import {
  useAddCuponMutation,
  useGetAllCuponsQuery,
  useRemoveCuponMutation,
} from "../../../redux/Cupon/cuponApi";
import { format } from "date-fns";

const AddCoupon = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();
  const [addCupon, { isLoading, isError, error }] = useAddCuponMutation();
  const {
    data: cupons,
    isLoading: cuponsLoading,
    isError: cuponError,
  } = useGetAllCuponsQuery();
  const [
    removeCupon,
    { data, isError: isRemovigError, error: removeError, isSuccess },
  ] = useRemoveCuponMutation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleDelete = (record) => {
    removeCupon(record._id).then((res) => {
      if (res.data.success) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Cupon Deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const startDateChange = (_, dateString) => {
    setStartDate(dateString);
  };

  const endDateChange = (_, dateString) => {
    setEndDate(dateString);
  };
  const columns = [
    {
      title: "#SI",
      dataIndex: "",
      key: "",
      render: (text, _, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "Coupon Code",
      dataIndex: "cuponCode",
      key: "cuponCode",
    },
    {
      title: "Package Name",
      dataIndex: "cuponValueFor",
      key: "cuponValueFor",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (val, record) => format(new Date(val),"PP")
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (val, record) => format(new Date(val),"PP")
    },
    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (val, record) => (
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

  if (isRemovigError && removeError) {
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: error.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  if (isError && error) {
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: error.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const handleUploadScore = (values) => {
    const cuponObject = {
      startDate,
      endDate,
      ...values,
      percentage: parseFloat(values.percentage),
    };
    addCupon(cuponObject).then((res) => {
      if (res.data.success) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Cupon added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
                name="cuponCode"
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
                name="cuponValueFor"
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
                  ]}
                  className=" bg-primary
              rounded w-full 
                h-[58px]
                mt-[12px]
              border-2
             "
                />
              </Form.Item>

              <div className="flex-1">
                <h1 className="text-secondary mt-[8px]  text-[18px] ">
                  Start Date
                </h1>
                <DatePicker
                  onChange={startDateChange}
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
              </div>

              <div className="flex-1">
                <h1 className="text-secondary mt-[8px] text-[18px] ">
                  End Date
                </h1>
                <DatePicker
                  onChange={endDateChange}
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
              </div>

              <Form.Item
                name="percentage"
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

            {isError && (
              <Alert
                message="Error"
                description={error.data.error}
                type="error"
                showIcon
              />
            )}
            {isLoading && (
              <Button
                htmlType="submit"
                // onClick={handleAddToBlog}
                loading={isLoading}
                icon={<PoweroffOutlined />}
                block
                className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-secondary"
              >
                Add Cupon
              </Button>
            )}

            <Button
              htmlType="submit"
              // onClick={handleAddToBlog}

              icon={<PoweroffOutlined />}
              block
              className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-secondary"
            >
              Add Cupon
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
              dataSource={cupons?.data}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;
