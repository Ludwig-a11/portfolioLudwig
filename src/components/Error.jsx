import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Error() {
  const { t } = useApp();
  return (
    <section style={{ padding: "clamp(56px,10vh,110px) 0" }}>
      <p style={{ margin: "0 0 18px", font: "400 13px/1 var(--mono)", color: "var(--acc)" }}>{"// 404"}</p>
      <h1 style={{ margin: "0 0 28px", font: "500 clamp(44px,7.4vw,112px)/.95 var(--font)", letterSpacing: "-.05em" }}>
        Page not found
      </h1>
      <Link to="/" className="pf-btn pf-btn-acc">{t.nav.home} →</Link>
    </section>
  );
}
