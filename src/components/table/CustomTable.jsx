import React, { useEffect, useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import { MdFilterAlt } from "react-icons/md";
import { COLUMNS } from "./OutturnColumns";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import axios from "axios";
import GlobalFilter from "../Filter/GlobalFilter";
// import ColumnFilter from "../Filter/ColumnFilter";
// import { color } from "framer-motion";

//this is a table component imported in most pages to display tables
const CustomTable = () => {
  const [grn, setGrn] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchGrn = async () => {
      try {
        const res = await axios.get("http://localhost:8800/growers");
        setGrn(res.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGrn();
  }, []);

  const column = useMemo(() => COLUMNS, []);

  const data = useMemo(() => grn, [grn]);

  const tableInstance = useTable(
    {
      columns: column,
      data: data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter } = state;

  const handleClick = (columnindex) => setClicked(columnindex);

  return (
    <section>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              style={{ width: "80px" }}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="tablehead">
                    <div>
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <TiArrowSortedDown />
                          ) : (
                            <TiArrowSortedUp />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="filter-button"
                        onClick={() => handleClick(index)}
                        style={{
                          backgroundColor: clicked === index ? "white" : "red",
                          color: "black",
                        }}
                      >
                        <MdFilterAlt />
                      </button>
                      {/* {column.canFilter ? column.render("Filter") : null} */}
                      {/* <button
                          onClick={toggleFilterModal && filterPopup}
                          style={{ background: "none", border: "none" }}
                        >
                          <CiFilter />
                        </button> */}
                    </div>
                  </div>
                  <div>
                    {clicked === index && (
                      <div className="modal-container">
                        <button
                          onClick={handleClick}
                          className="modal-close-btn"
                        >
                          X
                        </button>
                        <br />

                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()} className="tablerows">
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className="tablerowsdata"
                    style={{ fontSize: "14px" }}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default CustomTable;
