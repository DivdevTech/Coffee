import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

const TabbedLayout = ({ buttonRenderers, tabContentRenderers }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <Link to={"/home"}>
        <button style={{ width: "30px" }} className="closeBtn">
          X
        </button>
      </Link>

      <nav className="pagesNav">
        <div style={{ display: "flex" }}>
          {buttonRenderers &&
            buttonRenderers.map((renderer, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={activeTabIndex === index ? "active" : ""}
              >
                {renderer}
              </div>
            ))}
        </div>
      </nav>

      <div className="tabContent">
        {tabContentRenderers && tabContentRenderers[activeTabIndex]()}
      </div>
    </div>
  );
};

export default TabbedLayout;
