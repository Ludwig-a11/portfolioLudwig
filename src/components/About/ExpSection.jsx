import SocialMediaLinks from "../Home/SocialMediaLinks";

const ExpSection = () => {
  return (
    <div className="expSection">
      <h3 className="exp">Background</h3>
      <SocialMediaLinks />
      <p className="salvoSoftware">Salvo Software</p>
      <p className="startDate">Sep.2022 - Present</p>
      <p className="salvoRole">QA Tester</p>
      <p className="description">
        I participate in all Scrum meetings and have close collaboration with
        product managers and developers to ensure that the project meets
        functional requirements. Created behavior-based development test cases
        using Gherkin language. Executed various types and levels of manual
        testing: exploratory, sanity, smoke, regression, end-to-end, and
        cross-browser testing for web applications. Report defects/problems
        including brief relevant descriptions of the problem with detailed steps
        to replicate it, including screenshots, videos, and log files.
      </p>
    </div>
  );
};

export default ExpSection;
