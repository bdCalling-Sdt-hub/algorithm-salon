
import React, { useRef, useState } from "react";
import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useGetTransectionsQuery } from "../redux/summary/summary";
import Loading from "../utils/Loading";
import { useReactToPrint } from "react-to-print";

const RecentTransaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const myRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();
  const { data, isLoading } = useGetTransectionsQuery();
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });
  if (isLoading) {
    return <Loading />;
  }


  const dataSource = [
    // Example data, replace with actual data
    {
      key: "1",
      transactionId: "12345678",
      name: "Ahad",
      providerName: "Ahad Hossain",
      age: 32,
      amount: 3000,
      date: "2022-12-12",
      address: "35/2 pri Street",
      email: "admin@gmail.com",
    },
    // Other rows...
  ];

  const handleView = (record) => {
    setUser(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "#Tr.ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Subscription",
      dataIndex: "packageName",
      key: "packageName",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
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
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* Optional DatePicker */}
      </div>
      <div className="bg-primary border-2 rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className="text-[24px] font-bold">Recent Transactions</p>
        </div>
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
            pagination={false}
            columns={columns}
            dataSource={data?.data?.transections}
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
            <p className="text-[26px] font-medium text-textColor mb-[16px] my-10">
              Service Requests
            </p>
          </div>
          <div className="p-[20px] " ref={myRef}>
            <div className="flex justify-between border-b py-[16px]">
              <p>#Application.ID: </p>
              <p>{user?.transactionId ? user?.transactionId : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>{user?.date ? user?.date : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>User Name:</p>
              <p>{user?.name ? user?.name : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Amount :</p>
              <p>{user?.amount ? user?.amount : "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Subscription:</p>
              <p>{user?.packageName ? user?.packageName : "N/A"}</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 items-center pt-[16px] p-[20px]">
            <p
              className="px-[55px] cursor-pointer py-[10px] bg-secondary text-white rounded-lg"
              onClick={handlePrint}
            >
              Print
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RecentTransaction;
