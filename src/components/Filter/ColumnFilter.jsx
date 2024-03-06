const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Show rows with values that:{""}
      <input
        className="filter-input"
        type=""
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
      <input
        className="filter-input"
        type=""
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default ColumnFilter;
