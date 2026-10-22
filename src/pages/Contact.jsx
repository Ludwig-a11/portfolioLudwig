/* eslint-disable react/prop-types */
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { links } from "../data/site";
import useMagnetic from "../hooks/useMagnetic";
import Reveal, { MaskLine } from "../components/motion/Reveal";
import "./contact.css";

const EMPTY = { name: "", email: "", subject: "", message: "", companyWebsite: "" };

function validate(v, t) {
  const e = {};
  const n = v.name.trim();
  const m = v.email.trim();
  const s = v.subject.trim();
  const g = v.message.trim();
  if (n.length < 2 || n.length > 80) e.name = t.errName;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) e.email = t.errEmail;
  if (s.length < 3 || s.length > 120) e.subject = t.errSubject;
  if (g.length < 10 || g.length > 2000) e.message = t.errMessage;
  return e;
}

function Field({ name, label, value, error, onChange, multiline }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <label className="contact-field">
      <span>--{label}</span>
      <Tag
        name={name}
        value={value}
        onChange={onChange}
        rows={multiline ? 4 : undefined}
        type={name === "email" ? "email" : multiline ? undefined : "text"}
        autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"}
        aria-invalid={error ? "true" : undefined}
      />
      <span className="contact-err" role={error ? "alert" : undefined}>{error}</span>
    </label>
  );
}

export default function Contact() {
  const { t } = useApp();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [serverMsg, setServerMsg] = useState("");
  const mag = useMagnetic(0.2);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: "" }));
    if (status === "sent" || status === "error") {
      setStatus("idle");
      setServerMsg("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    const er = validate(form, t);
    setErrors(er);
    if (Object.keys(er).length) {
      setStatus("error");
      setServerMsg("");
      return;
    }
    setStatus("sending");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (payload.errors && typeof payload.errors === "object") setErrors(payload.errors);
        throw new Error(payload.message || "");
      }
      setForm(EMPTY);
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setServerMsg(err.message || t.errReview);
    }
  };

  const sendLabel = status === "sending" ? t.sending : status === "sent" ? t.sent : t.send;
  const statusMsg =
    status === "error" ? serverMsg || t.errReview : status === "sent" ? t.okMsg : "";

  return (
    <>
      <section className="contact-intro">
        <Reveal kind="fade" as="p" className="pf-kicker">{"// "}{t.contactKicker}</Reveal>
        <h1 className="contact-h1">
          <MaskLine>{t.contactTitleA}</MaskLine>
          <MaskLine delay={120} className="contact-b" innerClassName="contact-b-in">
            {t.contactTitleB}
          </MaskLine>
        </h1>
      </section>

      <section className="contact-grid">
        <Reveal className="contact-info">
          <p className="contact-lead">{t.contactLead}</p>
          <div className="contact-meta">
            <div>
              <h3>{t.hoursTitle}</h3>
              <p>{t.hours1}<br />{t.hours2}</p>
            </div>
            <div>
              <h3>{t.followTitle}</h3>
              <div className="contact-links">
                <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="form" delay={150} className="contact-form" onSubmit={onSubmit} noValidate>
          <p className="contact-cmd"><span>$</span> message --to luis</p>
          <div className="contact-two">
            <Field name="name" label={t.fName} value={form.name} error={errors.name} onChange={onChange} />
            <Field name="email" label={t.fEmail} value={form.email} error={errors.email} onChange={onChange} />
          </div>
          <Field name="subject" label={t.fSubject} value={form.subject} error={errors.subject} onChange={onChange} />
          <Field name="message" label={t.fMessage} value={form.message} error={errors.message} onChange={onChange} multiline />

          {/* honeypot: hidden from people, bots fill it */}
          <div className="contact-hp" aria-hidden="true">
            <label htmlFor="companyWebsite">Website</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.companyWebsite}
              onChange={onChange}
            />
          </div>

          <div className="contact-actions">
            <button type="submit" className="contact-send" disabled={status === "sending"} {...mag}>
              {sendLabel}
            </button>
            <span className="contact-status" aria-live="polite">{statusMsg}</span>
          </div>
          <p className="contact-foot">{"// "}{t.response}</p>
        </Reveal>
      </section>
    </>
  );
}
