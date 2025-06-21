import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Get in touch with SOBOBOG Nigeria Limited. We're here to support your real estate,
          cooperative, and transportation needs.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>SOBOBOG Nigeria Limited</p>
          <p>123 Sobobog Avenue, Lagos, Nigeria</p>
          <p>Email: info@sobobog.com</p>
          <p>Phone: +234-901-234-5678</p>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea rows={5} placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
