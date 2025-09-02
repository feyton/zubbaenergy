// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-zubba-green text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Replace with your actual logo path in public/ */}
        <a href="#hero" className="flex items-center space-x-2">
          <img src="/zubba-logo.png" alt="Zubba Energy Logo" className="h-12" />
          <span className="text-xl font-bold sr-only md:not-sr-only">Zubba Energy Ltd</span>
        </a>
        <div className="flex space-x-8">
          <a href="#about" className="hover:text-zubba-gold transition-colors duration-300">About Us</a>
          <a href="#services" className="hover:text-zubba-gold transition-colors duration-300">Services</a>
          <a href="#contact" className="hover:text-zubba-gold transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;