import React from "react";
import ALink from "../Link/ALink";
import "./Project-card.styles.scss";

const ProjectCard = ({ title, overview, imgUrl }) => {
  return (
    <div className="projects">
      <div
        className="img-container"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="overview">
        <h2>{title}</h2>
        <p>{overview}</p>
        <div className="btn-container">
          <ALink
            className="btn btn-1 "
            target="_blank"
            rel="noreferrer"
            href="https://bhagirathi-travles.netlify.app/"
          >
            Live view
          </ALink>
          <ALink
            className="btn btn-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/anujpanwar01/Bhagirathi-Travels"
          >
            Source code
          </ALink>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
