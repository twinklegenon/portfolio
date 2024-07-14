import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./frontend/Home";
import Resume from "./frontend/Resume";  // Make sure you create these components
import Projects from "./frontend/Projects";  // Make sure you create these components
import Contact from "./frontend/Contact";  // Make sure you create these components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
