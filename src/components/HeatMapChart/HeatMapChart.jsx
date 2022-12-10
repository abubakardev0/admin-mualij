import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Chart() {
  function generateData() {
    const list = [];
    for (let i = 1; i < 31; i++) {
      list.push({
        x: `${i}`,
        y: Math.floor(Math.random() * 2) + 1,
      });
    }
    return list;
  }
  const options = {
    series: [
      {
        name: "January",
        data: generateData(),
      },
      {
        name: "February",
        data: generateData(),
      },
      {
        name: "March",
        data: generateData(),
      },
      {
        name: "April",
        data: generateData(),
      },
      {
        name: "May",
        data: generateData(),
      },
      {
        name: "June",
        data: generateData(),
      },
      {
        name: "July",
        data: generateData(),
      },
      {
        name: "August",
        data: generateData(),
      },
      {
        name: "September",
        data: generateData(),
      },
      {
        name: "October",
        data: generateData(),
      },
      {
        name: "November",
        data: generateData(),
      },
      {
        name: "December",
        data: generateData(),
      },
    ],
    options: {
      chart: {
        height: 450,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#008FFB"],
      title: {
        text: "Your Mood",
      },
    },
  };
  return (
    <div style={{ width: "100vw" }}>
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="heatmap"
        height={450}
      />
    </div>
  );
}
