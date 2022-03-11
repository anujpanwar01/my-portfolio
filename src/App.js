import React from "react";
import { Route, Routes } from "react-router-dom";
import LeftPage from "./Pages/left-page/LeftPage";
import AboutPage from "./Pages/About-Page/AboutPage";
import EducationPage from "./Pages/Education-Page/EducationPage";
import ProjectPage from "./Pages/Project-Page/ProjectPage";
// import Header from "./components/header/Header";
// import Header from "./components/header/Header.component";
// import Hero from "./components/Hero/Hero";
// import Best from "./components/ILove/Best";
// import Info from "./components/Info/Info";

// import Education from "./components/Education/Education";
// import Skill from "./components/Skills/skill";
// import Project from "./components/Projects/Project";
import ContactFormPage from "./Pages/Contact-Form-Page/ContactFormPage";

import "./App.scss";

// function Footer() {
//   return <div>footer</div>;
// }

function App() {
  return (
    <div className="app">
      <LeftPage />
      <div className="right-side">
        <Routes>
          {/* <Route path="/footer" element={<Footer />} /> */}
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactFormPage />} />
        </Routes>
      </div>
      {/* <h1>Hello</h1> */}
      {/* <Hero /> */}
      {/* <Best /> */}
      {/* <Info /> */}
      {/* <Education /> */}
      {/* <Skill /> */}

      {/* <Project /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default App;
