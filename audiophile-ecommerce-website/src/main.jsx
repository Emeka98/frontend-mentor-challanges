import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/index.jsx";
import { DataContextProvider } from "./context/basketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <RouterProvider router={routes} />
    </DataContextProvider>
  </React.StrictMode>
);
