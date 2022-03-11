import React from "react";
import "./Custom-btn.styles.scss";
const CustomBtn = function ({ children }) {
  return (
    <button className="btn" type="submit">
      {children}
    </button>
  );
};
export default CustomBtn;
