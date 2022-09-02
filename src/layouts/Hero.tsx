function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <h2 className="hero-content__h2">Hello, my name’s Kadi</h2>
        <h1 className="hero-content__h1">
          I’m <span className="text--color">Front-end</span> Developer
        </h1>
        <div className="hero-buttons">
          <button className="btn btn__text">
            <a href="#contact">Contact me</a>
          </button>
          <button className="btn btn__icon--github">
            <a
              href="https://github.com/punane06"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("../assets/images/github.png")} alt="Github" />
            </a>
          </button>
          <button className="btn__icon--linkedin">
            <a
              href="https://www.linkedin.com/in/kadi-kerner/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../assets/images/linkedin.png")}
                alt="LinkedIn"
              />
            </a>
          </button>
          <button className="btn__download">
            {/* TODO lisada siia cv link, kui see on onlines yleval */}
            <a
              href="https://drive.google.com/file/d/1aT4PrG2DoYRV_oKlBNSu-p4hDfx-PZ5u/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              cv
              <img
                src={require("../assets/images/download.png")}
                alt="download CV"
              />
            </a>
          </button>
        </div>
      </div>
      <div className="hero-bg">
        <img src={require("../assets/images/hero-kadi.png")} alt="Kadi" />
      </div>
    </div>
  );
}

export default Hero;
