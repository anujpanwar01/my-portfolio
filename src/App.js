import React from "react";
import { Route, Routes } from "react-router-dom";
// import LeftPage from "./left-page/LeftPage";
import Header from "./components/header/Header.component";
import Footer from "./components/Footer/Footer.component";
import SocialIcons from "./components/Social-icons/SocialIcons.component";
// import RightSideLayout from "./right-side-layout/RightSideLayout";
// import LeftPage from "./Layouts/right-side-layout/left-page/LeftPage";
// import RightSideLayout from "./Layouts/right-side-layout/RightSideLayout";
import HomePage from "./Pages/Home-Page/HomePage.component";
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
      <div className="left-side-layout">
        <Header />
        <Footer />
      </div>

      <div className="right-side-layout">
        <SocialIcons />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactFormPage />} />
        </Routes>
      </div>
      {/* </RightSideLayout> */}
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
