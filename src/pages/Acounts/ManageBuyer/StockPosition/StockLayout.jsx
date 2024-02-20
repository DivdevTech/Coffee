import React from "react";
import TabbedLayout from "../../../../components/Layout/Layout";
import NavButton from "../../../../components/btn/NavButton";
import StockStatus from "./StockStatus";

const StockLayout = () => {
  const renderButtons = [<NavButton name="STOCK STATUS" />];
  const renderTabContents = [() => <StockStatus />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default StockLayout;
