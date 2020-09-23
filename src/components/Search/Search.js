import React from "react";
import PropTypes from "prop-types";

function Search({ style, onChange }) {

  const handleChange = (val) => {
    if (onChange) onChange(val);
  };
  return (
    <div className="row">
      <div className="col-12">
        <form className="form-inline">
          <input
            className="form-control  mb-3 mt-5"
            style={style}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => {
              handleChange(event.target.value);
            }}
            required
          />
        </form>
      </div>
    </div>
  );
}

Search.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};
export default Search;
