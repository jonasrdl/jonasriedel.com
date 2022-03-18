import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About/About";
import Error from "./components/pages/Error/Error";
import Links from "./components/pages/Links/Links";
import Projects from "./components/pages/Projects/Projects";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
