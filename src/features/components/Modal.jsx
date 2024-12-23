import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { currentUser, userSignup } from "@/services/AuthAPI";
import { errorNotify, successNotify } from "@/services/Notifications";
import { ModalSignup, ModalTopic } from "./ModalContents";

const Modal = (props) => {
  const { width, topicPlaceholder, discriptionPlaceholder, route } = props;
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confimPassword: "",
  });
  const [projectDetials, setProjectDetials] = useState({
    topic: "",
    discription: "",
  });
  const [active, setActive] = useState({
    count: 1,
    step1: true,
    step2: false,
    // step3: false,
  });
  const isLogined = useSelector((state) => state.user.isLogined);
  const handleNext = () => {
    setActive((prev) => {
      let tempState = { ...prev };
      if (tempState.count < 3) {
        tempState.count = tempState.count + 1;
      }
      if (tempState.count === 2) {
        tempState.step2 = true;
        return tempState;
      }
      return tempState;
    });
  };
  const handlePrevios = () => {
    setActive((prev) => {
      let tempState = { ...prev };
      if (tempState.count > 1) {
        tempState.count = tempState.count - 1;
      }
      if (tempState.count === 1) {
        tempState.step2 = false;
        return tempState;
      }

      return tempState;
    });
  };
  const handleDone = (e) => {
    e.preventDefault();
    userSignup(userData.email, userData.password)
      .then((res) => {
        if (res.success) {
          currentUser().set("topic", projectDetials.topic);
          currentUser().set("discription", projectDetials.discription);
          currentUser()
            .save()
            .then((res) => {
              successNotify(
                "Horray!",
                "You have created an account, go and take advantage of the plans."
              );
              setTimeout(() => {
                window.location = `${route}/extractor`;
              }, 3000);
            })
            .catch((error) => {
              errorNotify("Aww!", error.message);
            });
        }
        if (res.error) {
          errorNotify("Aww!", res.error.message);
          return false;
        }
      })
      .catch((error) => {
        errorNotify("Aww!", error.message);
      });
  };

  const handleDoneWithoutSignup = () => {
    currentUser().set("topic", projectDetials.topic);
    currentUser().set("discription", projectDetials.discription);
    currentUser()
      .save()
      .then((res) => {
        successNotify("Horray!", "Good luck on that new project of yours.");
        console.log("hello");
        setTimeout(() => {
          window.location = `${route}/extractor`;
        }, 3000);
      })
      .catch((error) => {
        errorNotify("Aww!", error.message);
      });
  };

  return (
    <div>
      <button
        className={`btn btn-primary ${width}`}
        onClick={() => setShowModal(true)}
      >
        Let's Go
      </button>

      {/* Put this part before </body> tag */}
      <div className={`modal ${showModal ? "modal-open" : null}`}>
        <div className="modal-box w-xl ">
          <div className="flex justify-end ">
            <button className="opacity-50" onClick={() => setShowModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {isLogined ? null : (
            <ul className="steps w-full mb-12">
              <li className={`step ${active.step1 ? "step-primary" : ""}`}>
                Register
              </li>
              <li className={`step ${active.step2 ? "step-primary" : ""}`}>
                Topic
              </li>
            </ul>
          )}
          {isLogined ? (
            <div className=" flex flex-col w-full items-center">
              <ModalTopic
                projectDetials={projectDetials}
                setProjectDetials={setProjectDetials}
                topicPlaceholder={topicPlaceholder}
                discriptionPlaceholder={discriptionPlaceholder}
              />
            </div>
          ) : (
            <div className=" flex flex-col w-full items-center">
              {active.count === 1 ? (
                <ModalSignup userData={userData} setUserData={setUserData} />
              ) : null}
              {active.count === 2 ? (
                <ModalTopic
                  projectDetials={projectDetials}
                  setProjectDetials={setProjectDetials}
                  topicPlaceholder={topicPlaceholder}
                  discriptionPlaceholder={discriptionPlaceholder}
                />
              ) : null}
            </div>
          )}
          {isLogined ? (
            <div className="modal-action">
              <button className="btn" onClick={handleDoneWithoutSignup}>
                Done
              </button>
            </div>
          ) : (
            <div className="modal-action">
              {active.count === 2 ? (
                <button className="btn" onClick={handleDone}>
                  Done
                </button>
              ) : (
                <button className="btn" onClick={handleNext}>
                  Next
                </button>
              )}

              {active.count === 2 ? (
                <button className="btn btn-error" onClick={handlePrevios}>
                  Previous
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
