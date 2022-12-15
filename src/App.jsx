import React from "react";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Error from "./components/Error/Error";
import NotFound from "./components/NotFound/404";

function App() {
  const [show, setShow] = useState(true);
  const [alert, setAlert] = useState({
    type: "error",
    message: "Got IT rfef erf erfr fr",
  });
  return (
    <>
      <div className="container">
        {/* <Alert
          show={show}
          setShow={setShow}
          type={alert.type}
          message={alert.message}
        /> */}
        {/* <Error /> */}
      </div>
    </>
  );
}

export default App;
