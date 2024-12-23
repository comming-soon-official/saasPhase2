import React from "react";
// import ThemeChanger from "../../../components/ThemeChanger";

const Page404 = () => {
  return (
    <div>
      <div className="w-full px-5 mx-auto my-12 text-center">
        {/* <ThemeChanger properties={"hidden"} /> */}
        <div className="flex flex-col m-20 items-center">
          <p className="text-xl">Page Not Found</p>
          <h1 className="font-ibm text-9xl opacity-50">404</h1>
          <img
            className="hidden items-center w-1/5 md:block"
            src={require("../../../assets/img/404.png")}
            alt=""
          />
        </div>
        <h2 className="text-3xl m-5 md:text-5xl">Out of nothing,something</h2>
        <div>
          <p className="text-xl mt-8 md:text-3xl">
            Success always begins with nothing, i'm here for you
          </p>
          <p className="text-xl md:text-3xl">
            Start anything, there is nothing to wait.{" "}
          </p>
          <p className="opacity-50 text-xl text-end mr-2 lg:mr-96">--Himal</p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
