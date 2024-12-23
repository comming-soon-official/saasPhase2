import React from "react";
import ArrowRight from "@/assets/svgs/ArrowRight";
import ArrowDown from "@/assets/svgs/ArrowDown";
import StartButton from "@/components/StartButton";
import Menu from "@/assets/svgs/Menu";
import ThemeChanger from "@/components/ThemeChanger";

const Navbar = () => {
  const NavbarList = [
    { path: "/pricing", list: "Pricing" },
    { path: "/about", list: "About Us" },
    { path: "/careers", list: "Careers" },
    { path: "/community", list: "Community" },
  ];

  const SolutionsList = [
    { path: "/text", list: "Text Classification" },
    { path: "#", list: "Object Detection" },
    { path: "/image", list: "Image Classification" },
    { path: "#", list: "Structured Solutions" },
  ];

  const SolutionNavData = SolutionsList.map((items, i) => (
    <li key={i}>
      <a
        href={items.path}
        className="font-semibold duration-300 hover:text-primary"
      >
        {items.list}
      </a>
    </li>
  ));

  const NavbarListData = NavbarList.map((items, i) => (
    <li key={i}>
      <a
        href={items.path}
        className="font-semibold duration-300 hover:text-primary"
      >
        {items.list}
      </a>
    </li>
  ));

  return (
    <div className="container p-6 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <details>
                  <summary className="font-semibold duration-300 hover:text-primary">
                    Solutions
                  </summary>
                  <ul className="p-2">{SolutionNavData}</ul>
                </details>
              </li>
              {NavbarListData}
            </ul>
          </div>
          <a
            href="/"
            aria-current="page"
            aria-label="Homepage"
            className="px-2 flex-0 btn btn-ghost"
          >
            <div className="inline-flex text-lg transition-all duration-200 font-title text-primary md:text-3xl">
              <span className="capitalize text-base-content">Ai</span>
              <span className="lowercase">ensured</span>
            </div>
          </a>
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <details>
                <summary className="font-semibold duration-300 hover:text-primary">
                  Solutions
                </summary>
                <ul className="p-2 shadow menu bg-base-100 z-50 rounded-box w-52 ">
                  {SolutionNavData}
                </ul>
              </details>
            </li>
            {NavbarListData}
          </ul>
        </div>

        <div className="navbar-end">
          <ThemeChanger />
          <StartButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
