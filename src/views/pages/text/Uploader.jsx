import React, { useState } from "react";
import Parse from "services/parseService";
// import StartButton from "../../components/StartButton";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Modal from "features/components/Modal";
import { errorNotify, successNotify } from "services/Notifications";
import { currentUser } from "services/AuthAPI";

const Uploader = () => {
  // const Popup = () => {
  //   return (

  //   );
  // };

  const [fileName, setFileName] = useState({
    model: "",
    embedded: "",
    dataset: "",
  });
  const [progress, setProgress] = useState({
    model: 0,
    embedded: 0,
    dataset: 0,
  });

  useEffect(() => {
    if (
      progress.model === 100 ||
      progress.embedded === 100 ||
      progress.dataset
    ) {
      successNotify("Horray!", "Need more, Neeed Moreee");
    }
  }, [progress.model, progress.embedded, progress.dataset]);

  const BtnEnable = () => {
    if (progress.model === 100 && progress.dataset === 100) {
      return (
        <Modal
          route="/text"
          topicPlaceholder="Text Eval"
          discriptionPlaceholder="Text Modelling to check accuricy"
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
    } else if (dbname === "embedded") {
      setFileName((prev) => {
        let tempValue = { ...prev };
        tempValue.embedded = `${filename} (${checkSize})`;
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
          } else if (dbname === "embedded") {
            setProgress((prev) => {
              let tempValue = { ...prev };
              tempValue.embedded = value * 100;
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
        currentUser().set(dbname, res._url);
        currentUser().save();
        var newStore = new Parse.Object("File");
        newStore.set("File", parseFile);
        newStore.save();
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
            Text Classification
          </h2>
        </div>{" "}
        <div className="space-x-3 space-y-0 container flex flex-col items-center px-6 mx-auto mt-10  lg:flex-row ">
          <div className="cursor-pointer ease-in duration-150 hover:-translate-y-1  flex flex-col items-center p-6 space-y-6 md:m-0 md:w-1/3 justify-center bg-grey-lighter">
            <label className="w-72 m-2 flex flex-col items-center px-4 py-6  rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-primary">
              <svg
                className="w-8 h-8 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15.825 1.88748H6.0375C5.74917 1.88777 5.47272 2.00244 5.26884 2.20632C5.06496 2.4102 4.95029 2.68665 4.95 2.97498V4.60623H2.775C2.48667 4.60652 2.21022 4.72119 2.00634 4.92507C1.80246 5.12895 1.68779 5.4054 1.6875 5.69373V16.025C1.68779 16.3133 1.80246 16.5898 2.00634 16.7936C2.21022 16.9975 2.48667 17.1122 2.775 17.1125H15.825C16.1133 17.1122 16.3898 16.9975 16.5937 16.7936C16.7975 16.5898 16.9122 16.3133 16.9125 16.025V2.97498C16.9122 2.68665 16.7975 2.4102 16.5937 2.20632C16.3898 2.00244 16.1133 1.88777 15.825 1.88748ZM6.0375 2.97498H15.825V4.60623H6.0375V2.97498ZM15.825 8.41248H11.475V5.69373H15.825V8.41248ZM6.0375 12.2187V9.49998H10.3875V12.2187H6.0375ZM10.3875 13.3062V16.025H6.0375V13.3062H10.3875ZM4.95 12.2187H2.775V9.49998H4.95V12.2187ZM10.3875 5.69373V8.41248H6.0375V5.69373H10.3875ZM11.475 9.49998H15.825V12.2187H11.475V9.49998ZM4.95 5.69373V8.41248H2.775V5.69373H4.95ZM2.775 13.3062H4.95V16.025H2.775V13.3062ZM11.475 16.025V13.3062H15.825V16.025H11.475Z"></path>
              </svg>

              <span className="mt-2 text-base leading-normal">
                upload your Dataset{" "}
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
          <div className="cursor-pointer ease-in duration-150 hover:-translate-y-1  flex flex-col items-center p-6 space-y-6 md:m-0 md:w-1/3 justify-center bg-grey-lighter">
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
          <div className=" cursor-pointer ease-in duration-150 hover:-translate-y-1  flex flex-col items-center p-6 space-y-6 md:m-0 md:w-1/3 justify-center bg-grey-lighter">
            <label className="w-72 m-2 flex flex-col items-center px-4 py-6  rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-primary">
              <svg
                className="w-8 h-8 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M12.3625 13.85H10.1875V12.7625H12.3625V10.5875H13.45V12.7625C13.4497 13.0508 13.335 13.3272 13.1312 13.5311C12.9273 13.735 12.6508 13.8497 12.3625 13.85V13.85Z"></path>
                <path d="M5.8375 8.41246H4.75V6.23746C4.75029 5.94913 4.86496 5.67269 5.06884 5.4688C5.27272 5.26492 5.54917 5.15025 5.8375 5.14996H8.0125V6.23746H5.8375V8.41246Z"></path>
                <path d="M15.625 5.14998H13.45V2.97498C13.4497 2.68665 13.335 2.4102 13.1312 2.20632C12.9273 2.00244 12.6508 1.88777 12.3625 1.88748H2.575C2.28666 1.88777 2.01022 2.00244 1.80633 2.20632C1.60245 2.4102 1.48778 2.68665 1.4875 2.97498V12.7625C1.48778 13.0508 1.60245 13.3273 1.80633 13.5311C2.01022 13.735 2.28666 13.8497 2.575 13.85H4.75V16.025C4.75028 16.3133 4.86495 16.5898 5.06883 16.7936C5.27272 16.9975 5.54916 17.1122 5.8375 17.1125H15.625C15.9133 17.1122 16.1898 16.9975 16.3937 16.7936C16.5975 16.5898 16.7122 16.3133 16.7125 16.025V6.23748C16.7122 5.94915 16.5975 5.6727 16.3937 5.46882C16.1898 5.26494 15.9133 5.15027 15.625 5.14998V5.14998ZM15.625 16.025H5.8375V13.85H8.0125V12.7625H5.8375V10.5875H4.75V12.7625H2.575V2.97498H12.3625V5.14998H10.1875V6.23748H12.3625V8.41248H13.45V6.23748H15.625V16.025Z"></path>
              </svg>
              <span className="mt-2 text-base leading-normal">
                upload your Embedded{" "}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(file) => {
                  onFileChange(file, "embedded");
                }}
              />
            </label>
            <p
              className={`font-semibold ${
                progress.embedded === 100 ? "text-success" : "text-error"
              }`}
            >
              {fileName.embedded}
            </p>
            {progress.embedded === 0 || progress.embedded === 100 ? null : (
              <div className="flex items-center justify-center">
                <progress
                  className={`progress w-56 ${
                    progress.embedded >= 1 && progress.embedded <= 99
                      ? "progress-primary"
                      : progress.embedded === 100
                      ? "progress-success"
                      : "progress-warning"
                  }`}
                  value={progress.embedded}
                  max="100"
                />
                <span className="opacity-50 text-sm ml-2">
                  {`${Math.round(progress.embedded)}%`}
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
