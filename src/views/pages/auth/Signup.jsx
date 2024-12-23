import React, { useState } from "react";
import { errorNotify, successNotify } from "@/services/Notifications";
import { userSignup } from "@/services/AuthAPI";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    showpassword: false,
    showConfirmPassword: false,
  });

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    userSignup(values.email, values.password)
      .then((res) => {
        setIsLoading(false);
        if (res.success) {
          successNotify(
            "Horray!",
            "As of now, you are an official client at our Aiensured We Honored."
          );
          setTimeout(() => {
            window.location = "/";
          }, 5000);
        }
        if (res.error) {
          errorNotify("Aww!", res.error.message);
        }
      })
      .catch((error) => {
        errorNotify("Aww!", error.message);
      });
  };
  const handleFillEmail = (e) => {
    let email = e.target.value;
    setValues((prev) => {
      let tempValue = { ...prev };
      tempValue.email = email;
      return tempValue;
    });
  };
  const handleFillPassword = (e) => {
    let password = e.target.value;

    setValues((prev) => {
      let tempValue = { ...prev };
      tempValue.password = password;
      return tempValue;
    });
  };
  const handleFillConfirmPassword = (e) => {
    let confirmPassword = e.target.value;

    setValues((prev) => {
      let tempValue = { ...prev };
      tempValue.confirmPassword = confirmPassword;
      return tempValue;
    });
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => {
      let tempValue = { ...prev };
      tempValue.showpassword = !tempValue.showpassword;
      return tempValue;
    });
  };
  const handleShowConfirmPassword = () => {
    setShowPassword((prev) => {
      let tempValue = { ...prev };
      tempValue.showConfirmPassword = !tempValue.showConfirmPassword;
      return tempValue;
    });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center py-8 mb-3 w-80 bg-white rounded-2xl border border-gray-300 shadow-2xl">
        <form className="flex flex-col mt-8 w-64" onSubmit={handleSignup}>
          <div className="mb-5">
            <img
              className="w-28"
              src={require("../../../assets/img/logo1.png")}
              alt=""
            />
          </div>
          <h1 className="self-start mb-3 text-2xl font-semibold">Signup</h1>
          <div className="flex px-2 py-2 mb-3 border-b-2 border-gray-300">
            <input
              autoFocus
              className="w-full focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Email Address"
              type="text"
              onChange={handleFillEmail}
            />
          </div>

          <div className="flex px-2 py-2 mb-3 border-b-2 border-gray-300">
            <input
              autoFocus
              className="w-full  focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Password"
              type={showPassword.showpassword ? "text" : "password"}
              onChange={handleFillPassword}
            />

            {showPassword.showpassword ? (
              <div onClick={handleShowPassword} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={handleShowPassword} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="flex px-2 py-2 mb-5 border-b-2 border-gray-300">
            <input
              autoFocus
              className="w-full  focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Confirm Password"
              type={showPassword.showConfirmPassword ? "text" : "password"}
              onChange={handleFillConfirmPassword}
            />

            {showPassword.showConfirmPassword ? (
              <div
                onClick={handleShowConfirmPassword}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            ) : (
              <div
                onClick={handleShowConfirmPassword}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
            )}
          </div>
          <button
            className={`btn btn-primary btn-sm ${isLoading ? "loading" : ""}`}
          >
            Sign up
          </button>
        </form>
        <div className="flex justify-evenly mt-4 space-x-2 w-64">
          <span className="relative top-2 flex-grow h-px bg-gray-300 t-2"></span>
          <span className="flex-none font-semibold text-gray-400 uppercase">
            or
          </span>
          <span className="relative top-2 flex-grow h-px bg-gray-300 t-2"></span>
        </div>
        <div className="text-center">
          <span className="text-sm">Already Have a account?</span>
          <a
            href="/login"
            className="text-sm font-semibold text-blue-500 cursor-pointer"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
