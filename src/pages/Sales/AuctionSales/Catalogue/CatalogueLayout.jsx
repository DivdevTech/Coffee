import React from "react";
import Catalogue from "./Catalogue";
import OnOfferOnly from "./OnOfferOnly";
import NavButton from "../../../../components/btn/NavButton";
import TabbedLayout from "../../../../components/Layout/Layout";

const CatalogueLayout = () => {
  const renderButtons = [
    <NavButton name="CATALOGUE" />,
    <NavButton name="On Offer Only" />,
  ];
  const renderTabContents = [() => <Catalogue />, () => <OnOfferOnly />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default CatalogueLayout;
