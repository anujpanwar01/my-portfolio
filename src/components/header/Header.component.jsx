import React from "react";
import image from "../../img/anuj-2.png";
import { Link } from "react-router-dom";
import {} from "react-icons/fa";
import "./Header.styles.scss";

const Header = function () {
  return (
    <header className="header">
      <span className="img-container">
        <img src={image} alt="anuj panwar" />
      </span>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about-me"}>About</Link>
        <Link to={"/education"}>Education</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </header>
  );
};
export default Header;
