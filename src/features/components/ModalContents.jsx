import React, { useState } from "react";
export const ModalTopic = (props) => {
  const {
    projectDetials,
    setProjectDetials,
    topicPlaceholder,
    discriptionPlaceholder,
  } = props;
  const handleTopic = (e) => {
    let topic = e.target.value;
    setProjectDetials((prev) => {
      let tempValue = { ...prev };
      tempValue.topic = topic;
      return tempValue;
    });
  };
  const handleDiscription = (e) => {
    let discription = e.target.value;
    setProjectDetials((prev) => {
      let tempValue = { ...prev };
      tempValue.discription = discription;
      return tempValue;
    });
  };

  return (
    <>
      <h2 className=" font-semibold text-2xl">Name a Topic</h2>
      <hr className="mb-6" />

      <div className="w-1/2 justify-center items-center">
        <div className="">
          <label className="opacity-50">Topic</label>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 bg-base-100 outline-none border-none w-full max-w-xs"
              type="text"
              id="topic"
              placeholder={`Eg:- ${topicPlaceholder}`}
              value={projectDetials.topic}
              onChange={handleTopic}
            />
          </div>
          <label className="opacity-50">Discription</label>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <textarea
              className="textarea pl-2 focus:outline-none border-none w-full max-w-xs"
              type="text"
              id="discription"
              placeholder={`Eg:- ${discriptionPlaceholder}`}
              value={projectDetials.discription}
              onChange={handleDiscription}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export const ModalSignup = (props) => {
  const { userData, setUserData } = props;
  const [showPassword, setShowPassword] = useState({
    showpassword: false,
    showConfirmPassword: false,
  });

  const handleFillEmail = (e) => {
    let email = e.target.value;
    setUserData((prev) => {
      let tempValue = { ...prev };
      tempValue.email = email;
      return tempValue;
    });
  };
  const handleFillPassword = (e) => {
    let password = e.target.value;
    setUserData((prev) => {
      let tempValue = { ...prev };
      tempValue.password = password;
      return tempValue;
    });
  };
  const handleFillConfirmPassword = (e) => {
    let confirmPassword = e.target.value;
    setUserData((prev) => {
      let tempValue = { ...prev };
      tempValue.confimPassword = confirmPassword;
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
    <>
      <h2 className="font-semibold text-2xl">Signup</h2>
      <hr className="mb-6" />

      <div className="w-1/2 justify-center items-center">
        <div className="">
          <label className="opacity-50">Email</label>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 bg-base-100 outline-none border-none w-full max-w-xs"
              type="text"
              name=""
              id="email"
              placeholder="Eg:- himal.b@testaing.com"
              value={userData.email}
              onChange={handleFillEmail}
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="opacity-50">Password</label>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 bg-base-100 outline-none border-none w-full max-w-xs"
              type={showPassword.showpassword ? "text" : "password"}
              name=""
              id="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleFillPassword}
            />
            {showPassword.showpassword ? (
              <div onClick={handleShowPassword} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
        </div>
        <div className="mb-5">
          <label className="opacity-50">Confirm Password</label>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 bg-base-100 outline-none border-none w-full max-w-xs"
              type={showPassword.showConfirmPassword ? "text" : "password"}
              name=""
              id="confirmpassword"
              placeholder="Confirm Password"
              value={userData.confimPassword}
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
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
        </div>
      </div>
    </>
  );
};
