import React from "react";
import CustomNav from "../components/Layout/CustomHomeNavbar";
import data from "../data.json";
import NavButton from "../components/btn/NavButton";
const Homepage = () => {
  return (
    <>
      <div className="App">
        <div className="header-parent">
          <header className="header">
            <CustomNav navLinksData={data} />
          </header>
        </div>
        <br />
        <br />
        <br />
      </div>

      
    </>
  );
};

export default Homepage;
