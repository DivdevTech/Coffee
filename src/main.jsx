import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "../src/styles/index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Homepage from "./pages/homePage.jsx";
import ExternalBulkLayout from "./pages/Stocks/BULKS/ExternalBulk/ExternalBulkLayout.jsx";
import InternalBulkLayout from "./pages/Stocks/BULKS/InternalBulk/InternalBulkLayout.jsx";
import GrnLayout from "./pages/Stocks/GRN/GrnLayout.jsx";
import WarrantsLayout from "./pages/Stocks/Warrants/WarrantsLayout.jsx";
import OutturnLayout from "./pages/Stocks/outturns/OutturnLayout.jsx";
import OperationsLayout from "./pages/Stocks/Quality/Operations/OperationsLayout.jsx";
import ReportsLayout from "./pages/Stocks/Quality/Reports/ReportsLayout.jsx";
import CatalogueLayout from "./pages/Sales/AuctionSales/Catalogue/CatalogueLayout.jsx";
import AuctionLayout from "./pages/Sales/AuctionSales/Auction/AuctionLayout.jsx";
import OfferLayout from "./pages/Sales/AuctionSales/ManageGrowerSales/OfferLayout.jsx";
import DirectSaleLayout from "./pages/Sales/direct/DirectSaleLayout.jsx";
import ManageDealersLayout from "./pages/Acounts/ManageBuyer/AuctionInvoice/ManageDealersLayout.jsx";
import StockLayout from "./pages/Acounts/ManageBuyer/StockPosition/StockLayout.jsx";
import PaymentsLayout from "./pages/Acounts/Payments/PaymentsReports/PaymentsLayout.jsx";
import GrowerLayout from "./pages/Settings/GrowerManager/GrowerLayout.jsx";
import ContractLayout from "./pages/Settings/ContractManager/ContractLayout.jsx";
import CertificateLayout from "./pages/Settings/CertificationManager/CertificateLayout.jsx";
import LocationLayout from "./pages/Settings/LocationManager/LocationLayout.jsx";
import AgentsLayout from "./pages/Settings/AgentsManager/AgentsLayout.jsx";
import SettingsLayout from "./pages/Settings/MoreSettings/SettingsLayout.jsx";
import UserLayout from "./pages/Admin/ManageUsers/UserLayout.jsx";
import PermissionsLayout from "./pages/Admin/ManagePermissions/PermissionsLayout.jsx";
import DataLayout from "./pages/Admin/ManageData/DataLayout.jsx";
import Hold from "./components/Filter/holdmyfile.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      // hold
      {
        path: "hold",
        element: <Hold />,
      },
      // home links
      {
        path: "home",
        element: <Homepage />,
      },

      // Stock links
      {
        path: "grn",
        element: <GrnLayout />,
      },
      {
        path: "warrants",
        element: <WarrantsLayout />,
      },
      {
        path: "outturns",
        element: <OutturnLayout />,
      },
      {
        path: "qualityoperation",
        element: <OperationsLayout />,
      },
      {
        path: "qualityreport",
        element: <ReportsLayout />,
      },
      {
        path: "internalbulk",
        element: <InternalBulkLayout />,
      },
      {
        path: "externalbulk",
        element: <ExternalBulkLayout />,
      },

      // sale links
      {
        path: "catalogue",
        element: <CatalogueLayout />,
      },
      {
        path: "auction",
        element: <AuctionLayout />,
      },
      {
        path: "offernotification",
        element: <OfferLayout />,
      },
      {
        path: "directsalelayout",
        element: <DirectSaleLayout />,
      },

      // accounts links
      {
        path: "dealers",
        element: <ManageDealersLayout />,
      },
      {
        path: "stockstatus",
        element: <StockLayout />,
      },
      {
        path: "payments",
        element: <PaymentsLayout />,
      },

      // settings links
      {
        path: "growerlayout",
        element: <GrowerLayout />,
      },
      {
        path: "contractlayout",
        element: <ContractLayout />,
      },
      {
        path: "certificationlayout",
        element: <CertificateLayout />,
      },
      {
        path: "locationlayout",
        element: <LocationLayout />,
      },
      {
        path: "agentlayout",
        element: <AgentsLayout />,
      },
      {
        path: "settinglayout",
        element: <SettingsLayout />,
      },

      //admin links
      {
        path: "userlayout",
        element: <UserLayout />,
      },
      {
        path: "permissionlayout",
        element: <PermissionsLayout />,
      },
      {
        path: "datalayout",
        element: <DataLayout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
