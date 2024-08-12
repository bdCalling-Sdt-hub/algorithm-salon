import React from "react";
import { useNavigate } from "react-router-dom";

const WorkersDetails = () => {
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
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-black bg-primary">
        <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
          <p className=" text-[26px] font-bold mb-[16px] my-10">
            Workers Details
          </p>
        </div>
        <div className="p-[20px] ">
          <div className="flex justify-between border-b py-[16px]">
            <p>Workers Name: </p>
            <p>{dataSource?.[0].name ? dataSource?.[0].name : "N/A"}</p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Email:</p>
            <p>{dataSource?.[0].email ? dataSource?.[0].email : "N/A"}</p>
          </div>
          <div className="flex justify-between border-b py-[16px] ">
            <p>Phone Number:</p>
            <p>
              {dataSource?.[0].phoneNumber
                ? dataSource?.[0].phoneNumber
                : "N/A"}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px] ">
            <p>Address:</p>
            <p>{dataSource?.[0].address ? dataSource?.[0].address : "N/A"}</p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Joining Date :</p>
            <p>{dataSource?.[0].date ? dataSource?.[0].date : "N/A"}</p>
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
      <p
        onClick={() => navigate(`/chat-list/${1}`)}
        className="w-[20%] mx-auto bg-secondary my-5 flex justify-center text-2xl text-white py-4 rounded-lg cursor-pointer"
      >
        See Chat List
      </p>
    </div>
  );
};

export default WorkersDetails;
