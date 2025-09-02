// src/sections/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-zubba-green mb-6">Get in Touch</h2>
        <p className="text-xl text-gray-700 mb-12">Have questions or need a personalized quote? We're here to help!</p>

        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12" action="YOUR_FORM_SUBMISSION_ENDPOINT" method="POST">
          <div className="mb-6">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zubba-green" />
          </div>
          <div className="mb-6">
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zubba-green" />
          </div>
          <div className="mb-6">
            <input type="tel" name="phone" placeholder="Your Phone Number (Optional)" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zubba-green" />
          </div>
          <div className="mb-6">
            <textarea name="message" placeholder="Your Message" rows={6} required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zubba-green resize-y"></textarea>
          </div>
          <button type="submit" className="bg-zubba-green text-white px-8 py-4 rounded-lg text-lg font-bold uppercase hover:bg-emerald-700 transition-colors duration-300 shadow-lg">
            Send Message
          </button>
        </form>

        <div className="text-lg text-gray-700">
          <p className="font-bold mb-2">Zubba Energy Ltd</p>
          <p className="mb-1">KN 4 Ave, Kigali, Rwanda</p>
          <p className="mb-1">Email: <a href="mailto:info@zubbaenergy.rw" className="text-zubba-green hover:underline">info@zubbaenergy.rw</a></p>
          <p>Phone: <a href="tel:+250788123456" className="text-zubba-green hover:underline">+250 788 123 456</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;