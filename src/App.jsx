import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppLayout from "./layout/AppLayout";
import PageTransition from "./components/motion/PageTransition";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Error from "./components/Error";

const LEGACY_SLUGS = { "dedicated-teams-calculator": "dtc", "expenses-record-app": "expense" };

const page = (el) => <PageTransition>{el}</PageTransition>;

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={page(<Home />)} />
            <Route path="/discovery" element={page(<Work />)} />
            <Route path="/work" element={<Navigate to="/discovery" replace />} />
            <Route path="/contact" element={page(<Contact />)} />
            <Route path="/projects/:slug" element={<LegacyProject />} />
            <Route path="*" element={page(<Error />)} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

// Old /projects/:slug links now open the drawer over Work.
function LegacyProject() {
  const { slug } = useParams();
  const target = LEGACY_SLUGS[slug] || slug;
  return <Navigate to={`/discovery?project=${target}`} replace />;
}

export default App;
