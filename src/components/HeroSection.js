// components/HeroSection.js
import React from 'react';

const HeroSection = ({ title, subtitle }) => (
  <div className="hero">
    <div className="hero-content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default HeroSection;
