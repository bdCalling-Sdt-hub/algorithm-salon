import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import io from "socket.io-client";
import NotificationCart from "../../../Components/NotificationCart";
import { useGetNotificationQuery } from "../../../redux/user/userApi";
import Loading from "../../../utils/Loading";
import ApiErrorAlert from "../../../utils/ApiErrorAlert";
// import Loading from '../../../Components/Loading';

// Setup the socket connection
const socket = io("http://192.168.10.11:8000");

const Notification = () => {
  const [queryString, setQueryString] = useState(`page=0&role=Admin&limit=10`);
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState([]);
  const { data, isLoading, isError, refetch,error } =
    useGetNotificationQuery(queryString,{
      refetchOnMountOrArgChange:true
    });

  useEffect(() => {
    if (data) {
      setNotifications(data?.data?.notifications);
    }
  }, [data]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userInfo"));

    socket.on(`connection`, () => {
    });
    socket.on(`notification::${user._id}`, () => {
      refetch();
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
    setQueryString(`role=Admin&limit=10&page=${page - 1}`);
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
          <ApiErrorAlert isError={isError} errorMessage={error?.error?.message}/>
          <div className="flex flex-col">
            {data?.data?.notifications.length === 0 ? (
              <p>No notifications</p>
            ) : (
              data?.data?.notifications.map((item, index) => (
                <NotificationCart key={item._id || index} item={item} />
              ))
            )}
          </div>
          <div className="flex justify-center my-10">
            <Pagination
              onChange={onChange}
              defaultCurrent={1}
              pageSize={10}
              // total={data?.pagination?.totalNotification} // Adjust accordingly
              total={data?.data?.count} // Placeholder value
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
