import React from "react";
import "./style.css";

const Search = (props) => {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-md-auto"}>
          <form className={"form-inline"} id="search">
            <input
              name={props.name}
              onChange={props.onChange}
              value={props.value}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search by First Name"
              aria-label="Search"
              input={props.input}
            />
            <button
              onClick={props.onClick}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
