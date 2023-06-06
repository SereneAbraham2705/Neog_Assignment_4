import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryContext,CategoryProvider } from "./contexts/CategoryContext";
import { CakeContext, CakeProvider } from "./contexts/CakeContext";
import { AuthProvider } from "./contexts/AuthContext";
// Call make Server
makeServer();
export {CategoryContext};
export {CakeContext};
export {AuthProvider}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <CakeProvider>
          <AuthProvider>
          <App />
          </AuthProvider>
        
        </CakeProvider>
     
      </CategoryProvider>
   
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);
