import React from "react";
import "./App.css";
import Table from "./components/Table/Table";
import Chart from "./components/PieChart/PieChart";

function App() {
  return (
    <>
      <div className="container">
        {/* <Table data={data} rowsPerPage={6} /> */}
        <Chart />
      </div>
    </>
  );
}

export default App;
