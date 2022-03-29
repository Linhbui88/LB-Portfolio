import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "./pages/About";
import Works from "./pages/Works";
import { projects } from "./projectsData";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <ScrollTop />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<About />} />
          <Route path="/works" element={<Works projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
