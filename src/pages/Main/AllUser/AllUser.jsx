import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useGetAllUsersQuery } from "../../../redux/user/userApi";
import Loading from "../../../utils/Loading";
import { format } from "date-fns";

const AllUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryString, setQueryString] = useState(`role=User&limit=10&page=0`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetAllUsersQuery(queryString);
  const [user, setUser] = useState();

  if (isLoading) {
    return <Loading />;
  }

  const handleView = (record) => {
    setUser(record);
    setIsModalOpen(true);
  };
  // console.log(data?.data?.user)

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
      key: "providerName",
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
        </Space>
      ),
    },
  ];

    const handleChangePage=(page)=>{
      setQueryString(`role=User&limit=10&page=${page-1}`)
      setCurrentPage(page)
    }

  
  return (
    <div>
      <div className="flex justify-between items-center">
        <DatePicker className="custom-date-picker" picker="month" suffixIcon />
      </div>
      <div className="bg-primary  border-2 rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className=" test-[24px] font-bold">User List</p>
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
              // showSizeChanger: false,
                onChange: handleChangePage,
            }}
            // pagination={true}
            columns={columns}
            // dataSource={usersAll?.data?.attributes}
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
              User Details
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
            <div className="flex justify-between border-b py-[16px]">
              <p>Joining Date :</p>
              <p>
                {user?.createdAt
                  ? format(new Date(user?.createdAt), "PP")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AllUser;
