import { useState } from "react";
import { handleSignUp } from "../../../api/authapi/AuthAPI.js";

const SignUp = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      fullName: FullName,
      email: Email,
      phoneNumber: PhoneNumber,
      password: Password,
    };
    handleSignUp(body);
  };

  return (
    <>
      <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
        <img
          src="https://www.tailwindtap.com/assets/components/form/createaccount/login.svg"
          alt="login"
          className="h-[500px] rounded-xl"
        />
      </div>
      <div className="mx-auto my-auto h-full w-full lg:w-1/2 md:p-10 py-5 md:py-0">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-blue-800">
          Create Account
        </h1>
        <form onSubmit={handleSubmit} className="w-full mt-5 sm:mt-8">
          <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <button
                type="submit"
                className="md:mt-5 tracking-wide font-semibold bg-blue-800 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span>Sign Up</span>
              </button>
              <button
                type="button"
                className="md:mt-5 tracking-wide text-blue-800 font-semibold border-blue-800 border  w-full py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
