import React, { useState } from "react";
import Parse from "@/services/parseService";
// import StartButton from "../../components/StartButton";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { errorNotify, successNotify } from "@/services/Notifications";
import Modal from "@/features/components/Modal";

const Uploader = () => {
  const [fileName, setFileName] = useState({
    model: "",
    dataset: "",
  });
  const [progress, setProgress] = useState({
    model: 0,
    dataset: 0,
  });
  useEffect(() => {
    if (progress.model === 100 || progress.dataset) {
      successNotify("Horray!", "Need more, Neeed Moreee");
    }
  }, [progress.model, progress.dataset]);

  const BtnEnable = () => {
    if (progress.model === 100 && progress.dataset === 100) {
      return (
        <Modal
          route="/image"
          topicPlaceholder="Animal model accuricy"
          discriptionPlaceholder="Finding the modal accuracy"
          width="w-60"
        />
      );
    } else if (progress.model === 100) {
      return <button className="w-60 btn btn-primary">Upload Dataset</button>;
    } else if (progress.dataset === 100) {
      return <button className="w-60 btn btn-primary">Upload Model</button>;
    } else {
      return null;
    }
  };
  const onFileChange = async (file, dbname) => {
    const filename = file.target.files[0].name;
    const files = file.target.files[0];
    // console.log(files);
    let checkSize =
      files.size > 1024
        ? files.size > 1048576
          ? Math.round(files.size / 1048576) + "mb"
          : Math.round(files.size / 1024) + "kb"
        : files.size + "b";

    if (dbname === "model") {
      setFileName((prev) => {
        let tempValue = { ...prev };
        tempValue.model = `${filename} (${checkSize})`;
        return tempValue;
      });
    } else if (dbname === "dataset") {
      setFileName((prev) => {
        let tempValue = { ...prev };
        tempValue.dataset = `${filename} (${checkSize})`;
        return tempValue;
      });
    } else {
      errorNotify("Error", "contact us for more information");
      return false;
    }

    const parseFile = new Parse.File(filename, files);
    return await parseFile
      .save({
        progress: (value) => {
          if (dbname === "model") {
            setProgress((prev) => {
              let tempValue = { ...prev };
              tempValue.model = value * 100;
              return tempValue;
            });
          } else if (dbname === "dataset") {
            setProgress((prev) => {
              let tempValue = { ...prev };
              tempValue.dataset = value * 100;
              return tempValue;
            });
          } else {
            return false;
          }
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        errorNotify("Error", error);

        console.log(error);
      });
  };

  return (
    <>
      <div id="Uploader">
        <div className="max-w-7xl px-5 mx-auto my-12 text-center">
          <h2 className="text-2xl font-semibold text-center opacity-50">
            Image Classification
          </h2>
          <p className="opacity-60 mt-5">
            Upload image and model and see the magic
          </p>
        </div>
        <div className="space-x-3 space-y-0 container flex flex-col items-center px-6 mx-auto mt-10  lg:flex-row ">
          <div className="cursor-pointer ease-in duration-150 hover:-translate-y-1  flex flex-col items-center p-6 space-y-6 md:m-0 md:w-1/2 justify-center bg-grey-lighter">
            <label className="w-72 m-2 flex flex-col items-center px-4 py-6  rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-primary">
              <svg
                className="w-8 h-8 flex-none ml-2 -mr-1 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                fill="currentColor"
                focusable="false"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path d="M24,14a5.99,5.99,0,0,0-4.885,9.4712L14,28.5859,15.4141,30l5.1147-5.1147A5.9971,5.9971,0,1,0,24,14Zm0,10a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,24,24Z"></path>
                <path d="M17,12a3,3,0,1,0-3-3A3.0033,3.0033,0,0,0,17,12Zm0-4a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,17,8Z"></path>
                <path d="M12,24H4V17.9966L9,13l5.5859,5.5859L16,17.168l-5.5859-5.5855a2,2,0,0,0-2.8282,0L4,15.168V4H24v6h2V4a2.0023,2.0023,0,0,0-2-2H4A2.002,2.002,0,0,0,2,4V24a2.0023,2.0023,0,0,0,2,2h8Z"></path>
              </svg>

              <span className="mt-2 text-base leading-normal">
                upload your Photo{" "}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(file) => {
                  onFileChange(file, "dataset");
                }}
              />
            </label>
            <p
              className={`font-semibold ${
                progress.dataset === 100 ? "text-success" : "text-error"
              }`}
            >
              {fileName.dataset}
            </p>
            {progress.dataset === 0 || progress.dataset === 100 ? null : (
              <div className="flex items-center justify-center">
                <progress
                  className={`progress w-56 ${
                    progress.dataset >= 1 && progress.dataset <= 99
                      ? "progress-primary"
                      : progress.dataset === 100
                      ? "progress-success"
                      : "progress-warning"
                  }`}
                  value={progress.dataset}
                  max="100"
                />
                <span className="opacity-50 text-sm ml-2">
                  {`${Math.round(progress.dataset)}%`}
                </span>
              </div>
            )}
          </div>
          <div className="cursor-pointer ease-in duration-150 hover:-translate-y-1  flex flex-col items-center p-6 space-y-6 md:m-0 md:w-1/2 justify-center bg-grey-lighter">
            <label className="w-72 m-2 flex flex-col items-center px-4 py-6  rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-primary">
              <svg
                className="w-8 h-8 flex-none ml-2 -mr-1 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                viewBox="0 0 25 25"
              >
                <ellipse
                  cx="12.5"
                  cy="5"
                  fill="currentColor"
                  fillOpacity="0.25"
                  rx="7.5"
                  ry="2"
                ></ellipse>
                <path
                  d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
                  fill="currentColor"
                  opacity="0.5"
                ></path>
                <path
                  d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
                  fill="currentColor"
                  opacity="0.5"
                ></path>
                <path
                  d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="mt-2 text-base leading-normal">
                upload your model{" "}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(file) => {
                  onFileChange(file, "model");
                }}
              />
            </label>
            <p
              className={`font-semibold ${
                progress.model === 100 ? "text-success" : "text-info"
              }`}
            >
              {fileName.model}
            </p>
            {progress.model === 0 || progress.model === 100 ? null : (
              <div className="flex items-center justify-center">
                <progress
                  className={`progress w-56 ${
                    progress.model >= 1 && progress.model <= 99
                      ? "progress-primary"
                      : progress.model === 100
                      ? "progress-success"
                      : "progress-warning"
                  }`}
                  value={progress.model}
                  max="100"
                />
                <span className="opacity-50 text-sm ml-2">
                  {`${Math.round(progress.model)}%`}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid w-full justify-center">
        <BtnEnable />
      </div>
    </>
  );
};

export default Uploader;
// ? progress.model ===100?        <button className="w-60 btn btn-primary">Upload Dataset</button>
// ? progress.dataset===100 ?        <button className="w-60 btn btn-primary">Upload Model</button>
