import React from "react";
import { Route, Routes } from "react-router-dom";
import LeftPage from "./Pages/left-page/LeftPage";
import About from "./Pages/About/About";
// import Header from "./components/header/Header";
// import Header from "./components/header/Header.component";
// import Hero from "./components/Hero/Hero";
// import Best from "./components/ILove/Best";
// import Info from "./components/Info/Info";
// import Education from "./components/Education/Education";
// import Skill from "./components/Skills/skill";
// import Project from "./components/Projects/Project";
import ContactForm from "./Pages/Contact-Form/ContactForm";

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
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
