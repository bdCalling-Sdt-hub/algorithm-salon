import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Manager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate()

  const dataSource = [
    {
      key: "1",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "2",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "3",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "4",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "5",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "6",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "7",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "8",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "9",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
    {
      key: "10",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
    },
  ];

  const handleView = (record) => {
    setUser(record);
    // setIsModalOpen(true);
    navigate(`/manager-details/${record?.key}`)
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "",
      key: "",
      render: (text, _, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "Manager Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "providerName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Join Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BsInfoCircle
            onClick={() => handleView(record)}
            size={18}
            className="text-[red] cursor-pointer"
          />

          {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="month"
            suffixIcon
          /> */}
      </div>
      <div className="bg-primary  border-2 rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className="test-[24px] font-bold">Manager List</p>
          <p onClick={() => navigate('/add-manager')} className="test-[24px] font-medium text-white cursor-pointer bg-secondary px-2 py-1 rounded">Add Manager</p>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#217CC2",
                headerColor: "white",
                headerBorderRadius: 2,
                colorBgContainer: "#E9F2F9",
              },
            },
          }}
        >
          <Table
            pagination={{
              position: ["bottomCenter"],
              current: currentPage,
              // pageSize:10,
              // total:usersAll?.pagination?.Users,
              // showSizeChanger: false,
              //   onChange: handleChangePage,
            }}
            // pagination={false}
            columns={columns}
            // dataSource={usersAll?.data?.attributes}
            dataSource={dataSource}
          />
        </ConfigProvider>
      </div>


      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon
      >
        <div className="text-black bg-primary">
          <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
            <p className=" text-[26px] font-bold mb-[16px] my-10">
              Provider Details
            </p>
          </div>
          <div className="p-[20px] ">
            <div className="flex justify-between border-b py-[16px]">
              <p>Provider Name: </p>
              <p>{user?.name ? user?.name : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Email:</p>
              <p>{user?.email ? user?.email : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Phone Number:</p>
              <p>{user?.phoneNumber ? user?.phoneNumber : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Address:</p>
              <p>{user?.address ? user?.address : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Joining Date :</p>
              <p>{user?.date ? user?.date : "N/A"}</p>
            </div>
            {/* <div className="flex justify-between border-b py-[16px]">
            <p>Score:</p>
            <p>
              {user?.score ? user?.score : "N/A"}
            </p>
          </div> */}
            {/* <div className="flex justify-between border-b py-[16px]">
            <p>Driving license:</p>
            <p className="text-secondary font-bold cursor-pointer">
             Click Here
            </p>
          </div> */}
          </div>
        </div>
      </Modal>


    </div>
  );
};

export default Manager;
