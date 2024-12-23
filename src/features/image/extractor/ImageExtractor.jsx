import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Papa from "papaparse";
import axios from "axios";
import { Combobox, Tab, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { detialData } from "../data/data";
import Navbar from "layouts/Navbar";
import { errorNotify, successNotify } from "services/Notifications";
import { currentUser } from "services/AuthAPI";
import { addImageProject } from "services/ProjectAPI";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ImageExtractor = () => {
  // const [count, setCount] = useState(1);
  const [inputSelected, setInputSelected] = useState("Select Input Column");
  const [targetSelected, setTargetSelected] = useState("Select Target Column");
  const [query, setQuery] = useState({ input: "", target: "" });
  const [rowDetials, setRowDetials] = useState({ rowid: "", rowtext: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleExecute = async () => {
    addImageProject().then((res) => {
      if (res) {
        window.location = "/dashboard";
      }
    });
    // const projects = {
    //   id: uuidv4(),
    //   pipeline: "text",
    //   date: new Date(),
    //   topic: await currentUser().get("topic"),
    //   discription: await currentUser().get("discription"),
    //   runtime: "",
    //   status: "",
    //   results: "",
    // };
  };
  // console.log(project);
  // console.log(currentUser() ? currentUser().get("Projects") : null);

  const handleRun = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://middleman.aiensured.com/",
        {
          input: inputSelected,
          target: targetSelected,
          rowId: rowDetials.rowid,
          rowText: rowDetials.rowtext,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        }
      );
      if (response) {
        setIsLoading(false);

        console.log(response);

        successNotify("Horray!", response);
      }
    } catch (error) {
      setIsLoading(false);

      errorNotify("Ahh!", error);
      console.log(error);
    }
  };
  const handleRowId = (e) => {
    if (rowDetials.rowtext === "") {
      setRowDetials((prev) => {
        let tempValue = { ...prev };
        tempValue.rowid = e.target.value;
        return tempValue;
      });
    }
  };
  const handleRowText = (e) => {
    if (rowDetials.rowid === "") {
      setRowDetials((prev) => {
        let tempValue = { ...prev };
        tempValue.rowtext = e.target.value;
        return tempValue;
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" flex flex-col-reverse justify-center md:flex-row">
        <div className="max-w-3xl flex flex-col my-10 pr-10 lg:pr-32">
          {detialData.map((items, i) => (
            <div key={i}>
              <div className="flex">
                <h2 className="text-xl font-semibold my-2">
                  <span className="text-base-100 font-ibm text-lg bg-primary rounded-full px-2 mr-2">
                    {items.id}
                  </span>
                  {items.heading}
                </h2>
              </div>
              <p className="opacity-50 mb-5">{items.discription}</p>
            </div>
          ))}
          <button
            className={` ${
              isLoading ? "loading" : ""
            }w-full btn btn-primary max-w-max m-10`}
            onClick={handleExecute}
          >
            Run Project
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageExtractor;
