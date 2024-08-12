import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Requests = () => {
  const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState();
  
    const dataSource = [
      {
        key: '1',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '2',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '3',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '4',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '5',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '5',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '5',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '5',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '5',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
      {
        key: '5',
        transactionId: '12345678',
        name:"Ahad",
        providerName:"Ahad Hossain",
        age: 32,
        amount: 3000,
        date:"2022-12-12",
        address:"35/2 pri Street",
        email:"admin@gmail.com"
      },
    ];


  
    const handleView = (record) => {
      // setUser(record);
      navigate(`/reg-requests/requests-details/${record?.key}`);
      // setIsModalOpen(true);
    }
  
    const columns = [
      {
        title: "#Aplication.ID",
        dataIndex: "transactionId",
        key: "transactionId",
        // render: (text,_,index) => (currentPage - 1) * 10 + index + 1,
      },
      {
        title: "Customer Name",
        dataIndex: "name",
        key: "name",
        // render: (_, record) => (
        //   <div className="flex gap-2 items-center">
        //     <img
        //       className="w-[34px] h-[34px] rounded-full"
        //       src={`${import.meta.env.VITE_BASE_URL}${record?.image?.publicFileURL}`}
        //       alt=""
        //     />
        //     <p className="font-medium">{record.name}</p>
        //   </div>
        // ),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'providerName',
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "amount",
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        // render: (_, record) => (
        //   <p>{record?.club ? record?.club : "N/A"}</p>
        // )
      },
      // {
      //   title: "Date",
      //   key: "date",
      //   dataIndex: "date",
      //   render: (_, record) => (
      //     <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
      //   )
      // },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
           
              <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" />
            
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
              <p className=" test-[24px] font-bold">Employee Requests</p>
            </div>
            <ConfigProvider
    theme={{
      components: {
        Table: {
          headerBg: "#217CC2",
          headerColor:"white",
          headerBorderRadius: 2,
          colorBgContainer: "#E9F2F9",
        },
      },
    }}
  >
  
  
            <Table
          //   pagination={{
          //     position: ["bottomCenter"],
          //     current: currentPage,
          //       // pageSize:10,
          //       // total:usersAll?.pagination?.Users,
          //       // showSizeChanger: false,
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
      );
}

export default Requests;
