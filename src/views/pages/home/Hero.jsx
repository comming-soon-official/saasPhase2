import React from "react";
import StartButton from "@/components/StartButton";
import logo1 from "@/assets/img/logo1.png";
import img2 from "@/assets/img/img2.png";

const Hero = () => {
  return (
    <>
      <div id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <img className="lg:w-1/2" src={logo1} alt="logo" />

            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              The World First I the Ai
            </h1>
            <p className="max-w-md text-center opacity-50 md:text-left">
              Test your AI/ML models and show the accuracy also suggessions to
              improve your trained model and let us give new ideas the inovative
              maybe became the best results keep in touch with us
            </p>

            <div className="flex justify-center md:justify-start">
              <StartButton />
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={img2} alt="poster" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
