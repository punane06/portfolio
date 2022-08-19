import HeroImage from "../assets/images/hero-kadi.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Hello, my name’s Kadi</h2>
        <h1>
          I’m <span className="text-color">Front-end</span> Developer
        </h1>
        <div className="hero-buttons-container">
          <button>Contact me</button>
          <button>Github</button>
          <button>LinkedIn</button>
          <a href="https://kadikerner.com/">cv</a>
        </div>
      </div>
      <div className="hero-bg">
        <img src={HeroImage} alt="Kadi" />
      </div>
    </div>
  );
}

export default Hero;
