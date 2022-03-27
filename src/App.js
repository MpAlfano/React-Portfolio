import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideDrop = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideDrop);

    return () => {
      window.removeEventListener("resize", hideDrop);
    };
  });

  return (
    <BrowserRouter>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/React-Portfolio" element={<Home />} exact />
        <Route path="/Contact" element={<Contact />} exact />
        <Route path="/Portfolio" element={<Portfolio />} exact />
        <Route path="/Resume" element={<Resume />} exact />
        {/* <Route element={<ErrorPage />} Add in later maybe?*/}
      </Routes>
    </BrowserRouter>
  );
};
export default App;