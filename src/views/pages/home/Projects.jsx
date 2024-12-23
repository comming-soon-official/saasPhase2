import React from "react";
import { Solutions } from "./data/dummy";
const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-between p-10 mb-32 ">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2">Solutions</h2>
        <h3 className="mt-4 text-center text-lg opacity-60">Click to Start</h3>
      </div>
      <div className="mx-20 grid grid-cols-2 text-center  lg:grid-cols-5 md:text-left">
        {Solutions.map((items) => (
          <a
            href={items.link}
            className="flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors text-center hover:bg-base-200 hover:border-base-300 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mb-5">{items.svg}</div>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {items.title}
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className={`m-0  text-sm opacity-50`}>{items.discription}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
