// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-8 text-center mt-auto">
      <div className="container mx-auto">
        <p className="mb-4">&copy; {currentYear} Zubba Energy Ltd. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/privacy-policy" className="text-zubba-gold hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="text-zubba-gold hover:underline">Terms of Service</a>
        </div>
        <p className="text-gray-400">
          Email: <a href="mailto:info@zubbaenergy.rw" className="text-zubba-gold hover:underline">info@zubbaenergy.rw</a> | Phone: <a href="tel:+250788123456" className="text-zubba-gold hover:underline">+250 788 123 456</a>
        </p>
        {/* Add social media icons here if desired */}
      </div>
    </footer>
  );
};

export default Footer;