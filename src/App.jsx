import React from "react";
import "./App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [value, onChange] = useState(new Date());
  const appont = new Date(value.getTime() + 9 * 60 * 60 * 1000);
  console.log(
    appont.toLocaleDateString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    })
  );
  const rem = appont / 1000 - new Date().getTime() / 1000;

  const ShowCounter = () => {
    let countDown = Number(rem);
    const days = Math.floor(countDown / (3600 * 24));
    const hours = Math.floor((countDown % (3600 * 24)) / 3600);
    const minutes = Math.floor((countDown % 3600) / 60);
    const seconds = Math.floor(countDown % 60);
    console.log(days, hours, minutes, seconds);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <button onClick={ShowCounter}>Click</button>
    </div>
  );
}

export default App;
