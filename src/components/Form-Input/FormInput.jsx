import React from "react";
import "./Form-input.styles.scss";

const FormInput = function ({ value, handleChange, ...otherProps }) {
  console.log(value);
  return (
    <input value={value} onChange={handleChange} {...otherProps} required />
  );
};
export default FormInput;
