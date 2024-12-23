import React, { useEffect, useRef, useState } from "react";
import { userResetPassword } from "@/services/AuthAPI";
import { errorNotify, successNotify } from "@/services/Notifications";
const Forget = () => {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let intervalRef = useRef();
  const countDown = () => {
    setCount((prevCount) => prevCount - 1);
  };
  useEffect(() => {
    if (count > 0) {
      intervalRef.current = setInterval(countDown, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [count]);

  const handleForget = (e) => {
    e.preventDefault();
    setIsLoading(true);
    userResetPassword(value)
      .then((res) => {
        successNotify("Horray!", "We sent mail to you, check your inbox");
        setIsLoading(false);
        if (res.success) {
          console.log(res.success);
        } else if (res.error) {
          errorNotify("Aww!", res.error.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFillEmail = (e) => {
    let value = e.target.value;
    console.log(value);
    setValue(value);
  };
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="shadow-2xl rounded-2xl bg-white border border-gray-300 w-96 py-8 flex items-center  flex-col mb-3">
        <form className="mt-8 w-64 flex flex-col" onSubmit={handleForget}>
          <div className="mb-5">
            <img
              className="w-28"
              src={require("../../../assets/img/logo1.png")}
              alt=""
            />
          </div>
          <h1 className=" self-start text-2xl font-semibold">
            Can't Remeber Password?
          </h1>
          <p className="opacity-50 leading-5 text-sm mb-10">
            Enter your Email Address we will send reset link to your registered
            email address
          </p>
          <input
            autoFocus
            className=" w-full border-b  border-b-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="Email Address"
            type="text"
            onChange={handleFillEmail}
          />
          {count === 0 ? null : (
            <div className="text-sm opacity-50">{`resend in ${count}s`}</div>
          )}
          <br />
          <button
            className={`btn btn-primary btn-sm ${isLoading && "loading"}`}
          >
            Forget Password
          </button>
        </form>
      </div>
      <div className="shadow-xl rounded-2xl bg-white border border-gray-300 text-center w-96 py-4">
        <a
          href="/login"
          className="text-blue-500 cursor-pointer text-sm font-semibold"
        >
          Wanna go to Login Page?{" "}
        </a>
      </div>
    </div>
  );
};

export default Forget;
