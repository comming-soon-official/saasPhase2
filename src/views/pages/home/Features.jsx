import React from "react";
import { completeButtonColors } from "@/styles/style";
import { featureListData } from "./data/dummy";
const Features = () => {
  return (
    <div id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What is different with Aiensured ?
          </h2>
          <p className="max-w-md text-center opacity-50 md:text-left">
            At AiEnsured we believe in building responsible AI hence we have
            built our product aiensured, the world’s FIRST comprehensive testing
            product for privacy, ethics and security.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          {featureListData.map((items, i) => (
            <div
              key={i}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-lightPink md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className={`px-4 py-2 text-white rounded-full duration-700 font-ibm md:py-1 ${completeButtonColors}`}
                  >
                    {items.id}
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {items.heading}
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {items.heading}
                </h3>
                <p className="opacity-50">{items.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
