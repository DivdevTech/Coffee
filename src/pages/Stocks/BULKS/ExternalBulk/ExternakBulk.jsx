import React from "react";
import Accordion from "../../../../components/accordion/Accordion";

const ExternakBulk = () => {
  return (
    <section>
      <div style={{ display: "flex" }} className="grnhead">
        <span>
          <label className="grn-season" htmlFor="">
            SEASON*
          </label>
          <select name="" id="">
            <option>2021/2022</option>
            <option>2022/2023</option>
            <option>2023/2024</option>
          </select>
        </span>
        <span>
          <label className="grnno" htmlFor="">
            OUTTURN:
          </label>
          <input className="grnno-input" type="text" placeholder="WSR" />
        </span>
        <span>
          <button className="grn-button">SEARCH</button>
        </span>
      </div>

      <div className="grn-accordions">
        <Accordion />
        {/* add material ui form here */}
      </div>
    </section>
  );
};

export default ExternakBulk;
