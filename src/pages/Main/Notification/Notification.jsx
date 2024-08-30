import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import io from "socket.io-client";
import NotificationCart from "../../../Components/NotificationCart";
import { useGetNotificationQuery } from "../../../redux/user/userApi";
import Loading from "../../../utils/Loading";
// import Loading from '../../../Components/Loading';

// Setup the socket connection
const socket = io("http://localhost:8000");

const Notification = () => {
  const [queryString, setQueryString] = useState(``);
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState([]);
  const { data, isLoading, isError } = useGetNotificationQuery(queryString);

  useEffect(() => {
    if (data) {
      setNotifications(data?.data?.notifications);
    }
  }, [data]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setQueryString(`role=Admin`);
    }
    // console.log(user)
    // Handle new notifications
    socket.on(`connection`, () => {
      console.log("connection");
    });
    socket.on(`notification::${user._id}`, (notification) => {
      setNotifications((prevNotifications) => [
        notification,
        ...prevNotifications,
      ]);
    });
    // Cleanup on component unmount
    return () => {
      socket.off(`disconnect`);
      socket.off(`notification::${user._id}`);
    };
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  const onChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="pl-[24px]">
        <div className="rounded-xl overflow-hidden">
          <div>
            <h1 className="text-[24px] text-black font-semibold pb-3">
              Notification
            </h1>
          </div>
          <div className="flex flex-col">
            {notifications.length === 0 ? (
              <p>No notifications</p>
            ) : (
              notifications.map((item, index) => (
                <NotificationCart key={item._id || index} item={item} />
              ))
            )}
          </div>
          <div className="flex justify-center my-10">
            <Pagination
              onChange={onChange}
              defaultCurrent={1}
              // total={data?.pagination?.totalNotification} // Adjust accordingly
              total={20} // Placeholder value
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
