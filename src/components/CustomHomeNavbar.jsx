import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomNav = (props) => {
  const { navLinksData } = props;
  const [showSubMenu, setShowSubMenu] = useState([]);

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
        {navLinksData.map((items) => {
          if (!items.children) {
            return (
              <li key={items.id}>
                <Link to="" className="header-nav-link">
                  <span>{items.name}</span>
                </Link>
              </li>
            );
          }

          return (
            <li
              onMouseEnter={(event) => subMenuOnMouseEnterHandler(items.id)}
              onMouseLeave={(event) => subMenuOnMouseLeaveHandler(items.id)}
              key={items.id}
              className="header-nav-options options-hover"
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
                  items.children.map((subitems) => {
                    if (!subitems.children) {
                      return (
                        <li key={subitems.id} className="sub-menu-li">
                          <Link
                            to={subitems.url}
                            className="sub-menu-link"
                            style={{ textDecoration: "none" }}
                          >
                            <span>{subitems.name}</span>
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li
                        onMouseEnter={() =>
                          subMenuOnMouseEnterHandler(subitems.id)
                        }
                        onMouseLeave={() =>
                          subMenuOnMouseLeaveHandler(subitems.id)
                        }
                        key={subitems.id}
                        className="sub-menu-options sub-menu-hover"
                      >
                        <div className="sub-menu-div">
                          <span>{subitems.name}</span>
                          <span className="arrow">{" >"}</span>
                        </div>
                        <motion.ul
                          variants={variants}
                          animate={showSubMenu[subitems.id] ? "open" : "closed"}
                          className="sub-menu-ul"
                        >
                          {showSubMenu[subitems.id] &&
                            subitems.children.map((subitemsm) => {
                              return (
                                <li
                                  key={subitemsm.id}
                                  className="grand-child-link"
                                >
                                  <a href="#">
                                    <span>{subitemsm.name}</span>
                                  </a>
                                </li>
                              );
                            })}
                        </motion.ul>
                      </li>
                    );
                  })}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CustomNav;
