import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TravelPoint from './components/TravelPoint';
import KeyFeatures from './components/KeyFeatures';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative z-50 bg-gradient-to-br from-pink-200 via-pink-100 to-yellow-100 ">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Services />
      <TravelPoint />
      <KeyFeatures />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default App;