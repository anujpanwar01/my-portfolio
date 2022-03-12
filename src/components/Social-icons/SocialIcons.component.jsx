import "./Social-icons.styles.scss";
import ALink from "../Link/ALink";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
const SocialIcons = function () {
  return (
    <div className="social-icons">
      <ALink
        className="icons"
        link={"https://www.linkedin.com/in/anuj-panwar-a1390a229/"}
      >
        {" "}
        <FaLinkedin size={28} />
      </ALink>

      <ALink className="icons" link="https://github.com/anujpanwar01">
        <FaGithub size={28} />
      </ALink>
      <ALink className="icons" link="https://twitter.com/anujpanwar7911">
        <FaTwitter size={28} />
      </ALink>
      <ALink className="icons" link="https://www.instagram.com/anujpanwar01/">
        <FaInstagram size={28} />
      </ALink>
    </div>
  );
};
export default SocialIcons;
