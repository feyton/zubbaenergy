// src/sections/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center text-white py-40 md:py-64"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/zubba-hero-bg.jpg')" }}
    >
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Powering Rwanda's Future with Sustainable Energy
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto">
          Your trusted partner for reliable and affordable solar and renewable energy solutions across Rwanda.
        </p>
        <a href="#contact" className="bg-zubba-gold text-zubba-green px-8 py-4 rounded-lg text-lg font-bold uppercase hover:bg-yellow-400 transition-colors duration-300 shadow-lg">
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;