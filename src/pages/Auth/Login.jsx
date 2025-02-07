import { Button, Checkbox, Form, Input } from "antd";

import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import baseURL from "../../config";
import Swal from "sweetalert2";
import { IconLock } from "@tabler/icons-react";
import { useLoginMutation } from "../../redux/user/userApi";
import { useEffect } from "react";
import ApiErrorAlert from "../../utils/ApiErrorAlert"
import Loading from "../../utils/Loading";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const isTokenExist = localStorage.getItem("token");
    
    if (isTokenExist) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, []);

  const onFinish = async ({ email, password }) => {
    login({ email, password })
      .then((res) => {

        if (res.data) {
          localStorage.setItem("token", res.data?.data.token);
          console.log(res.data)
          localStorage.setItem("userInfo", JSON.stringify(res.data?.data?.payload.user))
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Try Again...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div className=" bg-primary px-[100px] py-[40px] rounded-xl border-2 border-secondary">
      <div className="">
        <div className="w-[500px]">
          <img className="mx-auto w-[50%]" src={logo} alt="" />
          <h1 className="text-[24px] text-center font-medium  mb-[24px]">
            Sign In
          </h1>
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
            className=""
          >
            <Form.Item
              name="email"
              label={
                <span className="text-secondary text-[16px] font-medium">
                  Email
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please Input Your Email!",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter Your Email"
                name="email"
                prefix={
                  <HiOutlineMailOpen
                    className="mr-2 bg-secondary rounded-full p-[6px]"
                    size={28}
                    color="white"
                  />
                }
                className="border-2 border-secondary h-[62px] bg-primary"
                style={{
                  background: "#B0E3D3",
                  outline: "none",
                }}
                required
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={
                <span className="text-secondary text-[16px] font-medium">
                  Password
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
                placeholder="Enter Your Password"
                name="current_password"
                prefix={
                  <IconLock
                    className="mr-2 bg-secondary rounded-full p-[6px]"
                    size={28}
                    color="white"
                  />
                }
                style={{
                  background: "#B0E3D3",
                  outline: "none",
                }}
                className="border-2 border-secondary h-[62px] bg-primary"
              />
            </Form.Item>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
              </div>
              <div>
                <Link
                  to="/auth/forgot-password"
                  className="text-secondary font-medium hover:text-secondary"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div></div>
            {isError && <h1 className="text-red-500">** {error?.data?.message}</h1>}
            <Form.Item>
 
                <Button
                  type="default"
                  htmlType="submit"
                  className="block w-[500px] hover:bg-secondary h-[56px] px-2 py-4 mt-2 text-white bg-secondary rounded-lg"
                >
                  {isLoading && <LoadingOutlined/>}
                  Log in
                </Button>
             
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
