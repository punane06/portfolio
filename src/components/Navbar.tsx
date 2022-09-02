import { useEffect, useState } from "react";

function NavBar() {
  const [show, setShow] = useState(true);
  const controlNavBar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <div className={`navbar-container ${show && "navbar-open"}`}>
      <div className="container">
        <div className="logo-container">
          <div className="logo">
            <a href="#hero">
              <img src={require("../assets/images/logo.png")} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="navbar text--color">
          <nav className="h3">
            <a href="#hero">Home</a>
          </nav>
          <nav className="h3">
            <a href="#portfolio">Portfolio</a>
          </nav>
          <nav className="h3">
            <a href="#about-me">About Me</a>
          </nav>
          <nav className="h3">
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
