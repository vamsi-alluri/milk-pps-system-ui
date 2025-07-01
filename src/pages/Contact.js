// pages/Contact.js
import React from 'react';

const Contact = () => (
  <div className="contact-page">
    <h2>Get in Touch</h2>
    <div className="contact-form">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
);

export default Contact;
