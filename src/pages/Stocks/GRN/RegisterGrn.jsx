import React from "react";
import Accordion from "../../../components/accordion/Accordion";

const RegisterGrn = () => {
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
            GRN No
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
      
      <div className="form-table">
        <nav className="form-nav">
          <div className="add-outturn">
            <button>+ </button>
            <p>Add Outturn Grades</p>
          </div>
          <div className="numbers">
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
        </nav>
        <table className="mini-table">
          <thead>
            <tr>
              <td>Outturn No</td>
              <td>GRADE</td>
              <td>BAGS</td>
              <td>PKTS</td>
              <td>WEIGHT</td>
              <td>OPERATIONS</td>
            </tr>
          </thead>
          <tbody>
            <tr className="row-one">
              <td>48US0001</td>
              <td> T</td>
              <td> 1</td>
              <td>11</td>
              <td>71</td>
              <td>
                <button>pencil</button>
              </td>
            </tr>
            <tr>
              <td>48US0001</td>
              <td> PB</td>
              <td> 1</td>
              <td>57</td>
              <td>117</td>
              <td>
                <button>pencil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RegisterGrn;
