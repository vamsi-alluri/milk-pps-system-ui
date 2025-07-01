import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
    <Link className="navbar-brand d-flex align-items-center brand-logo" to="/">
      {/* Replace with your logo image or text */}
      <img src="/src/res/logo-x-300x62.png" alt="Srichakra Milk" width="30" height="30" className="d-inline-block align-top me-2" />
      Srichakra Milk
    </Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
