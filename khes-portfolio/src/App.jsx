import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Menu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<About />} />
        <Route path="" element={<Skills />} />
        <Route path="" element={<Projects />} />
        <Route path="" element={<Contact />} />
      </Routes> */}
    </>
  );
};

export default App;
