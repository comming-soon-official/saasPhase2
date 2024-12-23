import React from "react";
import ReactApexChart from "react-apexcharts";

const categories = ["Image", "Text", "Object", "Structured", "Regression"];
export const SuccessFailureCharts = () => {
  const series = [
    {
      name: "Sucessfull",
      data: [2, 1, 0, 5, 3],
    },
    {
      name: "Failure",
      data: [2, 0, 3, 0, 1],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    theme: {
      mode: "light",
    },
    legend: {
      show: true,
      theme: "dark",
    },
    markers: {
      size: 3,
      strokeWidth: 1,
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      show: false,
    },
    colors: ["#00E396", "#FF4560"],
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={350}
      />
    </div>
  );
};

export const TotalProjectCharts = ({
  image,
  text,
  structured,
  object,
  regression,
}) => {
  const series = [
    {
      name: "Success",
      data: [image, text, structured, object, regression],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    theme: {
      mode: "light",
    },

    markers: {
      size: 3,
      strokeWidth: 1,
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      show: false,
    },
    colors: ["#570DF8"],
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={350}
      />
    </div>
  );
};
