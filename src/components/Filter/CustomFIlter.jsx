import React, { useState } from "react";
import "./CustomFilter.css";
import MOCK_DATA from "../table/MOCK_DATA.json";

const CustomFilter = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [selectedOption, setSelectedOption] = useState("is equal to");
  const [searchValue, setSearchValue] = useState("");
  const [matchCase, setMatchCase] = useState(false);
  const [filteredData, setFilteredData] = useState(MOCK_DATA);

  const closeFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleMatchCaseToggle = () => {
    setMatchCase(!matchCase);
  };

  const applyFilter = () => {
    let filteredResults = MOCK_DATA.filter((item) => {
      const value = matchCase ? searchValue : searchValue.toLowerCase();
      const fieldValue = matchCase
        ? item[selectedOption]
        : item[selectedOption].toLowerCase();

      switch (selectedOption) {
        case "is equal to":
          return fieldValue === value;
        case "is not equal to":
          return fieldValue !== value;
        case "starts with":
          return fieldValue.startsWith(value);
        case "ends with":
          return fieldValue.endsWith(value);
        case "contains":
          return fieldValue.includes(value);
        case "does not contain":
          return !fieldValue.includes(value);
        case "is contained in":
          return value.includes(fieldValue);
        case "is not contained in":
          return !value.includes(fieldValue);
        case "is empty":
          return fieldValue === "";
        case "is not empty":
          return fieldValue !== "";
        case "is less than":
          return parseFloat(fieldValue) < parseFloat(value);
        case "is not less than":
          return parseFloat(fieldValue) >= parseFloat(value);
        case "is less than or equal to":
          return parseFloat(fieldValue) <= parseFloat(value);
        case "is greater than":
          return parseFloat(fieldValue) > parseFloat(value);
        case "is greater than or equal to":
          return parseFloat(fieldValue) >= parseFloat(value);
        case "is null":
          return fieldValue === null || fieldValue === undefined;
        case "is not null":
          return fieldValue !== null && fieldValue !== undefined;
        // Add more cases for other filter options
        default:
          return true;
      }
    });

    setFilteredData(filteredResults);
  };

  return (
    <div className={`filter-container ${showFilter ? "show" : "hide"}`}>
      <div className="filter-header">
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">Select All</label>
        <button className="close-btn" onClick={closeFilter}>
          x
        </button>
      </div>
      <div className="namepick">
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label> <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">LIMWE/EB3333</label>
        <br />
      </div>
      <div className="grower-checkboxes">{/* Add your checkboxes here */}</div>
      <div className="filter-options">
        <p style={{ fontSize: "12px" }}>Show rows with value that</p>
        <div className="select-container">
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="is equal to">Is equal to</option>
            <option value="is not equal to">Is not equal to</option>
            <option value="starts with">Starts with</option>
            <option value="ends with">Ends with</option>
            <option value="contains">Contains</option>
            <option value="does not contain">Does not contain</option>
            <option value="is contained in">Is contained in</option>
            <option value="is not contained in">Is not contained in</option>
            <option value="is empty">Is empty</option>
            <option value="is not empty">Is not empty</option>
            <option value="is less than">Is less than</option>
            <option value="is not less than">Is not less than</option>
            <option value="is less than or equal to">
              Is less than or equal to
            </option>
            <option value="is greater than">Is greater than</option>
            <option value="is greater than or equal to">
              Is greater than or equal to
            </option>
            <option value="is null">Is null</option>
            <option value="is not null">Is not null</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <br />
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Enter value"
        />

        <div className="logical-operator">
          <select>
            <option value="and">AND</option>
            <option value="or">OR</option>
          </select>
        </div>
      </div>
      <div className="select-container">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="is equal to">Is equal to</option>
          <option value="is not equal to">Is not equal to</option>
          <option value="starts with">Starts with</option>
          <option value="ends with">Ends with</option>
          <option value="contains">Contains</option>
          <option value="does not contain">Does not contain</option>
          <option value="is contained in">Is contained in</option>
          <option value="is not contained in">Is not contained in</option>
          <option value="is empty">Is empty</option>
          <option value="is not empty">Is not empty</option>
          <option value="is less than">Is less than</option>
          <option value="is not less than">Is not less than</option>
          <option value="is less than or equal to">
            Is less than or equal to
          </option>
          <option value="is greater than">Is greater than</option>
          <option value="is greater than or equal to">
            Is greater than or equal to
          </option>
          <option value="is null">Is null</option>
          <option value="is not null">Is not null</option>
          {/* Add more options as needed */}
        </select>

        {/* <span className="arrow">&#x25BC;</span> */}
      </div>
      <br />
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Enter value"
      />

      <div className="filter-actions">
        <button className="filter-btn" onClick={applyFilter}>
          Filter
        </button>
        <button
          className="clear-filter-btn"
          onClick={() => setFilteredData(MOCK_DATA)}
        >
          Clear Filter
        </button>
      </div>
      {/* Display filtered data */}
      <div className="filtered-data-container">
        {filteredData.map((item, index) => (
          <div key={index} className="filtered-data-item"></div>
        ))}
      </div>
    </div>
  );
};

export default CustomFilter;
