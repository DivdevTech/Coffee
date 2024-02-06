import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "../src/styles/index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Homepage from "./pages/homePage.jsx";
import GrnList from "./pages/Stocks/GRN/GrnList.jsx";
import InternalBulk from "./pages/Stocks/bulks/internalBulk.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "grn",
        element: <GrnList />,
      },
      {
        path: "internalbulk",
        element: <InternalBulk />,
      },
    ],
  },
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
