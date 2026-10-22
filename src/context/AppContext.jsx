/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "../i18n/en";
import es from "../i18n/es";

const dictionaries = { en, es };
const AppContext = createContext(null);

function read(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable */
  }
}

function initialTheme() {
  const saved = read("pf.theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function initialLang() {
  const saved = read("pf.lang");
  return saved === "es" || saved === "en" ? saved : "en";
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    write("pf.theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    write("pf.lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = useCallback(() => setTheme((v) => (v === "dark" ? "light" : "dark")), []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, lang, setLang, t: dictionaries[lang] }),
    [theme, toggleTheme, lang],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}
