import React from "react";
import NavButton from "../../../../components/btn/NavButton";
import TabbedLayout from "../../../../components/Layout/Layout";
import AuctionSale from "./AuctionSale";
import SaleDetail from "./SaleDetail";
import UnsoldLots from "./UnsoldLots";

const AuctionLayout = () => {
  const renderButtons = [
    <NavButton name="AUCTION SALE" />,
    <NavButton name="SALE DETAIL" />,
    <NavButton name="LOTS NOT SOLD" />,
  ];
  const renderTabContents = [
    () => <AuctionSale />,
    () => <SaleDetail />,
    () => <UnsoldLots />,
  ];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default AuctionLayout;
