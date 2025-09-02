// src/sections/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-zubba-green mb-10">About Zubba Energy Ltd</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p className="mb-6">
            Zubba Energy Ltd is a Rwandan-based company dedicated to providing innovative and sustainable energy solutions to homes, businesses, and communities. We believe in harnessing the power of renewable energy to drive economic growth, improve livelihoods, and protect our environment. Our commitment is to deliver high-quality, reliable, and cost-effective energy systems tailored to the unique needs of our clients.
          </p>
          <p className="mb-6">
            We specialize in solar power installations, offering a range of services from residential solar panels to large-scale commercial and industrial projects. With a team of experienced engineers and technicians, we ensure every installation meets the highest standards of safety and efficiency.
          </p>
          <div className="mt-12 p-8 bg-white rounded-lg shadow-md">
            <p className="text-xl font-semibold text-zubba-green mb-4">Our Vision:</p>
            <p className="mb-6">To be the leading provider of clean energy in Rwanda, fostering a sustainable and prosperous future.</p>
            <p className="text-xl font-semibold text-zubba-green mb-4">Our Mission:</p>
            <p>To deliver accessible, affordable, and reliable renewable energy solutions that empower communities and drive national development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;