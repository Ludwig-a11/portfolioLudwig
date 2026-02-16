import { Link, useParams } from "react-router-dom";
import { projectsBySlug } from "../../data/projects";
import "./project-details.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsBySlug[slug];

  if (!project) {
    return (
      <section className="projectDetailsPage">
        <div className="projectDetailsCard">
          <p className="projectDetailsLabel">Project details</p>
          <h1 className="projectDetailsTitle">Project not found</h1>
          <p className="projectDetailsText">
            The project URL is valid as a direct route, but this slug does not
            match any registered project.
          </p>
          <Link className="projectDetailsLink" to="/discovery">
            Back to Discovery
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="projectDetailsPage">
      <div className="projectDetailsCard">
        <p className="projectDetailsLabel">Project details</p>
        <h1 className="projectDetailsTitle">{project.title}</h1>
        <p className="projectDetailsText">
          {project.details?.hero || project.summary}
        </p>

        {project.details?.problem && (
          <section className="projectDetailsSection">
            <h2>Problem</h2>
            <ul>
              {project.details.problem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {project.details?.solution && (
          <section className="projectDetailsSection">
            <h2>Solution</h2>
            <ul>
              {project.details.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="projectDetailsSection">
          <h2>Stack</h2>
          {project.details?.stack ? (
            <ul>
              {project.details.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="projectDetailsStack">Stack: {project.stack}</p>
          )}
        </section>

        {project.details?.results && (
          <section className="projectDetailsSection">
            <h2>Results</h2>
            <ul>
              {project.details.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="projectDetailsActions">
          <Link className="projectDetailsLink" to="/discovery">
            Back to Discovery
          </Link>
          {project.liveUrl && (
            <a
              className="projectDetailsLink projectDetailsLinkGhost"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open live
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
