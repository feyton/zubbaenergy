// src/sections/Services.tsx
import React from 'react';

const services = [
  { title: "Residential Solar Solutions", description: "Reliable solar power systems for homes, reducing electricity bills and ensuring energy independence." },
  { title: "Commercial & Industrial Solar", description: "Tailored solar installations for businesses and industries to optimize energy consumption and reduce operational costs." },
  { title: "Solar Water Pumping", description: "Sustainable water pumping solutions for agriculture and rural communities, powered by the sun." },
  { title: "Energy Audits & Consulting", description: "Expert analysis of your energy needs and strategic advice on the best renewable energy investments." },
  { title: "Maintenance & Support", description: "Comprehensive after-sales service, maintenance, and technical support to ensure optimal system performance." },
  { title: "Rural Electrification Projects", description: "Bringing clean and affordable energy to off-grid communities through innovative solar solutions." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-zubba-green mb-6">Our Services</h2>
        <p className="text-xl text-gray-700 mb-12">We offer a comprehensive suite of energy solutions designed to meet diverse needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-zubba-green mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;