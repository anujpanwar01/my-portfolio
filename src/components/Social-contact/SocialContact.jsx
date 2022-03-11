import React from "react";
import "./Social-contact.styles.scss";

const SocialContact = function ({ icons, linkUrl: url, value }) {
  console.log(url);
  return (
    // <div className="social-contact">
    <div className="social-contact">
      <span>{icons}</span>
      <a href={url} target="_blank" rel="noreferrer">
        {value}
      </a>
    </div>
    // </div>
  );
};

export default SocialContact;
