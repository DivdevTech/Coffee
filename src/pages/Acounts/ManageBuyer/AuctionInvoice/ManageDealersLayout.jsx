import React from "react";
import NavButton from "../../../../components/btn/NavButton";
import TabbedLayout from "../../../../components/Layout/Layout";
import Dealers from "./Dealers";
import SaleDetails from "./SaleDetails";
import UnsoldLots from "./UnsoldLots";

const ManageDealersLayout = () => {
  const renderButtons = [
    <NavButton name="Dealers" />,
    <NavButton name="All Sale Details" />,
    <NavButton name="Unsold lots" />,
  ];
  const renderTabContents = [
    () => <Dealers />,
    () => <SaleDetails />,
    () => <UnsoldLots />,
  ];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default ManageDealersLayout;
