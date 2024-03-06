const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{""}
      <input
        type=""
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default GlobalFilter;
