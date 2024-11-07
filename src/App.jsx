import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetail from "./components/ProjectDetail";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen pt-16 transition-colors duration-200 bg-white dark:bg-dark-primary dark:text-dark-text">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
