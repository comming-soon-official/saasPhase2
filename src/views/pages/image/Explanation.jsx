import React from "react";
import { ExplanationData } from "./data/dummy";
const Explanation = () => {
  return (
    <div className="mx-auto mt-40 max-w-7xl">
      <header className="mb-8 text-center ">
        <h2 className="text-4xl font-bold">Techniques</h2>
        <p className="mt-4 text-center text-lg opacity-60">
          Let's complete the image classification tour
        </p>
      </header>
      <div className="flex flex-col gap-x-32 pt-8 md:gap-y-12 md:pt-24 md:flex-row md:py-12">
        <div className="mb-6 flex-1 self-center text-center md:text-left md:mb-0">
          <h4 className="mb-6 text-3xl font-semibold">
            {ExplanationData[0].heading}
          </h4>
          <div className="text-lg opacity-60">
            <p className="mb-6">{ExplanationData[0].paragraph}</p>
          </div>
        </div>
        <div className="shadow-alternate-xl flex flex-1 justify-center overflow-hidden rounded-xl md:justify-end">
          <img
            loading="lazy"
            src={ExplanationData[0].img}
            alt="Select your model"
          />
        </div>
      </div>

      <div className="flex flex-col gap-x-32 pt-24 md:gap-y-12 md:flex-row md:py-12">
        <div className="mb-6 flex-1 self-center text-center md:text-left md:order-last md:mb-0">
          <h4 className="mb-6 text-3xl font-semibold">
            {ExplanationData[1].heading}
          </h4>
          <div className="text-lg opacity-60">
            <p className="mb-6">{ExplanationData[1].paragraph}</p>
          </div>
        </div>
        <div className="shadow-alternate-xl flex flex-1 justify-center overflow-hidden rounded-xl md:justify-end">
          <img
            loading="lazy"
            src={ExplanationData[1].img}
            alt="Choose your cloud"
          />
        </div>
      </div>

      <div className="flex flex-col gap-x-32 pt-24 md:gap-y-12 md:flex-row md:py-12">
        <div className="mb-6 flex-1 self-center text-center md:text-left md:mb-0">
          <h4 className="mb-6 text-3xl font-semibold">
            {ExplanationData[2].heading}
          </h4>
          <div className="text-lg opacity-60">
            {ExplanationData[2].paragraph}
          </div>
        </div>
        <div className="shadow-alternate-xl flex flex-1 justify-center overflow-hidden rounded-xl md:justify-end">
          <img
            loading="lazy"
            src={ExplanationData[2].img}
            alt="select security level"
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-32 pt-24 md:gap-y-12 md:flex-row md:py-12">
        <div className="mb-6 flex-1 self-center text-center md:text-left md:order-last md:mb-0">
          <h4 className="mb-6 text-3xl font-semibold">
            {" "}
            {ExplanationData[3].heading}
          </h4>
          <div className="text-lg opacity-60">
            <p className="mb-6">{ExplanationData[3].paragraph}</p>
          </div>
        </div>
        <div className="shadow-alternate-xl flex flex-1 justify-center overflow-hidden rounded-xl md:justify-end">
          <img
            loading="lazy"
            src={ExplanationData[3].img}
            alt="Create and manage your endpoint"
          />
        </div>
      </div>
      {/* <div className="flex justify-center text-lg opacity-60">
        <a
          href="/docs/inference-endpoints/index"
          className="btn-fuchsia btn-fuchsia-lg border-2 text-xl"
          data-ga-category="inference-endpoints-page"
          data-ga-action="clicked read the docs"
          data-ga-label="read the docs"
        >
          Read the docs
        </a>
      </div> */}
    </div>
  );
};

export default Explanation;
