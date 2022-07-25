import React from "react";
import "./App.scss";
import "./scss/main.scss";
import image1 from "./assets/images/acv_Kerner_Kadi.jpg";
import image2 from "./assets/images/Kadi_Kerner.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello World!</header>
      <img src={image1} alt="me1" />
      <img src={image2} alt="me2" />
    </div>
  );
}

export default App;
