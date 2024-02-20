import React from "react";
import GradeSettings from "./GradeSettings";
import SeasonSettings from "./SeasonSettings";
import NavButton from "../../../components/btn/NavButton";
import TabbedLayout from "../../../components/Layout/Layout";
import QualitySettings from "./QualitySettings";
import QualityGroupSettings from "./QualityGroupSettings";
import ParchmentSettings from "./ParchmentSettings";
import BagSettings from "./BagSettings";
import GrowerSettings from "./GrowerSettings";
import CurrencySettings from "./CurrencySettings";
import ExchangeRateSettings from "./ExchangeRateSettings";
import ChargesSettings from "./ChargesSettings";
import TitleSettings from "./TitleSettings";
import BulkSettings from "./BulkSettings";

const SettingsLayout = () => {
  const renderButtons = [
    <NavButton name="GRADES" />,
    <NavButton name="SEASONS" />,
    <NavButton name="QUALITY" />,
    <NavButton name="QUALITY GROUPS" />,
    <NavButton name="PARCHMENT TYPES" />,
    <NavButton name="BAGS" />,
    <NavButton name="GROWER TYPES" />,
    <NavButton name="CURRENCY" />,
    <NavButton name="EXCHANGE RATES" />,
    <NavButton name="CHARGES" />,
    <NavButton name="TITLES" />,
    <NavButton name="BULK THRESHHOLD" />,
  ];
  const renderTabContents = [
    () => <GradeSettings />,
    () => <SeasonSettings />,
    () => <QualitySettings />,
    () => <QualityGroupSettings />,
    () => <ParchmentSettings />,
    () => <BagSettings />,
    () => <GrowerSettings />,
    () => <CurrencySettings />,
    () => <ExchangeRateSettings />,
    () => <ChargesSettings />,
    () => <TitleSettings />,
    () => <BulkSettings />,
  ];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default SettingsLayout;
