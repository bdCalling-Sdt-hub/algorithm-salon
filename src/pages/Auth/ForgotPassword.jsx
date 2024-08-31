import { IconLock } from "@tabler/icons-react";
import { Button, Form, Input } from "antd";

import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GoArrowLeft } from "react-icons/go";
import baseURL from "../../config";
import Swal from "sweetalert2";
import { useSendOtpToUserEmailMutation } from "../../redux/user/userApi";
import Loading from "../../utils/Loading";
// import LoadingOutlined from "antd"
import { Loading3QuartersOutlined, LoadingOutlined } from "@ant-design/icons";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [sendOtpToUserEmail, { isLoading, isError }] =
    useSendOtpToUserEmailMutation();

  const onFinish = async (values) => {
    localStorage.setItem("otpEmail", values.email);
    
    sendOtpToUserEmail(values).then((res) => {
      console.log(res)
      if (res.data) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: res?.data?.message || "Otp sent to your provided email",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/auth/verify/:${values.email}`)
      }
      if(res.error.status===401){
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: res?.error.data?.message || "You are not the user",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      
    }).catch(error=>{
      // console.log(error?.error)
      if(error){
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: error?.error.data?.message || "Otp doesn't sent to your provided email",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })

  };
  return (
    <div className="mx-[310px]  bg-primary px-[115px] py-[40px] rounded-xl border-2 border-secondary">
      <div>
        <div className="w-[500px]">
          <img src={logo} className="mx-auto w-[70%]" alt="" />
          <div className="flex items-center justify-center gap-2">
            <Link to="/auth">
              {" "}
              <GoArrowLeft className="text-[32px]" />
            </Link>

            <h1 className="text-[24px] font-medium my-[24px]">
              Forgot password
            </h1>
          </div>
          <p className="text-center mx-auto w-[80%] font-medium mb-[24px] text-[#5C5C5C] text-[16px]">
            Please enter your email address to reset your password.
          </p>
          <Form
            name="normal_login"
            // className="login-form"
            labelCol={{ span: 22 }}
            wrapperCol={{ span: 40 }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            className="space-y-1"
          >
            <Form.Item
              label={
                <span className="text-[18px] font-medium">
                  Enter Your Email
                </span>
              }
              name="email"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input
                size="large"
                placeholder="Enter Your Email"
                name="email"
                className="p-4 bg-primary rounded w-full border-2 border-secondary mt-[12px]"
                prefix={
                  <HiOutlineMailOpen
                    className="mr-2 bg-secondary rounded-full p-[6px]"
                    size={28}
                    color="white"
                  />
                }
                style={{
                  background: "#B0E3D3",
                  outline: "none",
                  marginBottom: "20px",
                }}
                required
              />
            </Form.Item>

            <Form.Item>

             
              <Button
                htmlType="submit"
                className="block w-[500px] hover:bg-secondary h-[56px] px-2 py-4 mt-2 text-white bg-secondary rounded-lg"
              >
              {isLoading ? <><LoadingOutlined size={20}/> <span>Sending OTP</span></>:"Send OTP" }
                
              </Button>
              {/* <Link to="/dashboard"
        // type="primary"
        // htmlType="submit"
        className="block text-center w-[350px] h-[56px] px-2 py-4 mt-2 hover:text-white text-white bg-[#3BA6F6] rounded-lg"
      >
        Log In
      </Link> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
