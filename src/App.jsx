import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { currentUser, ParseAnonymousUser } from "@/services/AuthAPI";
import ThemeChanger from "@/components/ThemeChanger";
// import Demo from "@/views/Demo";
import { Forget, Login, Signup } from "@/views/pages/auth";
import Home from "@/views/pages/home/Home";
import {
  imagePipeline,
  isUserLogined,
  objectPipeline,
  projectList,
  regressionPipeline,
  setCurrentUsername,
  structuredPipeline,
  textPipeline,
} from "@/redux/Slices/actions";

import {
  getImagePipeline,
  getObjectPipeline,
  getRegressionPipeline,
  getStructuredPipeline,
  getTextPipeline,
} from "@/services/ProjectAPI";
// const Home = lazy(() => import("@/views/pages/home/Home"));
const About = lazy(() => import("@/views/pages/about/About"));
const Contact = lazy(() => import("@/views/pages/contact/Contact"));
const Page404 = lazy(() => import("@/views/pages/errorpage/Page404"));
const Dashboard = lazy(() => import("@/layouts/Dashboard/Dashboard"));
const Image = lazy(() => import("@/views/pages/image/Image"));
const Text = lazy(() => import("@/views/pages/text/Text"));
const Structured = lazy(() => import("@/views/pages/structured/Structured"));
const TextExtractor = lazy(() =>
  import("@/features/text/extractor/TextExtractor")
);
const ImageExtractor = lazy(() =>
  import("@/features/image/extractor/ImageExtractor")
);

const ImageReport = lazy(() => import("@/views/reports/image/ImageReport"));
const TextReport = lazy(() => import("@/views/reports/text/TextReport"));

const App = () => {
  // const datas = useSelector((state) => state.user);
  // const imagepip = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    getImagePipeline().then((res) => {
      dispatch(imagePipeline(res));
    });
    getTextPipeline().then((res) => {
      dispatch(textPipeline(res));
    });
    getObjectPipeline().then((res) => {
      dispatch(objectPipeline(res));
    });
    getStructuredPipeline().then((res) => {
      dispatch(structuredPipeline(res));
    });
    getRegressionPipeline().then((res) => {
      dispatch(regressionPipeline(res));
    });
  }, []);
  useEffect(() => {
    return () => {
      if (currentUser() === null) {
        ParseAnonymousUser();
      }
    };
  }, []);
  useEffect(() => {
    return () => {
      if (currentUser()) {
        if (currentUser().get("email") !== undefined) {
          dispatch(isUserLogined(Boolean(true)));
          dispatch(setCurrentUsername(String(currentUser().get("email"))));
          dispatch(projectList(currentUser().get("Projects")));
        }
      }
    };
  }, []);
  return (
    <BrowserRouter>
      <ThemeChanger properties={"hidden"} />
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-12 h-12 rounded-full border-4 animate-spin border-primary"
            ></div>
            <h3 className="ml-6 text-xl">Please Wait...</h3>
          </div>
        }
      >
        <ToastContainer />
        <Routes>
          {/* <Route path="/temp" element={<Demo />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />

          <Route path="/" element={<Home />} />
          <Route path="/structured" element={<Structured />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/image">
            <Route index={true} element={<Image />} />
            <Route path="extractor" element={<ImageExtractor />} />
            <Route path="report" element={<ImageReport />} />
          </Route>

          <Route path="/text">
            <Route index={true} element={<Text />} />
            <Route path="extractor" element={<TextExtractor />} />
            <Route path="report" element={<TextReport />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
