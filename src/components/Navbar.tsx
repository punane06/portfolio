function NavBar() {
  return (
    <div className="navbar-container">
      <div className="container">
        <div className="logo-container">
          <div className="logo">
            <a href="#hero">
              <img src={require("../assets/images/logo.png")} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="navbar text-color">
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
