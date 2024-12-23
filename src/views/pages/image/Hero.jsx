import React from "react";
import Uploader from "./Uploader";
import MLTrainingInterface from "./newone";
import FileUploader from "./fileUpoader";
import Process from "./Process";

const Hero = () => {
  return (
    <div className="flex  items-center justify-around bg-base-100">
      <MLTrainingInterface />
      <div className="w-1/3 ">
        <FileUploader />
        {/* <Process /> */}
      </div>

      {/* <Uploader /> */}
    </div>
  );
};

export default Hero;
