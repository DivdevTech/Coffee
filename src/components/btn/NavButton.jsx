// all stylings at index.css
import React from "react";

const NavButton = ({ name }) => {
  const btnName = name;
  return (
    <div className="menu-btns">
      <button className="nav-btns">{btnName}</button>
    </div>
  );
};

export default NavButton;
