function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-info__h2 text--color">Contact ME</h2>
          <div className="contact-info__text body-text">
            <p>Have some greate idea?</p>
            <p>Let me know!</p>
          </div>
          <div className="contact-info__text body-text">
            <a href="tel: +372-5563-2256">+372 5563 2256</a>
            <br />
            <a href="mailto: kadikerner@gmail.com">kadikerner@gmail.com</a>
          </div>
        </div>
        <div className="contact-form">Form</div>
      </div>
    </div>
  );
}

export default Contact;
