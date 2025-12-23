
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import LiveInfo from './components/LiveInfo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="intro" className="py-20 bg-slate-50 text-slate-900">
          <Intro />
        </section>
        
        <section id="features" className="py-20 bg-slate-900 text-white overflow-hidden">
          <Features />
        </section>
        
        <section id="live" className="py-20 bg-slate-50 text-slate-900">
          <LiveInfo />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
