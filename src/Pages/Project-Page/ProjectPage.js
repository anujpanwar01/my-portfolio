import ProjectCard from "../../components/Project-card/PrjoectCard.Component";
import projects from "../../All-data/project.data";
import "./Project-page.styles.scss";

const ProjectPage = () => {
  return (
    <section className="section-projects">
      <h3 className="section-heading">Projects</h3>
      {projects.map(({ id, ...otherProps }) => (
        <ProjectCard key={id} {...otherProps} />
      ))}
    </section>
  );
};

export default ProjectPage;
