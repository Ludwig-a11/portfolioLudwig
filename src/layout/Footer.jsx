import { useApp } from "../context/AppContext";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="pf-footer">
      <span>© {new Date().getFullYear()} · {t.footer}</span>
      <span>{t.location}</span>
    </footer>
  );
}
