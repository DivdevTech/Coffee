import React from "react";
import myMenus from "./HomeMenus";
// import "../styles/nav.css";

const CustomNav = () => {
  return (
    <nav className="main-container">
      <div className="red-colored-div">
        <div className="nav2">
          {myMenus.map((items, index) => {
            return (
              <div key={index}>
                <p onClick={items.submenus}>{items.label}</p>
              </div>
            );
          })}
          {/* {myMenus.map((menu, index) => {
            return (
              <li className="menu-items" key={index}>
                <a href={menu.label}>{menu.submenus}</a>
              </li>
            );
          })} */}
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;
