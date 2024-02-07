// all stylings at index.css
import React from "react";

const NavButton = ({ name }) => {
  const btnName = name;
  return (
    <div>
      <button>{btnName}</button>
    </div>
  );
};

export default NavButton;
