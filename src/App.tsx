import React from "react";
import "./App.scss";
import "./scss/main.scss";
import Hero from "./blocks/Hero";
import NavBar from "./components/Navbar";
// import Portfolio from "./blocks/Portfolio";
// import AboutMe from "./blocks/AboutMe";
// import Contact from "./blocks/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* <Portfolio />
      <AboutMe />
      <Contact /> */}
    </div>
  );
}

export default App;
