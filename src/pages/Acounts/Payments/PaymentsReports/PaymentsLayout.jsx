import React from "react";
import Payments from "./Payments";
import NavButton from "../../../../components/btn/NavButton";
import TabbedLayout from "../../../../components/Layout/Layout";

const PaymentsLayout = () => {
  const renderButtons = [<NavButton name="Payments" />];
  const renderTabContents = [() => <Payments />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};
export default PaymentsLayout;
