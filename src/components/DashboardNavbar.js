import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <Link className="navbar-brand" to="#">Dashboard</Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/production">Production</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/procurement">Procurement</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sales">Sales</Link>
        </li>
      </ul>

      <div className="d-flex">
        <Link to="/profile" className="btn btn-outline-light ms-auto">Profile</Link>
      </div>
    </div>
  </nav>
);

export default DashboardNavbar;
