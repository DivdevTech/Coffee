// import React, { useEffect, useMemo, useState } from "react";
// import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
// import { COLUMNS } from "../table/OutturnColumns";
// import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
// import axios from "axios";
// import GlobalFilter from "../Filter/GlobalFilter";

// //this is a table component imported in most pages to display tables
// const Hold = () => {
//   const [grn, setGrn] = useState([]);

//   useEffect(() => {
//     const fetchGrn = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/growers");
//         setGrn(res.data);
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchGrn();
//   }, []);

//   const column = useMemo(() => COLUMNS, []);

//   const data = useMemo(() => grn, [grn]);

//   const tableInstance = useTable(
//     {
//       columns: column,
//       data: data,
//     },
//     useFilters,
//     useGlobalFilter,
//     useSortBy
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     state,
//     setGlobalFilter,
//   } = tableInstance;
//   const { globalFilter } = state;
//   return (
//     <section>
//       <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr
//               style={{ width: "80px" }}
//               {...headerGroup.getHeaderGroupProps()}
//             >
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   <div className="tablehead">
//                     {column.render("Header")}
//                     <span>
//                       {column.isSorted ? (
//                         column.isSortedDesc ? (
//                           <TiArrowSortedDown />
//                         ) : (
//                           <TiArrowSortedUp />
//                         )
//                       ) : (
//                         ""
//                       )}
//                     </span>

//                     {column.canFilter ? column.render("Filter") : null}

//                     {/* <button
//                           onClick={toggleFilterModal && filterPopup}
//                           style={{ background: "none", border: "none" }}
//                         >
//                           <CiFilter />
//                         </button> */}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody key="table-body" {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <>
//                 <tr {...row.getRowProps()} className="tablerows">
//                   {row.cells.map((cell) => {
//                     return (
//                       <td
//                         className="tablerowsdata"
//                         style={{ fontSize: "14px" }}
//                         {...cell.getCellProps()}
//                       >
//                         {cell.render("Cell")}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               </>
//             );
//           })}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default Hold;




// this snippet has fixed the issue of key prop regarding the tbody section

import React, { useEffect, useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import { COLUMNS } from "../table/OutturnColumns";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import axios from "axios";
import GlobalFilter from "../Filter/GlobalFilter";
// import ColumnFilter from "../Filter/ColumnFilter";
import { MdFilterAlt } from "react-icons/md";
import Modal from "react-modal";

const Hold = () => {
  const [grn, setGrn] = useState([]);
  const [isModalOpen,   setIsModalOpen] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState(null);

  useEffect(() => {
    const fetchGrn = async () => {
      try {
        const res = await axios.get("http://localhost:8800/growers");
        setGrn(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGrn();
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => grn, [grn]);

  const tableInstance = useTable(
    {
      columns,
      data,
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

  const sortColumn = (columnId) => {
    const sortedColumn = columns.find((col) => col.id === columnId);
    if (sortedColumn) {
      sortedColumn.toggleSortBy(!sortedColumn.isSortedDesc, true);
    }
  };

  const openModal = (columnId) => {
    setSelectedColumnId(columnId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openFilterModal = (columnId) => {
    openModal(columnId);
  };

  return (
    <section>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()}>
                  <div
                    className="tablehead"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div onClick={() => sortColumn(column.id)}>
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
                    {column.canFilter ? (
                      <MdFilterAlt
                        onClick={() => openFilterModal(column.id)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : null}
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
              <tr {...row.getRowProps()} className="tablerows" key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    key={cell.getCellProps().key}
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
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal">
        <h2>Filter Modal for Column {selectedColumnId}</h2>
        {/* Your modal content here */}
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </section>
  );
};

export default Hold;
