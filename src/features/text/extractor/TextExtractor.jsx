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
import { addTextProject } from "services/ProjectAPI";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const TextExtractor = () => {
  // const [count, setCount] = useState(1);
  const [people, setPeople] = useState([]);
  const [inputSelected, setInputSelected] = useState("Select Input Column");
  const [targetSelected, setTargetSelected] = useState("Select Target Column");
  const [query, setQuery] = useState({ input: "", target: "" });
  const [rowDetials, setRowDetials] = useState({ rowid: "", rowtext: "" });
  const [isLoading, setIsLoading] = useState(false);

  const dataset = currentUser().get("dataset");

  const handleExecute = async () => {
    addTextProject().then((res) => {
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
  useEffect(() => {
    Papa.parse(dataset, {
      download: true,
      complete: function (data) {
        setPeople(data.data[0]);
      },
    });
  }, []);
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
  const filteredInputPeople =
    query.input === ""
      ? people
      : people.filter((person) =>
          person
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.input.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredTargetPeople =
    query.target === ""
      ? people
      : people.filter((person) =>
          person
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.target.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div>
      <Navbar />
      <div className=" flex flex-col-reverse items-center md:flex-row">
        <div className="w-1/2 flex flex-col justify-center ">
          <div className="flex flex-col justify-center items-center m-5">
            <h3 className="text-2xl font-semibold m-5">Enter Input column</h3>
            <Combobox value={inputSelected} onChange={setInputSelected}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default  rounded-sm bg-base text-left shadow-md outline-none focus:outline-none focus-visible:ring-2 border-2 border-primary sm:text-sm">
                  <Combobox.Input
                    className=" w-full border-none py-2 pl-3 pr-10 text-sm leading-5  focus:ring-0"
                    displayValue={(person) => person}
                    onChange={(event) =>
                      setQuery((prev) => {
                        let tempValue = { ...prev };
                        tempValue.input = event.target.value;
                        return tempValue;
                      })
                    }
                  />
                  <Combobox.Button className=" absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-base"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() =>
                    setQuery((prev) => {
                      let tempValue = { ...prev };
                      tempValue.input = "";
                      return tempValue;
                    })
                  }
                >
                  <Combobox.Options className="z-10 absolute mt-1 max-h-96 w-full overflow-auto rounded-md bg-base-100 py-1 text-base shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredInputPeople.length === 0 && query.input !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-base">
                        Nothing found.
                      </div>
                    ) : (
                      filteredInputPeople.map((person, i) => (
                        <Combobox.Option
                          key={i}
                          className={({ active }) =>
                            ` relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-primary text-base" : "text-base"
                            }`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-base" : "text-primary"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>

          <div className=" flex flex-col justify-center items-center  m-5">
            <h3 className="text-2xl font-semibold m-5">Enter Target column</h3>

            <Combobox value={targetSelected} onChange={setTargetSelected}>
              <div className=" relative mt-1">
                <div className="relative w-full cursor-default  rounded-sm bg-base text-left shadow-md outline-none focus:outline-none focus-visible:ring-2 border-2 border-primary sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5  focus:ring-0"
                    displayValue={(person) => person}
                    onChange={(event) =>
                      setQuery((prev) => {
                        let tempValue = { ...prev };
                        tempValue.target = event.target.value;
                        return tempValue;
                      })
                    }
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-base"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() =>
                    setQuery((prev) => {
                      let tempValue = { ...prev };
                      tempValue.target = "";
                      return tempValue;
                    })
                  }
                >
                  <Combobox.Options className="z-10 absolute mt-1  max-h-96 w-full overflow-auto rounded-md bg-base-100 py-1 text-base shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredTargetPeople.length === 0 && query.input !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-base">
                        Nothing found.
                      </div>
                    ) : (
                      filteredTargetPeople.map((person, i) => (
                        <Combobox.Option
                          key={i}
                          className={({ active }) =>
                            ` relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-primary text-base" : "text-base"
                            }`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-base" : "text-primary"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
          <div className="w-full flex flex-col items-center ">
            <h2 className="text-2xl font-semibold my-5">Enter Row</h2>
            <Tab.Group>
              <Tab.List className="w-72 flex flex-row justify-center items-center  rounded-xl bg-primary p-1 mx-10 sm:mx-20 font-bold">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-1/2 rounded-lg py-2.5 text-md leading-5 text-darkring-offset-primary uppercase",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                      selected
                        ? "bg-base-100 shadow font-semibold"
                        : "text-base-100 hover:bg-white/[0.12] hover:text-white "
                    )
                  }
                >
                  ID
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-1/2 rounded-lg py-2.5 text-md leading-5 text-darkring-offset-primary uppercase",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                      selected
                        ? "bg-base-100 shadow font-semibold"
                        : "text-base-100 hover:bg-white/[0.12] hover:text-white "
                    )
                  }
                >
                  Text
                </Tab>
              </Tab.List>
              <Tab.Panels className="p-1 mx-8 sm:mx-24 my-5">
                <Tab.Panel className={"rounded-xl   shadow-2xl"}>
                  <input
                    onChange={handleRowId}
                    type="number"
                    placeholder="Eg:- 5"
                    value={rowDetials.rowid}
                    className="w-32 bg-base-100 border-2 border-primary rounded-lg px-2 py-1"
                  />
                </Tab.Panel>
                <Tab.Panel className={"rounded-xl shadow-2xl"}>
                  <input
                    onChange={handleRowText}
                    type="text"
                    placeholder="Eg:- Himal"
                    value={rowDetials.rowtext}
                    className="w-32 bg-base-100 border-2 border-primary rounded-lg px-2 py-1"
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="flex flex-col items-center">
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
        <div className="w-1/2  flex flex-col my-10 pr-10 lg:pr-32">
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
        </div>
      </div>
    </div>
  );
};
export default TextExtractor;
