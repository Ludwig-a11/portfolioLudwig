import { motion } from "framer-motion";
import { PiArrowSquareInLight } from "react-icons/pi";

const CertSection = () => {
  return (
    <section className="certSection">
      {" "}
      {/*add Imges each certification */}
      <h3 className="cert">Certifications</h3>
      <p className="certTesting">Software Testing for Developers</p>
      <p className="date">Feb-2024</p>
      <motion.a
        className="testingCred"
        href="https://www.coursera.org/account/accomplishments/verify/XD3ZQ2KFVEGA"
        target={"_blank"}
        rel="noreferrer"
        whileHover={{ scale: 1.3, fontWeight: "bold" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        Credential <PiArrowSquareInLight />
      </motion.a>
      <p className="certFullStack">Full Stack Web Development</p>
      <p className="date">Nov-2022</p>
      <motion.a
        className="fullStackCred"
        href="https://certificates.academlo.com/en/verify/00470908666115"
        target={"_blank"}
        rel="noreferrer"
        whileHover={{ scale: 1.3, fontWeight: "bold" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        Credential <PiArrowSquareInLight />
      </motion.a>
      <p className="certBackEnd">Back-end Development with Node.js</p>
      <p className="date">Oct-2022</p>
      <motion.a
        className="backEndCred"
        href="https://certificates.academlo.com/en/verify/31039857591732"
        target={"_blank"}
        rel="noreferrer"
        whileHover={{ scale: 1.3, fontWeight: "bold" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        Credential <PiArrowSquareInLight />
      </motion.a>
      <p className="certFrontEnd">Front-end Development with React.js</p>
      <p className="date">Sep-2022</p>
      <motion.a
        className="frontEndCred"
        href="https://certificates.academlo.com/en/verify/13744625688450"
        target={"_blank"}
        rel="noreferrer"
        whileHover={{ scale: 1.3, fontWeight: "bold" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        Credential <PiArrowSquareInLight />
      </motion.a>
    </section>
  );
};

export default CertSection;
