
import "./error.css";
import expenseTrackingImg from "../assets/project1Pic.jpg";

const Error = () => {
  return (
    <section className="errorPage">
      <div className="errorCard">
        <p className="errorTag">Error</p>
        <h1>Page not found</h1>
        <img
          className="errorImage"
          src={expenseTrackingImg}
          alt="Expense Tracking App preview"
        />
      </div>
    </section>
  );
};

export default Error;
