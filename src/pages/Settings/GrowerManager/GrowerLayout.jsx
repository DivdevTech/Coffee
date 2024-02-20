import React from "react";
import GrowerRegistration from "./GrowerRegistration";
import GrowerDetails from "./GrowerDetails";
import NavButton from "../../../components/btn/NavButton";
import TabbedLayout from "../../../components/Layout/Layout";

const GrowerLayout = () => {
  const renderButtons = [
    <NavButton name="REGISTRATION" />,
    <NavButton name="GROWER DETAILS" />,
  ];
  const renderTabContents = [
    () => <GrowerRegistration />,
    () => <GrowerDetails />,
  ];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default GrowerLayout;
