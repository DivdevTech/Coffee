import React from "react";

const QualityList = () => {return (
  <section className="qualitylist">
    <div className="wrapper">
      <div className="w-nav">
        <button className="load-data">
          <i class="fa fa-cloud-download" style={{ FontSize: "36px" }}></i>
        </button>
      </div>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <td>Outturn</td>
              <td>Grade</td>
              <td>Season</td>
              <td>Class</td>
              <td>qualityed weight</td>
              <td>Bags</td>
              <td>Pockets</td>
              <td>quality No</td>
              <td>Warrrant Status</td>
              <td>Adjust Weight</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div className="pagination">"-1 2 3-"</div>
  </section>
); return <div>QualityList</div>;
};

export default QualityList;
