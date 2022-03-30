import "./App.css";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="about">
          ABOUT
        </Link>
        <Link to="work" className="work">
          WORK
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
