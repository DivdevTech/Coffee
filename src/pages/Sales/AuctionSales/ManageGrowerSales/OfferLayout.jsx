import React from "react";
import TabbedLayout from "../../../../components/Layout/Layout";
import NavButton from "../../../../components/btn/NavButton";
import OfferNotification from "./OfferNotification";

const OfferLayout = () => {
  const renderButtons = [<NavButton name="OFFER NOTIFICATION" />];
  const renderTabContents = [() => <OfferNotification />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default OfferLayout;
