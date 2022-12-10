import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Chart() {
  const series = [44, 55];
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Accepted", "Rejected"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div style={{ width: "100vw" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={450}
      />
    </div>
  );
}
