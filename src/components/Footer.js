import React from 'react';

const Footer = () => (
  <footer className="site-footer bg-dark text-light pt-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <h5>About Us</h5>
          <p>Fresh dairy since 2014</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
            <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
            <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Contact Info</h5>
          <p>Hyderabad, India</p>
          <p>Email: info@srichakramilk.com</p>
        </div>
      </div>
      <div className="text-center py-3 border-top border-secondary mt-3">
        <p className="mb-0">© {new Date().getFullYear()} Srichakra Milk. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
