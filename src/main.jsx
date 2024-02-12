import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "../src/styles/index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Homepage from "./pages/homePage.jsx";
import InternalBulk from "./pages/Stocks/BULKS/internalBulk.jsx";
import GrnLayout from "./pages/Stocks/GRN/GrnLayout.jsx";
import WarrantsLayout from "./pages/Stocks/Warrants/WarrantsLayout.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "grn",
        element: <GrnLayout />,
      },
      {
        path: "warrants",
        element: <WarrantsLayout />,
      },
      {
        path: "internalbulk",
        element: <InternalBulk />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
