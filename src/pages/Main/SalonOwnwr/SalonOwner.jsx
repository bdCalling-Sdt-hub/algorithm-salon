import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useGetAllUsersQuery } from "../../../redux/user/userApi";
import Loading from "../../../utils/Loading";
import { format } from "date-fns";

const SalonOwner = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryString, setQueryString] = useState(
    `role=SalonOwner&limit=10&page=0&verified=true`
  );
  const [user, setUser] = useState();
  const { data, isLoading } = useGetAllUsersQuery(queryString,{
    refetchOnMountOrArgChange:true
  });

  const dataSource = [
    {
      key: "1",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "2",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "3",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "4",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "5",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "6",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "7",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "8",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "9",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
    {
      key: "10",
      email: "ahad.aiman@gmail.com",
      name: "Ahad",
      phoneNumber: "0123456787",
      age: 32,
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      date: "2022-12-12",
      subscription: "Subscribed",
    },
  ];

  if (isLoading) {
    return <Loading />;
  }
  const handleView = (record) => {
    setUser(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "",
      key: "",
      render: (text, _, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subscription Status",
      dataIndex: "isSubscribed",
      key: "isSubscribed",
      render: (_, record) => (record?.isSubscribed ? "subscribed" : "N/A"),
    },
    {
      title: "Join Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => {
        return format(new Date(record.createdAt), "PP");
      },
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
  const handleChangePage = (page) => {
    setQueryString(`role=SalonOwner&limit=10&page=${page - 1}&verified=true`);
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
      </div>
      <div className="bg-primary  border-2 rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className=" test-[24px] font-bold">Salon Owner List</p>
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
            pagination={{
              position: ["bottomCenter"],
              current: currentPage,
              pageSize: 10,
              total: data?.data?.count,
              onChange: handleChangePage,
            }}
            columns={columns}
            dataSource={data?.data?.user}
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
              Salon Owner Details
            </p>
          </div>
          <div className="p-[20px] ">
            <div className="flex justify-between border-b py-[16px]">
              <p>User Name: </p>
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
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SalonOwner;
