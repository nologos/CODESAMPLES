import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Button from "./components/FourButton";

import Main from "./main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="">
      <App />
      <div style={{ backgroundColor: "pink" }}>
        <Header title="title from index.js as a property" button1="hello"></Header>
      </div>
      <Header />
      <Button one="random" two="red" three="blue" four="steel" />
      <p className="d-flex justify-content-around bg-light m-1">Main starting below</p>
      <Main />
      <div style={{ marginTop: "30rem" }}>test</div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
