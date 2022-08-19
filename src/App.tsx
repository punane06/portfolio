import React from "react";
import "./App.scss";
import "./scss/main.scss";
import { Route, Routes } from "react-router";
import PortfolioCase from "./views/PortfolioCase";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio-case" element={<PortfolioCase />} />
      </Routes>
    </div>
  );
}

export default App;
