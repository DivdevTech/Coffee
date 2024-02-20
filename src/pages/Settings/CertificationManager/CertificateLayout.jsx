import React from "react";
import NavButton from "../../../components/btn/NavButton";
import TabbedLayout from "../../../components/Layout/Layout";
import Certificate from "./Certificate";

const CertificateLayout = () => {
  const renderButtons = [<NavButton name="Certificate" />];
  const renderTabContents = [() => <Certificate />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default CertificateLayout;
