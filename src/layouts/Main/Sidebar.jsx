import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { HiLogout } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
import { FaCalendarDays } from "react-icons/fa6";
import { IoChatbubblesSharp } from "react-icons/io5";
import { RiCurrencyLine } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { HiOutlineBars4 } from "react-icons/hi2";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import Swal from "sweetalert2";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    // Swal.fire({
    //   title: "Do you want to Logout from here?",
    //   showDenyButton: true,
    //   showCancelButton: false,
    //   confirmButtonText: "Yes",
    //   denyButtonText: `No`,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user-update");

    //     navigate("/auth");
    //   } else if (result.isDenied) {
    //     Swal.fire("Ok", "", "info");
    //   }
    // });

    navigate("/auth");
  };
  return (
    <div className="w-[350px] flex flex-col text-primary justify-between bg-secondary min-h-screen rounded-lg border-2 ">
      <div className="">
        <div className="pt-[10px]">
          <img className="w-[120px] mx-auto" src={logo} alt="" />
        </div>
        <div className="">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                    : isActive
                    ? "flex text-secondary gap-2 cursor-pointer items-center text-[22px] font-medium p-[10px] bg-primary m-[16px] rounded-lg "
                    : "flex text-white gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] m-[16px] rounded-lg"
                }
              >
                <div className="flex justify-start items-center gap-2">
                  <BiSolidDashboard width={25} height={25} /> Dashboard
                </div>
              </NavLink>
            </li>
            <NavLink
              to="/earnings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <RiCurrencyLine width={25} height={25} />
                Earnings
              </div>
            </NavLink>

            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <HiOutlineUsers width={25} height={25} />
                All Users
              </div>
            </NavLink>

            <NavLink
              to="/salon-owner"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <HiOutlineDocumentAdd width={25} height={25} />
                Salon Owner
              </div>
            </NavLink>
            <NavLink
              to="/subscription"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[28px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <HiOutlineBars4 width={25} height={25} />
                Subscription
              </div>
            </NavLink>

            <NavLink
              to="/poster"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[28px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <RiExchangeDollarLine width={35} height={35} />
                Poster
              </div>
            </NavLink>

            <NavLink
              to="/reg-requests"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[28px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <RiExchangeDollarLine width={35} height={35} />
                Reg requests
              </div>
            </NavLink>

            <NavLink
              to="/help"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[28px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <RiExchangeDollarLine width={35} height={35} />
                Help
              </div>
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#281F1F] m-[16px] rounded-lg"
                  : isActive
                  ? "flex text-secondary gap-2 cursor-pointer items-center  text-[22px] font-medium p-[10px] bg-primary  m-[16px] rounded-lg"
                  : "flex  gap-2 cursor-pointer items-center text-[22px] font-medium p-[10px]  m-[16px] rounded-lg"
              }
            >
              <div className="flex justify-start items-center gap-2">
                <CiSettings width={25} height={25} />{" "}
                <span className="flex-1">Settings</span>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="mb-[32px]">
        <div
          onClick={handleLogOut}
          className="flex items-center ml-[18px] cursor-pointer gap-2 text-[red] font-medium"
        >
          <HiLogout width={25} height={25} />
          <span className="text-[20px] ">Log Out</span>
        </div>
        {/* <Link to="/" className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#3BA6F6] font-medium">
            
          </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
