import { handleSignIn } from "../../../api/authapi/AuthAPI.js";
import { Checkbox, Divider, Form, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import "./Login.css";
import facebook from "../../../assets/facebook-blue.svg";
import apple from "../../../assets/apple.svg";
import google from "../../../assets/google.svg";
import twitter from "../../../assets/twitter-blue.svg";
import appstore from "../../../assets/appstore.svg";
import googleplay from "../../../assets/googleplay.svg";

const LogIn = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }

    handleSignIn(formData);
  };

  return (
    <>
      <div className="font-Poppins flex flex-col gap-5 items-center mx-auto my-auto h-full w-full max-w-[780px] md:p-10 py-5 md:py-0 ">
        <Form
          layout="vertical"
          disabled={false}
          form={form}
          onFinish={onFinish}
          className="w-full"
        >
          <div className="text-black text-3xl my-8">Login</div>
          <Form.Item
            rules={[
              { required: true, message: "Please enter email or username!" },
            ]}
            name="emailorusername"
          >
            <label htmlFor="emailorusernameinput">
              Email address or user name
            </label>
            <Input id="emailorusernameinput" className="mt-2 h-10 rounded-xl" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please enter password!" }]}
            name="password"
          >
            <label htmlFor="passwordinput">Password</label>
            <Input.Password
              className="mt-2 h-10 rounded-xl"
              id="passwordinput"
              iconRender={(visible) => {
                return (
                  <div className="">
                    {visible ? (
                      <div className="flex gap-2 -mt-12 -me-2 cursor-pointer">
                        <EyeInvisibleOutlined />
                        Hide
                      </div>
                    ) : (
                      <div className="flex gap-2 -mt-12 -me-2 cursor-pointer">
                        <EyeOutlined />
                        Show
                      </div>
                    )}
                  </div>
                );
              }}
            />
          </Form.Item>

          <Form.Item name="disabled" valuePropName="checked">
            <Checkbox className="black-checkbox">Remember me</Checkbox>
          </Form.Item>

          <div>
            By continuing, you agree to the Terms of use and Privacy Policy.{" "}
          </div>
          <Form.Item>
            <button
              type="submit"
              className="bg-black hover:opacity-50 transition-all duration-150 mt-4 text-white rounded-3xl w-full h-10"
            >
              Log in
            </button>
          </Form.Item>
        </Form>
        <a href="" className="text-black text-center">
          <u>Forgot password?</u>
        </a>
        <div className="text-black text-center">
          Don’t have an acount?{" "}
          <a href="">
            <u>Sign up </u>
          </a>
        </div>
        <Divider style={{ borderColor: "#666666" }}>Or continue with</Divider>
        <Space wrap>
          <img
            src={facebook}
            loading="lazy"
            alt="karobar facebook"
            className="cursor-pointer h-9 w-9 -mt-[1px]"
          />
          <img
            src={apple}
            loading="lazy"
            alt="karobar apple"
            className="cursor-pointer h-14 w-14 -mb-1"
          />
          <img
            src={google}
            loading="lazy"
            alt="karobar google"
            className="cursor-pointer h-7 w-7 -mb-1"
          />
          <img
            src={twitter}
            loading="lazy"
            alt="karobar twitter"
            className="cursor-pointer h-8 w-8 -mb-1 ms-3"
          />
        </Space>
        <Space wrap>
          <img
            src={appstore}
            loading="lazy"
            alt="karobar appstore"
            className="cursor-pointer max-w-[200px] hover:brightness-50"
          />
          <img
            src={googleplay}
            loading="lazy"
            alt="karobar googleplay"
            className="cursor-pointer max-w-[200px] hover:brightness-50"
          />
        </Space>
      </div>
      <Divider />
    </>
  );
};

export default LogIn;
