import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./components/Work";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
