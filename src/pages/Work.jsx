import { useApp } from "../context/AppContext";
import useProjects from "../hooks/useProjects";
import { courses, skills } from "../data/site";
import ProjectImage from "../components/Projects/ProjectImage";
import Reveal, { MaskLine } from "../components/motion/Reveal";
import useOpenProject from "../hooks/useOpenProject";
import "./work.css";

export default function Work() {
  const { t, lang } = useApp();
  const projects = useProjects();
  const { open } = useOpenProject();
  const total = String(projects.length).padStart(2, "0");

  return (
    <>
      <section className="work-intro">
        <Reveal kind="fade" as="p" className="pf-kicker">{"// projects"}</Reveal>
        <h1 className="work-h1">
          <MaskLine>{t.workTitle}</MaskLine>
        </h1>
        <Reveal kind="up" as="p" delay={150} className="work-lead">{t.workLead}</Reveal>
      </section>

      <section className="work-stack">
        {projects.map((p, i) => (
          <div key={p.slug} className="work-sticky" style={{ "--i": i }}>
            <article className="work-card" onClick={() => open(p.slug)}>
              <div className="work-card-body">
                <div className="work-card-top">
                  <span>{p.n} / {total}</span>
                  <span>{p.tag}</span>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="pf-chips">
                  {p.stack.slice(0, 3).map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="work-card-img">
                <ProjectImage src={p.img} alt={p.title} />
              </div>
            </article>
          </div>
        ))}
      </section>
      <Reveal kind="fade" as="p" className="work-disclaimer">! {t.disclaimer}</Reveal>

      <section className="work-about">
        <div>
          <Reveal as="h2" className="pf-kicker">{"// "}{t.aboutTitle}</Reveal>
          <Reveal as="p" className="work-about-lead">{t.aboutLead}</Reveal>
        </div>
        {t.pillars.map((x) => (
          <Reveal key={x.k} className="work-pillar">
            <span>{x.k}</span>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </Reveal>
        ))}
      </section>

      <section className="work-process">
        <div className="work-process-head">
          <div>
            <Reveal as="h2" className="pf-kicker">{"// pipeline"}</Reveal>
            <Reveal as="p" className="work-process-title">{t.processTitle}</Reveal>
          </div>
          <Reveal as="p" className="work-process-lead">{t.processLead}</Reveal>
        </div>
        <div className="work-steps">
          {t.steps.map((x) => (
            <Reveal key={x.k} kind="fade" className="work-step">
              <span>step_{x.k}</span>
              <div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work-extra">
        <div>
          <Reveal as="h2" className="pf-kicker work-kicker-gap">{"// "}{t.skillsTitle}</Reveal>
          {skills.map((g) => (
            <Reveal key={g.g} className="work-skill">
              <span>{lang === "es" ? g.ges : g.g}</span>
              <div>
                {g.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="work-extra-col">
          <Reveal className="work-exploring">
            <h2>$ {t.exploringTitle}<span className="pf-cursor">_</span></h2>
            <p>{t.exploring}</p>
          </Reveal>
          <div>
            <Reveal as="h2" className="pf-kicker work-courses-h">{"// "}{t.coursesTitle}</Reveal>
            {courses.map((c) => (
              <Reveal key={c.t} as="a" href={c.url} target="_blank" rel="noreferrer" className="work-course">
                <span>
                  <b>{c.t}</b>
                  <i>{c.o}</i>
                </span>
                <span className="work-course-y">{c.y} ↗</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
