import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2><i><b><u>Contact Us</u></b></i></h2>
      <div className="contact-box">
        <div className="contact-details">
          <div className="contact-info1">
            <h3>Visit Us</h3>
            <p>123 Pottery Lane,<br />Sai baba colony,<br />Chennai, Tami Nadu 638419</p>
          </div>
          <div className="contact-info2">
            <h3>Contact Information</h3>
            <p><b>Email</b>: info@clayfusiongallery.com</p>
            <p><b>Phone</b>: (123) 456-7890</p>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
