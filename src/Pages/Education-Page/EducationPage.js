import { Component } from "react";
import education from "../../All-data/education-data";
import EducationCard from "../../components/Education/EducationCard.component";
import "./Education-page.styles.scss";
class EducationPage extends Component {
  render() {
    return (
      <section className="education">
        <h3 className="section-heading">Education</h3>
        <div>
          {education.map(({ id, ...otherProps }) => {
            return <EducationCard key={id} {...otherProps} />;
          })}
        </div>
      </section>
    );
  }
}
export default EducationPage;
