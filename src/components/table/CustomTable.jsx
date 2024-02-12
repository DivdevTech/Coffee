import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./OutturnColumns";
import MOCK_DATA from "../table/MOCK_DATA.json";
import TabbedLayout from "../Layout/Layout";
import { CiFilter } from "react-icons/ci";
import CustomFIlter from "../Filter/CustomFIlter";

const CustomTable = () => {
  const [filterModal, setFilterModal] = useState(false);

  const toggleFilterModal = () => {
    setFilterModal(!filterModal);
  };
  const filterPopup = () => <CustomFIlter />;

  const colums = useMemo(() => COLUMNS);
  const data = useMemo(() => MOCK_DATA);

  const tableInstance = useTable({
    columns: colums,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <TabbedLayout></TabbedLayout>
      <div
        className="tableContainer"
        style={{ backgroundColor: "rgb(245 191 144)" }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            maxWidth: "40%",
            marginLeft: "0",
          }}
        >
          <select name="season" id="">
            <option value="yearone">2021/2022</option>
            <option value="yeartwo">2022/2023</option>
            <option value="yearthree">2023/2024</option>
          </select>
          <button>
            <img
              style={{ height: "20px", width: "20px" }}
              src="src\assets\img\lens-icon.png"
              alt=""
            />
          </button>
          <button>EXPORT X</button>
        </nav>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              style={{ width: "80px" }}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div
                    style={{
                      width: "80px",
                      display: "flex",
                      alignItems: "right",
                      fontSize: "12px",
                      border: "1px solid",
                      borderTop: "none",
                      borderRight: "none",
                      borderColor: "blue",
                    }}
                  >
                    {column.render("Header")}

                    <button
                      onClick={toggleFilterModal && filterPopup}
                      style={{ background: "none", border: "none" }}
                    >
                      <CiFilter />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td style={{ fontSize: "14px" }} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <CustomFIlter />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default CustomTable;
