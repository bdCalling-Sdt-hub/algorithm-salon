import { Button, Form, Input } from "antd";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { IconLock } from "@tabler/icons-react";
import baseURL from "../../config";
import Swal from "sweetalert2";
import { useUpdatePasswordMutation } from "../../redux/user/userApi";
// import Password from "antd/es/input/Password";
// import Password from "antd/es/input/Password";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { email } = useParams();
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const onFinish = async (values) => {
    let body = {
      email: email.slice(1, email.length),
      password: values.enter_password,
    };
    // Retrieve the token from local storage
    const forgetPasswordToken = localStorage.getItem("forgetPasswordToken");

    // Define the request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${forgetPasswordToken}`, // Include the token in headers
      },
      body: JSON.stringify(body),
    };

    try {
      // Send the request using fetch
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/user/change-password`,
        requestOptions
      );

      // Check if the response is OK (status in the range 200-299)
      if (response.ok) {
        const data = await response.json();
// console.log(data)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: data.message || "Password Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/auth");
        localStorage.removeItem("forgetPasswordToken");
        localStorage.removeItem("otpEmail");
      } else {
        // Handle HTTP errors
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Try Again...",
          text: errorData.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      // Handle network or unexpected errors
      Swal.fire({
        icon: "error",
        title: "Something went wrong...",
        text: error.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    // navigate("/auth");
  };

  return (
    <div className="mx-[310px]  bg-primary border-2 border-secondary px-[100px] py-[40px] rounded-xl ">
      <div className="flex gap-[120px]">
        <div className="w-[500px]">
          <img src={logo} className="mx-auto w-[50%]" alt="" />
          <div className="flex justify-center items-center gap-1 my-[10px]">
            <Link to="/auth/forgot-password">
              <GoArrowLeft className="text-[24px]" />
            </Link>

            <h1 className="text-[24px] font-medium ">Reset Password</h1>
          </div>

          <p className="text-[#4E4E4E] text-[16px] mb-[10px]">
            Your password must be 8-10 character long.
          </p>

          <Form
            form={form}
            name="dependencies"
            autoComplete="off"
            style={{
              maxWidth: 600,
            }}
            layout="vertical"
            className="space-y-2 fit-content object-contain"
            onFinish={onFinish}
          >
            <Form.Item
              name="enter_password"
              label={
                <span className="text-secondary text-[16px] font-medium">
                  New Password
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please Input Your Password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                // onChange={handleChange}
                placeholder="Set your password"
                name="set_password"
                prefix={
                  <IconLock
                    className="mr-2 bg-secondary rounded-full p-[6px]"
                    size={28}
                    color="white"
                  />
                }
                className="border-2 border-secondary h-[62px] bg-primary"
                style={{
                  height: "62px",
                  background: "#B0E3D3",
                  outline: "none",
                  // marginBottom: "2px",
                }}
                // bordered={false}
              />
            </Form.Item>

            {/* Field */}
            <Form.Item
              name="re_enter_password"
              label={
                <span className="text-secondary text-[16px] font-medium">
                  Confirm Password
                </span>
              }
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("enter_password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                // onChange={handleChange}
                placeholder="Enter Your Password"
                name="re_enter_password"
                prefix={
                  <IconLock
                    className="mr-2 bg-secondary rounded-full p-[6px]"
                    size={28}
                    color="white"
                  />
                }
                className="border-2 border-secondary h-[62px] bg-primary"
                style={{
                  height: "62px",
                  background: "#B0E3D3",
                  outline: "none",
                  // marginBottom: "2px",
                }}
                // bordered={false}
              />
            </Form.Item>
            <Form.Item>
              <Button
                // style={{
                //   backgroundColor: "#95C343",
                //   color: "#fff",
                //   size: "18px",
                //   height: "56px",
                // }}
                htmlType="submit"
                className="block w-[500px] hover:bg-secondary h-[56px] px-2 py-4 mt-2 text-white bg-secondary rounded-lg"
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
