// App.js (Main Entry Point)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';

// Public Pages:
import Unauthorized from './pages/unauthorized';
import NotFound from './pages/NotFound';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

// Private Pages:
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Procurement from './pages/Procurement';
import AddUser from './pages/AddUser';
import Administration from './pages/Administration';
import ProfileSettings from './pages/ProfileSettings';

// Helper Pages for dev:
import DevAuthBypass from './pages/DevAuthBypass';

// Components:
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Unauthorized" element={<Unauthorized />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Procurement" element={<Procurement />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/Administration" element={<Administration />} />
          <Route path="/dev-auth" element={<DevAuthBypass />} />
          <Route path="/Profile" element={<ProfileSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
