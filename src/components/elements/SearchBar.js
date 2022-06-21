import React, { useState } from "react";
import { MdGpsFixed } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ findCoordinates, searchCallback, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const doChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };
  const doSearch = () => {
    searchCallback(searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="search__bar">
      <div className="search__content">
        <div className="search__color">
          <BiSearch />
        </div>
        <div className="search__box">
          <input
            type="text"
            placeholder="검색"
            onChange={doChangeInput}
            onKeyPress={(e) => {
              return e.key === "Enter" && doSearch();
            }}
            value={searchTerm}
          />
        </div>
        <div className="gray-border" onClick={findCoordinates}>
          <MdGpsFixed />
        </div>
      </div>
      {error && <div className="error">바르게 입력해주세요!</div>}
    </div>
  );
};

export default SearchBar;
