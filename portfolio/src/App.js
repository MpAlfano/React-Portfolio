import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Contact" element={<Contact />} exact />
      <Route path="/Portfolio" element={<Portfolio />} exact />
      <Route path="/Resume" element={<Resume />} exact />
      {/* <Route element={<ErrorPage />} Add in later maybe?*/}
    </Routes>
  </BrowserRouter>
);
export default App;
