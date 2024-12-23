import { Tab } from "@headlessui/react";
import React from "react";
import FairmlGraph from "./graphs/FairmlGraph";
import LimeGraph from "./graphs/LimeGraph";
// import useImageLightBox from "hooks/lightbox/useImageLightBox";

const FairML = (props) => {
  return (
    <div className="max-w-7xl px-5 mx-auto mt-16 text-center">
      <h1 className="text-5xl font-semibold mb-3 uppercase bg-primary rounded-2xl py-2 text-base-100">
        Bias Technique
      </h1>
      <h2 className="text-3xl font-semibold mb-3">FairML</h2>
      <p className="opacity-50 mb-5">
        Fairml helps to determine the relative significance of the inputs to a
        black-box predictive model in order to assess the model’s fairness.It
        leverages model compression and four input ranking algorithms to
        quantify a model’s relative predictive dependence on its inputs.The
        basic idea behind FairML (and many other attempts to audit or interpret
        model behavior) is to measure a model’s dependence on its inputs by
        changing them.
      </p>
      <div className="mb-20">
        <FairmlGraph />
      </div>
      <div>
        <h1 className="text-5xl font-semibold mb-3 uppercase bg-primary rounded-2xl py-2 text-base-100">
          Local Explainablity
        </h1>
        <h2 className="text-3xl font-semibold mb-3">LIME</h2>
        <p className="opacity-1 mb-5">
          "LIME, the acronym for local interpretable model-agnostic
          explanations, is a technique that approximates any black box machine
          learning model with a local, interpretable model to explain each
          individual prediction.
        </p>
        <LimeGraph />
      </div>
    </div>
  );
};

export default FairML;
