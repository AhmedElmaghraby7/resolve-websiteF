import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RouterProvider } from "react-router-dom";
// import router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <App></App>
);
