import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";
import Header from "./Header";
import BottomNav from "./BottomNav";
import Footer from "./Footer";
import CommandMenu, { Fab } from "./CommandMenu";
import ProjectDrawer from "../components/Projects/ProjectDrawer";
import "./layout.css";

export default function AppLayout() {
  const { theme } = useApp();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="pf-root" data-theme={theme}>
      <Header />
      <BottomNav />
      <Fab onOpen={() => setMenuOpen(true)} />
      <main className="pf-main">
        <Outlet />
        <Footer />
      </main>
      <ProjectDrawer />
      <CommandMenu open={menuOpen} onClose={closeMenu} />
    </div>
  );
}
