import { Link, useParams } from "react-router-dom";
import {
  FaBolt,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaPuzzlePiece,
  FaReact,
  FaRobot,
  FaRoute,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { projects, projectsBySlug } from "../../data/projects";
import "./project-details.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsBySlug[slug];
  const stackItems =
    project?.details?.stack && project.details.stack.length > 0
      ? project.details.stack
      : project?.stack
      ? project.stack.split("·").map((item) => item.trim())
      : [];
  const problemItems = project?.details?.problem || [];
  const solutionItems = project?.details?.solution || [];
  const resultItems = project?.details?.results || [];
  const whyThisBreaksDownItems = project?.details?.whyThisBreaksDown || [];
  const otherProjects = projects.filter((item) => item.slug !== slug);

  const getTechIcon = (tech) => {
    const name = tech.toLowerCase();
    if (name.includes("react")) return <FaReact aria-hidden="true" />;
    if (name.includes("css")) return <FaCss3Alt aria-hidden="true" />;
    if (name.includes("router")) return <FaRoute aria-hidden="true" />;
    if (name.includes("api")) return <TbApi aria-hidden="true" />;
    if (name.includes("component")) return <FaPuzzlePiece aria-hidden="true" />;
    return <FaCode aria-hidden="true" />;
  };

  const getResultIcon = (resultText) => {
    const text = resultText.toLowerCase();
    if (text.includes("api") || text.includes("data")) {
      return <FaDatabase aria-hidden="true" />;
    }
    if (text.includes("automation") || text.includes("agent")) {
      return <FaRobot aria-hidden="true" />;
    }
    if (text.includes("sales") || text.includes("team")) {
      return <FaUsers aria-hidden="true" />;
    }
    if (
      text.includes("speed") ||
      text.includes("reduced") ||
      text.includes("time")
    ) {
      return <FaBolt aria-hidden="true" />;
    }
    if (text.includes("conversion") || text.includes("improved")) {
      return <FaChartLine aria-hidden="true" />;
    }
    if (text.includes("router") || text.includes("navigation")) {
      return <FaRoute aria-hidden="true" />;
    }
    if (text.includes("search") || text.includes("filter")) {
      return <FaSearch aria-hidden="true" />;
    }
    return <FaCode aria-hidden="true" />;
  };

  if (!project) {
    return (
      <section className="projectDetailsPage">
        <div className="projectDetailsShell">
          <div className="projectDetailsHeaderRow">
            <p className="projectDetailsBreadcrumb">Projects / Not found</p>
          </div>
          <h1 className="projectDetailsTitle">Project not found</h1>
          <p className="projectDetailsBodyText">
            The project URL is valid as a direct route, but this slug does not
            match any registered project.
          </p>
          <Link className="projectDetailsBackBtn" to="/discovery">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const challengeTrack =
    problemItems.length > 0 ? problemItems.slice(0, 3) : solutionItems.slice(0, 3);
  const resultSource =
    resultItems.length > 0 ? resultItems : solutionItems.length > 0 ? solutionItems : stackItems;
  const resultHighlights = resultSource.slice(0, 4).map((item, index) => ({
    label: `Outcome ${index + 1}`,
    value: item,
    icon: getResultIcon(item),
  }));

  return (
    <section className="projectDetailsPage projectDetailsShowcasePage">
      <div className="projectDetailsShowcaseShell">
        <section className="projectDetailsShowcaseHero">
          <div className="projectDetailsShowcaseTopBar">
            <p className="projectDetailsBreadcrumb">
              <Link to="/discovery">Projects</Link>
              <span>/</span>
              <strong>{project.title}</strong>
            </p>
            {project.liveUrl && (
              <a
                className="projectDetailsLiveBtn"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live link
              </a>
            )}
          </div>

          <div className="projectDetailsShowcaseHeroGrid">
            <div className="projectDetailsShowcaseHeroContent">
              <p className="projectDetailsShowcaseEyebrow">Project Details</p>
              <h1 className="projectDetailsTitle">{project.title}</h1>
              <p className="projectDetailsSubTitle">{project.description}</p>
              <p className="projectDetailsBodyText">
                {project.details?.hero || project.summary}
              </p>
              <ul className="projectDetailsTagList">
                {stackItems.map((item) => (
                  <li key={item}>
                    <span className="projectDetailsTagIcon">{getTechIcon(item)}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="projectDetailsShowcaseHeroMedia">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </section>

        {whyThisBreaksDownItems.length > 0 && (
          <section className="projectDetailsShowcaseSection projectDetailsShowcaseWhy">
            <h2>Why This Breaks Down</h2>
            <ul className="projectDetailsShowcaseWhyList">
              {whyThisBreaksDownItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {challengeTrack.length > 0 && (
          <section className="projectDetailsShowcaseSection projectDetailsShowcaseChallenge">
            <h2>The Challenge</h2>
            <div className="projectDetailsShowcaseChallengeTrack">
              {challengeTrack.map((item) => (
                <article key={item} className="projectDetailsShowcaseChallengeStep">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {solutionItems.length > 0 && (
          <section className="projectDetailsShowcaseSection projectDetailsShowcaseSolution">
            <h2>The Solution</h2>
            <div className="projectDetailsShowcaseSolutionGrid">
              <div className="projectDetailsShowcaseShotWrap">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
              <article className="projectDetailsShowcaseSolutionCard">
                <ul>
                  {solutionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        )}

        {resultHighlights.length > 0 && (
          <section className="projectDetailsShowcaseSection projectDetailsShowcaseResults">
            <h2>Results</h2>
            <div className="projectDetailsShowcaseResultsGrid">
              {resultHighlights.map((item) => (
                <article key={item.label} className="projectDetailsShowcaseResultCard">
                  <span className="projectDetailsResultIcon">{item.icon}</span>
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="projectDetailsShowcaseSection projectDetailsShowcaseCases">
            <h2>Explore More</h2>
            <div className="projectDetailsShowcaseCarousel">
              <div className="projectDetailsShowcaseCarouselTrack">
                {[...otherProjects, ...otherProjects].map((item, index) => (
                  <Link
                    className="projectDetailsShowcaseCaseCard"
                    to={`/projects/${item.slug}`}
                    key={`${item.slug}-${index}`}
                  >
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="projectDetailsShowcaseSection projectDetailsShowcaseContact">
          <Link className="projectDetailsBackBtn" to="/contact">
            Let&apos;s Connect
          </Link>
        </section>
      </div>
    </section>
  );
}
