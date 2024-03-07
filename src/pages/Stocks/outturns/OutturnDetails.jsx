import React from "react";

const OutturnDetails = () => {
  return (
    <section className="outturnlist">
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
                <td>outturned weight</td>
                <td>Bags</td>
                <td>Pockets</td>
                <td>outturn No</td>
                <td>Warrrant Status</td>
                <td>Adjust Weight</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="pagination">"-1 2 3-"</div>
    </section>
  );
};

export default OutturnDetails;
