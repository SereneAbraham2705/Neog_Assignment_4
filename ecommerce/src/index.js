import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryContext,CategoryProvider } from "./contexts/CategoryContext";
import { CakeContext, CakeProvider } from "./contexts/CakeContext";
// Call make Server
makeServer();
export {CategoryContext};
export {CakeContext};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <CakeProvider>
        <App />
        </CakeProvider>
     
      </CategoryProvider>
   
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);
