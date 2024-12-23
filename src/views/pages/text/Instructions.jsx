import React from "react";
import { instructionsData } from "./data/dummy";
const Instructions = () => {
  return (
    <div className="">
      <div className="max-w-7xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">How Its Works.</h2>
        <p className="mt-5 opacity-60">test your models without sweat</p>
      </div>
      <div className="space-x-3 space-y-0 container flex flex-col items-center px-6 mx-auto mt-10  lg:flex-row ">
        {instructionsData.map((items, i) => {
          return (
            <div key={i}>
              <div className="w-full cursor-pointer ease-in duration-150 hover:-translate-y-1  flex items-center p-6 space-y-6 md:m-0  justify-center md:w-full">
                <span className="font-ibm text-base-100 px-4 py-2 bg-primary rounded-full m-5">
                  {items.id}
                </span>
                {items.paragraph}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructions;
