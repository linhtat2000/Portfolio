import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import AboutPage from "./pages/about-page/AboutPage";
import ProjectPage from "./pages/project-page/ProjectPage";
import ProjectDetail from "./pages/project-detail-page/ProjectDetail";
import ContactPage from "./pages/contact-page/ContactPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/project-detail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
