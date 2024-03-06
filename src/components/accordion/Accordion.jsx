import React, { useState, useEffect, useRef } from "react";
import "./Accordion.css";
import Chevron from "./chevron.svg";

export default function Accordion(prop) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <img className={toggle && "active"} src={Chevron} />
        <span>accordion</span>
      </button>
      <div className="hor-line"></div>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        {/* <p aria-hidden={toggle ? "true" : "false"}>form</p> */}
      </div>
    </div>
  );
}
