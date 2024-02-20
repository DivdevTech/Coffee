import React from "react";
import TabbedLayout from "../../../components/Layout/Layout";
import NavButton from "../../../components/btn/NavButton";
import Warrant from "./Warrant";
import WarrantedList from "./WarrantedList";

const WarrantsLayout = () => {
  const renderButton = () => [
    
    <NavButton name={"Warrant"} />,
    <NavButton name={"Warranted list"} />,
  ];

  const renderTabContent = () => [() => <Warrant />, () => <WarrantedList />];

  return (
    <div>
      <TabbedLayout
        buttonRenderers={renderButton()}
        tabContentRenderers={renderTabContent()}
      />
    </div>
  );
};

export default WarrantsLayout;
