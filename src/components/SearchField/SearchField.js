import React from "react";
import PropTypes from "prop-types";
import { SearchInput } from "./SearchField.styled";

const SearchField = ({ value, onChange }) => {
  return <SearchInput type="text" value={value} onChange={onChange} />;
};
SearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default SearchField;
