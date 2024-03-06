import React from "react";
import Accordion from "../../../components/accordion/Accordion";

const Warrant = () => {
  return (
    <section>
      <div style={{ display: "flex" }} className="warrant-head">
        <span className="warrant-season">
          <select >
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
          <button className="search-warrants">SEARCH</button>
        </span>
      </div>

      <div className="grn-accordions">
        <Accordion />
        {/* add material ui warrant here */}
      </div>

      <div className="warrant-wrapper">
        {/* warrant table 1 */}
        <div className="warrant-table">
          <nav className="warrant-nav">
            <div className="OG">
              <button>
                <h6 class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fa fa-info fa-stack-1x"></i>
                </h6>{" "}
                <p>Original Grade</p>
              </button>
            </div>
            <div className="max-weight">
              <p>Maximum Weight:10791</p>
            </div>
            <div className="w-weight">
              <p>Warranted Weight: 6605</p>
            </div>
            <div className="rmv-btn">
              <button>Remove Sample</button>
            </div>
          </nav>
          <table className="mini-table">
            <thead>
              <tr>
                <td>Season </td>
                <td>Outturn </td>
                <td>Grade</td>
                <td>Grower</td>
                <td>GrnWeight</td>
                <td>Warranted Weight</td>
                <td>WBags</td>
                <td>WPkts</td>
                <td>Class</td>
                <td>Adjust Weight</td>
              </tr>
            </thead>
            <tbody>
              <tr className="row-one">
                <td>2023/2024</td>
                <td> 01TK0010</td>
                <td> C</td>
                <td>JOWAKI</td>
                <td>10791</td>
                <td>4209</td>
                <td>70</td>
                <td>9</td>
                <td>5</td>
                <td>
                  <button>pencil</button>
                </td>
              </tr>
              <tr className="row-two">
                <td>2023/2024</td>
                <td> 01TK0010</td>
                <td> C</td>
                <td>JOWAKI</td>
                <td>10791</td>
                <td>4209</td>
                <td>70</td>
                <td>9</td>
                <td>5</td>
                <td>
                  <button>pencil</button>
                </td>
              </tr>
              <tr className="row-three">
                <td>2023/2024</td>
                <td> 01TK0010</td>
                <td> C</td>
                <td>JOWAKI</td>
                <td>10791</td>
                <td>4209</td>
                <td>70</td>
                <td>9</td>
                <td>5</td>
                <td>
                  <button>pencil</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* warrant table 2 */}
        <div className="warrant-table2">
          <nav className="warrant-nav">
            <div className="OG">
              <button>
                <h6>
                  <i
                    class="fa fa-gear fa-spin "
                    style={{ fontSize: "24px", marginTop: "10px" }}
                  ></i>
                </h6>{" "}
                <p style={{ padding: "2px 10px" }}>Split outturn</p>
              </button>
            </div>
            <div className="post-warrrants">
              <button>
                {" "}
                <i class="fa fa-check-circle check-icon-background"></i>
                Post Warrants
              </button>
            </div>
            <div className="split-weight">
              <p>Split weights:</p>
            </div>
            <div className="enable-btn">
              <button>Click to enable</button>
            </div>
          </nav>
          <table className="mini-table">
            <thead>
              <tr>
                <td>Warrant No </td>
                <td>Weight</td>
                <td>Bags</td>
                <td>Pkts</td>
                <td>%</td>
                <td>Remove</td>
                <td>Edit</td>
                <td>Draw Sample</td>
              </tr>
            </thead>
            <tbody>
              <tr className="row-one">
                <td>62251</td>
                <td>4209</td>
                <td>70</td>
                <td>9</td>
                <td>0.3900</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button>pencil</button>
                </td>
                <td>
                  <button>pencil</button>
                </td>
              </tr>
              <tr className="row-two">
                <td>62251</td>
                <td>4209</td>
                <td>70</td>
                <td>9</td>
                <td>0.3900</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button>pencil</button>
                </td>
                <td>
                  <button>pencil</button>
                </td>
              </tr>
              <tr className="row-three">
                <td>62251</td>
                <td>4209</td>
                <td>70</td>
                <td>9</td>
                <td>0.3900</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button>pencil</button>
                </td>
                <td>
                  <button>pencil</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Warrant;
