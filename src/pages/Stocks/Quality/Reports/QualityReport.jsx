import React from "react";

const QualityReport = () => {
  return (
    <section className="qr-wrapper">
      <div style={{ display: "flex" }} className="quality-head">
        <span className="quality-season">
          <label className="grn-season">SEARCH:</label>
          <select>
            <option>2021/2022</option>
            <option>2022/2023</option>
            <option>2023/2024</option>
          </select>
        </span>

        <span>
          <label className="grade" htmlFor="">
            GRADE
          </label>
          <input className="grade-input" type="text" placeholder="C" />
        </span>
        <span>
          <label className="outturn" htmlFor="">
            OUTTURN
          </label>
          <input className="outturn-input" type="text" placeholder="01TK0010" />
        </span>

        <span>
          <button className="search-qualitys">SEARCH</button>
        </span>
      </div>
      <hr className="quality-hor" />
    </section>
  );
};

export default QualityReport;
