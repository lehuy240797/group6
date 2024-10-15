import React, { useRef } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent! Thank you for your feedback.');
  };

  const handleCancel = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="contact-page">
      {/* Info Section */}
      <div className="contact-page__info-box">
        <h1 className="contact-page__title">Contact Us</h1>
        <p className="contact-page__details">
          Email: <a href="mailto:aptech.fpt@fe.edu.vn">aptech.fpt@fe.edu.vn</a>
          <br />
          Address: 590 Cach Mang Thang 8 Street, Ward 11, District 3, Ho Chi Minh City, Vietnam
          <br />
          Hotline: <a href="tel:+84931313329">0931 313 329</a>
        </p>
      </div>

      {/* Map and Form Section */}
      <div className="contact-page__map-form-container">
        {/* Contact Form */}
        <div className="contact-page__form-box">
          <h2 className="contact-page__form-title">Get in Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-page__form">
            <label className="contact-page__form-label">Name:</label>
            <input type="text" placeholder="Enter your name" required className="contact-page__form-input" />

            <label className="contact-page__form-label">Email:</label>
            <input type="email" placeholder="Enter your email" required className="contact-page__form-input" />

            <label className="contact-page__form-label">Phone:</label>
            <input type="tel" placeholder="Enter your phone number" required className="contact-page__form-input" />

            <label className="contact-page__form-label">Message:</label>
            <textarea placeholder="Your message" required className="contact-page__form-textarea"></textarea>

            <div className="contact-page__button-container">
              <button type="submit" className="contact-page__submit-button">Send</button>
              <button type="button" onClick={handleCancel} className="contact-page__cancel-button">Cancel</button>
            </div>
          </form>
        </div>

        {/* Google Map */}
        <div className="contact-page__map-box">
          <h2 className="contact-page__form-title">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.325316166695!2d106.66629700000001!3d10.786377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrCBNaW5oIDcwMDAw!5e0!3m2!1sen!2s!4v1727711352416!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="contact-page__map"
          ></iframe>
        </div>
      </div>

      {/* Team Portrait Section */}
      <div className="contact-page__portraits-container">
        <div className="contact-page__portrait">
          <h3 className="contact-page__portrait-title">Anh</h3>
          <img className='contact-page__portrait-image' src="./assets/images/contact/trung-anh.jpg" alt="" />
          <p className="contact-page__portrait-details">Details about Anh.</p>
        </div>
        <div className="contact-page__portrait">
          <h3 className="contact-page__portrait-title">Huy</h3>
          <img className='contact-page__portrait-image' src="./assets/images/contact/gia-huy.jpg" alt="" />
          <p className="contact-page__portrait-details">Details about Huy.</p>
        </div>
        <div className="contact-page__portrait">
          <h3 className="contact-page__portrait-title">Khanh</h3>
          <img className='contact-page__portrait-image' src="./assets/images/contact/quoc-khanh.jpg" alt="" />
          <p className="contact-page__portrait-details">Details about Khanh.</p>
        </div>
        <div className="contact-page__portrait">
          <h3 className="contact-page__portrait-title">Dung</h3>
          <img className='contact-page__portrait-image' src="./assets/images/contact/dung.jpg" alt="" />
          <p className="contact-page__portrait-details">Details about Dung.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
