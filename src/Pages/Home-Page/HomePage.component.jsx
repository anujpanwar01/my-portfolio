import ALink from "../../components/Link/ALink";

import SocialIcons from "../../components/Social-icons/SocialIcons.component";
import "./Home-page.styles.scss";
const HomePage = () => {
  return (
    <section className="home-section">
      <div className="home-page">
        <div className="home-page-text">
          <h2>Hello I'm</h2>
          <h1>Anuj Panwar</h1>
          <h3>Front-end developer</h3>
          <p>
            I love to create new stuff in Front-end developement, i love the
            JavaScript.
          </p>
          <ALink href="tel:9634111164">Hire Me</ALink>
        </div>
        <div className="home-page-logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};
export default HomePage;
