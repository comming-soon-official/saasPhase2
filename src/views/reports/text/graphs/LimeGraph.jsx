import React from "react";
import ReactApexChart from "react-apexcharts";

const LimeGraph = () => {
  const series = [
    {
      name: "Males",
      data: [0, 0.65, 2, 0.88, 0],
    },
    {
      name: "Females",
      data: [-0.8, 0, 0, 0, -3.7],
    },
  ];
  const options = {
    chart: {
      toolbar: false,
      type: "bar",
      height: 440,
      stacked: true,
    },
    theme: {
      mode: "light",
    },

    colors: ["#008FFB", "#FF4560"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {
        // text: 'Age',
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%";
        },
      },
    },
    xaxis: {
      categories: [
        "45-49",
        "40-44",
        "35-39",
        "30-34",
        "25-29",
        "20-24",
        "15-19",
        "10-14",
        "5-9",
        "0-4",
      ],
      title: {
        text: "Percent",
      },
      labels: {
        formatter: function (val) {
          return Math.abs(Math.round(val)) + "%";
        },
      },
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        // height={700}
      />
    </div>
  );
};

export default LimeGraph;
