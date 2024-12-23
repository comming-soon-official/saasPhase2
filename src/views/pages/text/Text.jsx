import React from "react";
import Navbar from "layouts/Navbar";

import Hero from "./Hero";
import Instructions from "./Instructions";
import Explanation from "./Explanation";
import Features from "./Features";

const Text = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Instructions />
      <Explanation />
      <Features />
    </>
  );
};

export default Text;
