import React from "react";
import CustomNav from "../components/Layout/CustomHomeNavbar";
import data from "../data.json";
const Homepage = () => {
  return (
    <div className="App">
      <div className="header-parent">
        <header className="header">
          <CustomNav navLinksData={data} />
        </header>
      </div>
    </div>
  );
};

export default Homepage;
