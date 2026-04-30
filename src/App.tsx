import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import EmpowermentSchemes from "./pages/empowerment_schemes";
import Home from "./pages/home";
import Donate from "./pages/donate";
import Contact from "./pages/contact";
import Events from "./pages/events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empowerment_schemes" element={<EmpowermentSchemes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;