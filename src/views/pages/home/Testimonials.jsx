import React from "react";
import StartButton from "@/components/StartButton";
import { testimonialsData } from "./data/dummy";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div className="px-5 mx-auto mt-32 max-w-7xl text-center">
        <h2 className="text-4xl font-bold text-center">
          Let's hear What are they saying.
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonialsData.map((items, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 m-10 space-y-6 rounded-lg border-2 duration-150 ease-in cursor-pointer hover:-translate-y-1 md:m-0 md:w-1/4"
            >
              <img
                width={100}
                className="-mt-14 rounded-full"
                src={`@/assets/img/${items.img}`}
                alt="avatar"
              />
              <h5 className="text-lg font-bold">{items.name}</h5>
              <p className="text-sm opacity-50">{items.report}</p>
            </div>
          ))}
        </div>
        <div className="my-16">
          <StartButton />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
