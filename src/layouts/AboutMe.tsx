function AboutMe() {
  return <div id="about-me" className="about-me">
    <div className="about-me-left-container">
      <div className="about-image-container">
        <img className="about-image" src={require("../assets/images/about-kadi.png")} alt="Kadi2" />
      </div>
    </div>
    <div className="about-me-right-container">
      <h1 className="about-h1">About Me</h1>
      <div className="body-text about-text">
        <p>I’m a Front-End Developer located in Estonia.</p>
        <p>I am passionate to building software, what improve people lives and are user-friendly and simple.
        </p>
        <p>I have build websites in beginning, but also have working websites, what need changes. I have work small project's, and also some big project's (where I make just little part).
I like learning and supporting each others.
</p>
        <p>I develop websites with HTML, CSS/SASS/Tailwind, Typescript and React/Next.js. I have skills to using design software like Figma, Photoshop, Illustrator.
        </p>
      </div>
    </div>
  </div>;
}

export default AboutMe;
