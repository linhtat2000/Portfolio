import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import AboutPage from "./pages/about-page/AboutPage";
import ProjectPage from "./pages/project-page/ProjectPage";
import ProjectDetail from "./pages/project-detail-page/ProjectDetail";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5e63b6",
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/aboutme" element={<AboutPage />} />
        <Route path="/project-detail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
