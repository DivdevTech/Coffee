import { format } from "date-fns";
import ColumnFilter from "../Filter/ColumnFilter";

export const COLUMNS = [
  {
    Header: "Warrant",
    accessor: "GrowerId",
    Filter: ColumnFilter,
  },
  {
    Header: "GRN NO",
    accessor: "GrowerCode",
    Filter: ColumnFilter,
  },
  {
    Header: "Grower Mark",
    accessor: "GrowerMark",
    Filter: ColumnFilter,
  },
  {
    Header: "Grade",
    accessor: "GrowerPin",
    Filter: ColumnFilter,
  },
  {
    Header: "Outturn No",
    accessor: "GrowerTypeId",
    Filter: ColumnFilter,
  },
  {
    Header: "Season",
    accessor: "CreatedOn",
    Filter: ColumnFilter,
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Weight",
    accessor: "GrowerPostCode",
    Filter: ColumnFilter,
  },
  // {
  //   Header: "Bags",
  //   accessor: "GrowerPin",
  // },
  // {
  //   Header: "Pkts",
  //   accessor: "Pkts",
  // },
  // {
  //   Header: "Quality",
  //   accessor: "Quality",
  // },
  {
    Header: "Email",
    accessor: "GrowerEmail",
    Filter: ColumnFilter,
  },
  {
    Header: "Sellable_status",
    accessor: "FactoryID",
    Filter: ColumnFilter,
  },
  {
    Header: "GrowerPostalTown",
    accessor: "GrowerPostalTown",
    Filter: ColumnFilter,
  },
  // {
  //   Header: "Date",
  //   accessor: "Date",
  // },
];
