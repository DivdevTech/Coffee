import React from "react";
import GrnList from "./GrnList";
import GrnOutturn from "./GrnOutturns";
import RegisterGrn from "./RegisterGrn";
import TabbedLayout from "../../../components/Layout/Layout";
import NavButton from "../../../components/btn/NavButton";

const GrnLayout = () => {
  const renderButtons = () => [
    <NavButton key={1} name={"REGISTER GRNS"} />,
    <NavButton key={2} name={"GRN OUTTURN"} />,
    <NavButton key={3} name={"GRN list"} />,
  ];

  const renderTabContents = () => [
    () => <RegisterGrn key={1} />,
    () => <GrnOutturn key={2} />,
    () => <GrnList key={3} />,
  ];

  return (
    <div>
      <TabbedLayout
        buttonRenderers={renderButtons()}
        tabContentRenderers={renderTabContents()}
      />
    </div>
  );
};

export default GrnLayout;
