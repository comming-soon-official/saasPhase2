import React from "react";
import { useSelector } from "react-redux";

const StartButton = ({ properties }) => {
  const isLogined = useSelector((state) => state.user.isLogined);
  return (
    <>
      {isLogined ? (
        <a
          href="/dashboard"
          className={`p-3 px-6 pt-2 text-white bg-gradient-to-tl rounded-full from-primary to-secondary hover:bg-gradient-to-bl ${properties}`}
        >
          Dashboard
        </a>
      ) : (
        <a
          href="/signup"
          className={`p-3 px-6 pt-2 text-white bg-gradient-to-tl rounded-full from-primary to-secondary hover:bg-gradient-to-bl ${properties}`}
        >
          Get Started
        </a>
      )}
    </>
  );
};

export default StartButton;
