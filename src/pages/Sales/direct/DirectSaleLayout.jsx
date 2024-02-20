import React from "react";
import DirectSale from "./DirectSale";
import DirectSaleDetail from "./DirectSaleDetail";
import NavButton from "../../../components/btn/NavButton";
import TabbedLayout from "../../../components/Layout/Layout";

const DirectSaleLayout = () => {
  const renderButtons = [
    <NavButton name="DIRECT SALE" />,
    <NavButton name="DIRECT SALE DETAIL" />,
  ];
  const renderTabContents = [() => <DirectSale />, () => <DirectSaleDetail />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default DirectSaleLayout;
