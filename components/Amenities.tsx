/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-regal-gold font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-regal-green">World-Class Amenities</h2>
          <div className="w-24 h-1 bg-regal-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {AMENITIES.map((item) => (
            <div 
              key={item.id} 
              className="group p-8 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-regal-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-regal-gold/10 transition-colors">
                <item.icon className="text-regal-green w-8 h-8 group-hover:text-regal-gold transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-regal-green mb-3 font-serif">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;