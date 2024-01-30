import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homePage.jsx";
import CustomNav from "./components/CustomNav.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);