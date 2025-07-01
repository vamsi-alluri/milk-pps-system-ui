// App.js (Main Entry Point)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Procurement from './pages/Procurement';
import Unauthorized from './pages/unauthorized';
import AuthGuard from './components/Guards/AuthGuard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AuthGuard" element={<AuthGuard />} />
        <Route path="/Unauthorized" element={<Unauthorized />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Procurement" element={<Procurement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
