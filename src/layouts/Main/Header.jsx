import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge, Dropdown, Button, Menu } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { io } from "socket.io-client";
// import SearchBox from "../SearchBox/SearchBox";
const socket = io(`${import.meta.env.VITE_IMAGE_BASE_URL}`);
const Header = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    let user = localStorage.getItem("userInfo");

    if (!user) {
      navigate("auth");
    } else {
      user = JSON.parse(user);
    }
    socket.on(`notification::${user._id}`, (notification) => {
      setNotifications((prevNotifications) => [
        notification,
        ...prevNotifications,
      ]);
    });
    // Cleanup on component unmount
    return () => {
      socket.off(`notification::${user._id}`);
    };
  }, []);

  const handleNotification = () => {
    setNotifications([]);
    navigate("notification");
  };
  return (
    <div className="flex justify-between items-center rounded-md mb-[24px] p-[16px] bg-primary">
      <div className="flex items-center gap-5">
        <MdMenu className="h-[42px] w-[42px] text-secondary" />
        {location.pathname == "/dashboard/users" ||
        location.pathname == "/dashboard/appointments" ||
        location.pathname == "/dashboard/earnings" ? (
          <div className="">{/* <SearchBox /> */}</div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex gap-5">
        {/* <Dropdown overlay={menu} placement="bottomRight" arrow> */}
        <div
          // onClick={(e) => navigate("notification")}
          className="relative flex items-center "
          onClick={() => handleNotification()}
        >
          <Badge
            style={{ backgroundColor: "red" }}
            count={notifications.length}
          >
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={` bg-primary w-[52px] h-[52px] text-secondary border-2 border-secondary rounded-full p-2 `}
            />
          </Badge>
        </div>
        {/* </Dropdown> */}
        <div
          onClick={() => navigate("profile-information")}
          className="flex items-center cursor-pointer mr-[30px] bg-primary text-white rounded-full p-1"
        >
          <FaRegUser className="text-secondary border-2 border-secondary rounded-full p-2 w-[52px] h-[52px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
