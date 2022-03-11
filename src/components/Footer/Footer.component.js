import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.styles.scss";
const Footer = function () {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {new Date().getFullYear()} by{" "}
        <a href="https://twitter.com/anujpanwar7911">Anuj Panwar</a>
      </p>
    </footer>
  );
};
export default Footer;
