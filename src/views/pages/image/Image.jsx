import React from "react";
import Navbar from "@/layouts/Navbar";

import Hero from "./Hero";
import Instructions from "./Instructions";
import Features from "./Features";
import Explanation from "./Explanation";

const Image = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Instructions />
      <Explanation />
      <Features /> */}
    </>
  );
};

export default Image;
