function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h3 className="copyright text--color">Copyright © 2022 Kadi Kerner</h3>
        <div className="links text--color h3">
          <a href="#hero">Home</a>
          <button className="btn__icon--github">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
