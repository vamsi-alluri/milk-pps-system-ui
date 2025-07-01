// pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => (
  <div className="home-page">
    <HeroSection 
      title="Farm Fresh Dairy" 
      subtitle="Pure & Natural Milk Products"
    />
    
    <section className="features">
      <div className="feature-card">
        <h3>Daily Delivery</h3>
        <p>Fresh milk at your doorstep every morning</p>
      </div>
      <div className="feature-card">
        <h3>100% Natural</h3>
        <p>No preservatives or additives</p>
      </div>
    </section>
  </div>
);

export default Home;
