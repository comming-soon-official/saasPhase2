import Navbar from "layouts/Navbar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SuccessFailureCharts, TotalProjectCharts } from "./graphs/RadarCharts";

const Dashboard = () => {
  const textProjects = useSelector((state) => state.projects.text);
  const imageProjects = useSelector((state) => state.projects.image);
  const objectProjects = useSelector((state) => state.projects.object);
  const structuredProjects = useSelector((state) => state.projects.structured);
  const regressionProjects = useSelector((state) => state.projects.regression);
  let totalProjects = 0;
  totalProjects =
    imageProjects.length +
    textProjects.length +
    objectProjects.length +
    structuredProjects.length +
    regressionProjects.length;

  console.log(structuredProjects);
  console.log(regressionProjects);

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="text-center">
          <div className="mt-10 w-full flex flex-wrap justify-around">
            <div className="">
              <h3 className="text-2xl font-semibold ">
                Success and failure projects
              </h3>
              <SuccessFailureCharts />
              <div className="flex flex-row justify-center">
                <h3 className="font-semibold text-xl m-10">
                  Total Failure : 5
                </h3>
                <h3 className="font-semibold text-xl m-10">
                  Total Sucess : 30
                </h3>
              </div>{" "}
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold">Total projects</h3>
              <TotalProjectCharts
                image={imageProjects.length}
                text={textProjects.length}
                object={objectProjects.length}
                structured={structuredProjects.length}
                regression={regressionProjects.length}
              />
              <div className="flex flex-row justify-center">
                <h3 className="font-semibold text-xl m-10">
                  Total Projects : {totalProjects}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          {totalProjects !== 0 ? (
            <div className="w-full rounded-3xl">
              <h2 className="text-4xl font-bold mx-10">Projects</h2>

              {imageProjects.length !== 0 ? (
                <div>
                  <h3 className="text-2xl mx-10 font-semibold mt-10 border-b-2">
                    Image Clasification
                  </h3>
                  <div className="flex flex-wrap justify-start m-2 md:m-10">
                    {imageProjects.map((items, i) => (
                      <div
                        key={i}
                        className=" m-3 card w-96 bg-base-100 shadow-2xl p5"
                      >
                        <div className="card-body">
                          <h2 className="card-title">{items.get("topic")}</h2>
                          <p>{items.get("discription")}</p>
                          <hr />
                          <div className="opacity-70">
                            <p>
                              Date:{" "}
                              {items.get("date").toLocaleString("en-us", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </p>
                            <p>Runtime: items.runtime</p>
                            <p>
                              Status:{" "}
                              <span className="text-error">items.status</span>
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                              <a>Results</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {textProjects.length !== 0 ? (
                <div>
                  <h3 className="text-2xl mx-10 font-semibold mt-10 border-b-2">
                    Text Clasification
                  </h3>
                  <div className="flex flex-wrap justify-start m-2 md:m-10">
                    {textProjects.map((items, i) => (
                      <div
                        key={i}
                        className=" m-3 card w-96 bg-base-100 shadow-2xl p5"
                      >
                        <div className="card-body">
                          <h2 className="card-title">{items.get("topic")}</h2>
                          <p>{items.get("discription")}</p>
                          <hr />
                          <div className="opacity-70">
                            <p>
                              Date:{" "}
                              {items.get("date").toLocaleString("en-us", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </p>
                            <p>Runtime: items.runtime</p>
                            <p>
                              Status:{" "}
                              <span className="text-error">items.status</span>
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                              <a>Results</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {objectProjects.length !== 0 ? (
                <div>
                  <h3 className="text-2xl mx-10 font-semibold mt-10 border-b-2">
                    Object Detection
                  </h3>
                  <div className="flex flex-wrap justify-start m-2 md:m-10">
                    {objectProjects.map((items, i) => (
                      <div
                        key={i}
                        className=" m-3 card w-96 bg-base-100 shadow-2xl p5"
                      >
                        <div className="card-body">
                          <h2 className="card-title">{items.get("topic")}</h2>
                          <p>{items.get("discription")}</p>
                          <hr />
                          <div className="opacity-70">
                            <p>
                              Date:{" "}
                              {items.get("date").toLocaleString("en-us", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </p>
                            <p>Runtime: items.runtime</p>
                            <p>
                              Status:{" "}
                              <span className="text-error">items.status</span>
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                              <a>Results</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {structuredProjects.length !== 0 ? (
                <div>
                  <h3 className="text-2xl mx-10 font-semibold mt-10 border-b-2">
                    Structured Pipeline
                  </h3>
                  <div className="flex flex-wrap justify-start m-2 md:m-10">
                    {structuredProjects.map((items, i) => (
                      <div
                        key={i}
                        className=" m-3 card w-96 bg-base-100 shadow-2xl p5"
                      >
                        <div className="card-body">
                          <h2 className="card-title">{items.get("topic")}</h2>
                          <p>{items.get("discription")}</p>
                          <hr />
                          <div className="opacity-70">
                            <p>
                              Date:{" "}
                              {items.get("date").toLocaleString("en-us", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </p>
                            <p>Runtime: items.runtime</p>
                            <p>
                              Status:{" "}
                              <span className="text-error">items.status</span>
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                              <a>Results</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {regressionProjects.length !== 0 ? (
                <div>
                  <h3 className="text-2xl mx-10 font-semibold mt-10 border-b-2">
                    Regression Pipeline
                  </h3>
                  <div className="flex flex-wrap justify-start m-2 md:m-10">
                    {regressionProjects.map((items, i) => (
                      <div
                        key={i}
                        className=" m-3 card w-96 bg-base-100 shadow-2xl p5"
                      >
                        <div className="card-body">
                          <h2 className="card-title">{items.get("topic")}</h2>
                          <p>{items.get("discription")}</p>
                          <hr />
                          <div className="opacity-70">
                            <p>
                              Date:{" "}
                              {items.get("date").toLocaleString("en-us", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </p>
                            <p>Runtime: items.runtime</p>
                            <p>
                              Status:{" "}
                              <span className="text-error">items.status</span>
                            </p>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                              <a>Results</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="mx-20">
              <h3 className="text-3xl font-semibold mb-5">No Project Found</h3>
              <h2 className="text-xl mb-2">Let's Build Project Togethere</h2>
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.location = "/";
                }}
              >
                Start Building
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
