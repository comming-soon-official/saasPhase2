import React from "react";
import { featuresData } from "./data/dummy";
const Features = () => {
  return (
    <div className="">
      <div className="max-w-7xl px-5 mx-auto mt-32 text-center my-20">
        <h2 className="text-4xl font-bold text-center">
          Testing Inference Made Easy
        </h2>
        <p className="opacity-50 mt-10 text-2xl font-semibold">
          Test your models and get accuracy on dedicated and secure
          infrastructure without dealing with containers and GPUs
        </p>
      </div>
      <div className="space-x-3 space-y-0 container flex flex-col items-center px-6 mx-auto mt-10  lg:flex-row ">
        {featuresData.map((items, i) => {
          return (
            <div key={i}>
              <div className="mb-2 flex items-center justify-center">
                {items.svg}
              </div>
              <div className="w-full  flex flex-col items-center p-6 space-y-6 md:m-0  justify-center md:w-full">
                <span className="text-2xl font-semibold">{items.title}</span>
                <p className="opacity-70"> {items.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
