import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import ALink from "../../components/Link/ALink";
import "./About-page.styles.scss";

const About = function () {
  return (
    <div className="about">
      <div className="about-details">
        <h4>Who I am</h4>
        <h3 className="section-heading">About Me</h3>
        <aside>
          Hello my name is <strong>Anuj Panwar</strong>, Passionate about
          Front-end Development. I'm from Dehradun Uttarakhand, India. I Love to
          learn new skills and think creative i'm a Fresher looking for the job.
          I build some projects to enhance my skills.
          <p>
            I build projects using HTML5, CSS3, SCSS, JAVASCRIPT, REACT JS and
            keep always looking for better SEO. I love create best visual effect
            and features which one attract the users.
          </p>
          <p>
            <strong style={{ color: " #00ff14" }}>
              {" "}
              “You define your own life. Don’t let other people write your
              script.”
              <br />
              &mdash; Oprah Winfrey
            </strong>
          </p>
        </aside>

        <ALink
          className="btn"
          target="_blank"
          rel="noreferrer"
          link="https://my.indeed.com/p/anujp-hskl1dp"
          download
        >
          Download CV
        </ALink>
      </div>
      {/* <div className="social-media">
        <ALink link={"https://www.linkedin.com/in/anuj-panwar-a1390a229/"}>
          {" "}
          <FaLinkedin color="white" size={28} />
        </ALink>

        <ALink link="https://github.com/anujpanwar01">
          <FaGithub color="white" size={28} />
        </ALink>
        <ALink link="https://twitter.com/anujpanwar7911">
          <FaTwitter color="white" size={28} />
        </ALink>
        <ALink link="https://www.instagram.com/anujpanwar01/">
          <FaInstagram color="white" size={28} />
        </ALink>
      </div> */}
    </div>
  );
};
export default About;
