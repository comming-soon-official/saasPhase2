import Navbar from "layouts/Navbar";
import React, { useState } from "react";
import { useEffect } from "react";
import ModelExplainblity from "./ModelExplainblity";
const ImageReport = () => {
  let jsonPath = "/data/image/";
  const [jsonData, setJsonData] = useState();
  useEffect(() => {
    // console.log(jsonPath);
    fetch(jsonPath + "json_metadata.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setJsonData(() => result);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Navbar />
      {jsonData ? <ModelExplainblity path={jsonPath} data={jsonData} /> : null}
    </div>
  );
};

export default ImageReport;
