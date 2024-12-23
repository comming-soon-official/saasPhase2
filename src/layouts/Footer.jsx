import React from "react";
import { completeButtonColors } from "../styles/style";

const Footer = () => {
  const socialIcons = [
    "facebook.png",
    "instagram.png",
    "linkedin.png",
    "twitter.png",
    "youtube.png",
    // "github.png",
  ];
  const navList = [
    { path: "/home", items: "Home" },
    { path: "/price", items: "Pricing" },
    { path: "/product", items: "Product" },
    { path: "/about", items: "About" },
  ];
  const navList2 = [
    { path: "/career", items: "Careers" },
    { path: "/price", items: "Pricing" },
    { path: "/community", items: "Community" },
    { path: "/privacy", items: "Privacy Policy" },
  ];
  return (
    <footer className="">
      <hr />
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse justify-between items-center space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto mt-6 text-center opacity-50 md:hidden">
            Copyright &copy; 2023, All Rights Reserved{" "}
          </div>
          <div>
            <img
              width={150}
              height={150}
              src={`@/assets/img/aienusredlogo.png`}
              alt=""
            />
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            {socialIcons.map((items, i) => (
              <a key={i} href="#">
                <img
                  className="h-8"
                  src={`@/assets/img/logo/${items}`}
                  alt="logos"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3">
            {navList.map((items, i) => (
              <a key={i} href={items.path} className="hover:text-primary">
                {items.items}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            {navList2.map((items, i) => (
              <a key={i} href={items.path} className="hover:text-primary">
                {items.items}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form action="">
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-lg border-2 bg-base-100 border-base focus:outline-none"
                placeholder="Enter to Subscribe"
              />
              <button
                className={`px-6 py-2 rounded-full text-base-100 ${completeButtonColors} focus:outline-none`}
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden opacity-50 md:block">
            Copyright &copy; 2023, All Rights Reserved{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
