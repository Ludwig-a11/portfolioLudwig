import { useMemo } from "react";
import projects from "../data/projects";
import { useApp } from "../context/AppContext";

// Projects merged with their localized copy plus a zero-padded index.
export default function useProjects() {
  const { lang } = useApp();
  return useMemo(
    () => projects.map((p, i) => ({ ...p, ...p[lang], n: String(i + 1).padStart(2, "0") })),
    [lang],
  );
}
