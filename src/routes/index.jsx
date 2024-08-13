import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./AdminRoute";
import Main from "../layouts/Main/Main";
import Auth from "../layouts/Auth/Auth";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyOtp from "../pages/Auth/VerifyOtp";
import UpdatePassword from "../pages/Auth/UpdatePassword";
import NotFound from "../Components/NotFound";
import Notification from "../pages/Main/Notification/Notification";
import ProfileInformation from "../pages/Main/ProfileInformation/ProfileInformation";
import EditProfileInformation from "../pages/Main/EditProfileInformation/EditProfileInformation";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Earnings from "../pages/Main/Earnings/Earnings";
import AllUser from "../pages/Main/AllUser/AllUser";
import Providers from "../pages/Main/Workers/Workers";
import Categories from "../pages/Main/Services/Services";
import AddCategory from "../pages/Main/AddCategory/AddCategory";
import EditCategory from "../pages/Main/EditServices/EditServices";
import Withdraw from "../pages/Main/Withdraw/Withdraw";
import Settings from "../pages/Main/Settings/Settings";
import PrivacyPolicy from "../pages/Main/Settings/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/Main/Settings/EditPrivacyPolicy";
import TermsAndConditions from "../pages/Main/Settings/TermsAndConditions";
import EditTermsAndCondition from "../pages/Main/Settings/EditTermsAndCondition";
import AboutUs from "../pages/Main/Settings/AboutUs";
import EditAboutUs from "../pages/Main/Settings/EditAboutUs";
import Workers from "../pages/Main/Workers/Workers";
import Services from "../pages/Main/Services/Services";
import Manager from "../pages/Main/Manager/Manager";
import ManagerDetails from "../pages/Main/Manager/ManagerDetails";
import ChatList from "../pages/Main/Chat-list/ChatList";
import Message from "../pages/Main/Message/Message";
import WorkersDetails from "../pages/Main/Workers/WorkersDetails";
import AddManager from "../pages/Main/Manager/AddManager";
import Requests from "../pages/Main/Requests/Requests";
import FullRecentTransaction from "../Components/FullRecentTransaction";
import SalonOwner from "../pages/Main/SalonOwnwr/SalonOwner";
import Subscription from "../pages/Main/Subscription/Subscription";
import AddCoupon from "../pages/Main/AddCoupon/AddCoupon";
import Poster from "../pages/Main/Poster/poster";
import UserScreenPoster from "../pages/Main/UserScreenPoster/UserScreenPoster";
import SplashScreenPoster from "../pages/Main/SplashScreenPoster/SplashScreenPoster";
import AddSplashScreenPoster from "../pages/Main/SplashScreenPoster/AddSplashScreenPoster";
import RegRequests from "../pages/Main/RegRequests/RegRequests";
import RequestDetails from "../pages/Main/RegRequests/RequestDetails";
import Help from "../pages/Main/Help/Help";
import AddHelp from "../pages/Main/Help/AddHelp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminRoutes><Main /></AdminRoutes>,
        children: [
            {
                path: "/",
                element: <DashboardHome />,
              },
              {
                path: "/earnings",
                element: <FullRecentTransaction />,
              },
              {
                path: "/salon-owner",
                element: <SalonOwner />,
              },
              {
                path: `/manager-details/:id`,
                element: <ManagerDetails/>,
              },
              {
                path: `/add-manager`,
                element: <AddManager/>,
              },
              {
                path: `/chat-list/:id`,
                element: <ChatList/>,
              },
              {
                path: `/chats/:id`,
                element: <Message/>,
              },
              {
                path: "/earning",
                element: <Earnings />,
              },
              {
                path: "/workers",
                element: <Workers/>,
              },
              {
                path: "/worker-details/:id",
                element: <WorkersDetails/>,
              },
              {
                path: "/subscription",
                element: <Subscription/>,
              },
              
              {
                path: "/subscription/add-subscription",
                element: <AddCategory />,
              },
              {
                path: "/subscription/add-coupon",
                element: <AddCoupon />,
              },
              {
                path: "/subscription/edit-subscription/:id",
                element: <EditCategory />,
              },
              {
                path: "/users",
                element: <AllUser/>,
              },
              {
                path: "/profile-information",
                element: <ProfileInformation/>,
              },
              {
                path: "/edit-profile/:id",
                element: <EditProfileInformation/>,
              },
              {
                path: "/poster/user-screen-poster-add",
                element: <UserScreenPoster/>,
              },
              {
                path: "/poster/splash-screen",
                element: <SplashScreenPoster/>,
              },
              {
                path: "/poster/add-splash-screen",
                element: <AddSplashScreenPoster/>,
              },
              {
                path: "/reg-requests",
                element: <RegRequests/>,
              },
              {
                path: "/reg-requests/requests-details/:id",
                element: <RequestDetails/>,
              },
              {
                path: "/poster",
                element: <Poster/>,
              },
              {
                path: "/notification",
                element: <Notification/>,
              },
              {
                path: "/poster",
                element: <Poster/>,
              },
              {
                path: "/help",
                element: <Help/>,
              },
              {
                path: "/help/add-help",
                element: <AddHelp/>,
              },
              {
                path: "/settings",
                element: <Settings/>,
              },
              {
                path: "/settings/privacy-policy",
                element: <PrivacyPolicy/>,
              },
              {
                path: "/settings/edit-privacy-policy",
                element: <EditPrivacyPolicy />,
              },
              {
                path: "/settings/terms-conditions",
                element: <TermsAndConditions/>,
              },
              {
                path: "/settings/edit-terms-conditions",
                element: <EditTermsAndCondition/>,
              },
              {
                path: "/settings/about-us",
                element: <AboutUs/>,
              },
              {
                path: "/settings/edit-about-us",
                element: <EditAboutUs/>,
              },
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth",
            element: <Login/>,
          },
          // {
          //   path: "login",
          //   element: <Login />,
          // },
          {
            path: "forgot-password",
            element: <ForgotPassword/>,
          },
          {
            path: "verify/:email",
            element: <VerifyOtp />,
          },
          {
            path: "update-password/:email",
            element: <UpdatePassword/>,
          },
        ],
      },
      {
         path: "*",
      element: <NotFound />,
    },
])

export default router