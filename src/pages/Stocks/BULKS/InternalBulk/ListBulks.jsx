import React from "react";

const ListBulks = () => {
  return (
    <section className="int-bulklist">
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
                <td>bulked weight</td>
                <td>Bags</td>
                <td>Pockets</td>
                <td>bulk No</td>
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

export default ListBulks;
