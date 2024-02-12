import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomNav = (props) => {
  const { navLinksData } = props;
  const [showSubMenu, setShowSubMenu] = useState([]);
  // const [showGrandSubMenu, setShowGrandSubMenu] = useState([]);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };

  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <nav>
      <ul className="main-nav">
        {navLinksData.map((items) => (
          <li
            key={items.id}
            className="header-nav-options options-hover"
            onMouseEnter={() => subMenuOnMouseEnterHandler(items.id)}
            onMouseLeave={() => subMenuOnMouseLeaveHandler(items.id)}
          >
            <div className="header-nav-div">
              <span>{items.name}</span>
            </div>
            <motion.ul
              variants={variants}
              animate={showSubMenu[items.id] ? "open" : "closed"}
              className="header-nav-ul"
            >
              {showSubMenu[items.id] &&
                items.children &&
                items.children.map((subitems) => (
                  <li
                    key={subitems.id}
                    className="sub-menu-options sub-menu-hover"
                    onMouseEnter={() => subMenuOnMouseEnterHandler(subitems.id)}
                    onMouseLeave={() => subMenuOnMouseLeaveHandler(subitems.id)}
                  >
                    <div className="sub-menu-div">
                      <Link
                        style={{
                          textDecoration: "none",
                          fontSize: "15px",
                          color: "black",
                        }}
                        to={subitems.url}
                      >
                        <span>{subitems.name}</span>
                      </Link>
                    </div>
                    <motion.ul
                      variants={variants}
                      animate={showSubMenu[subitems.id] ? "open" : "closed"}
                      className="sub-menu-ul"
                    >
                      {showSubMenu[subitems.id] &&
                        subitems.children &&
                        subitems.children.map((subitems) => (
                          <li key={subitems.id} className="grand-child-link">
                            <Link to={subitems.url}>
                              <span>{subitems.name}</span>
                            </Link>
                          </li>
                        ))}
                      {/* {showSubMenu[subitems.id] &&
                        subitems.children.children &&
                        subitems.children.children.map((grandsubitems) => (
                          <li
                            key={grandsubitems.id}
                            className="grand-child-link"
                          >
                            <Link to={grandsubitems.url}>
                              <span>{grandsubitems.name}</span>
                            </Link>
                          </li>
                        ))} */}
                    </motion.ul>
                  </li>
                ))}
            </motion.ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;
