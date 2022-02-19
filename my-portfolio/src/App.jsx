import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import AboutPage from "./pages/about-page/AboutPage";
import ProjectPage from "./pages/project-page/ProjectPage";
import ProjectDetail from "./pages/project-detail-page/ProjectDetail";
import ContactPage from "./pages/contact-page/ContactPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <div className="App">
      <Navbar theme={theme} />
      <Routes>
        <Route
          path="/"
          element={<Homepage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/project" element={<ProjectPage theme={theme} />} />
        <Route path="/about-me" element={<AboutPage theme={theme} />} />
        <Route path="/contact-me" element={<ContactPage theme={theme} />} />
        <Route path="/project-detail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
