/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-regal-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <h3 className="text-regal-gold font-bold uppercase tracking-widest text-sm mb-3">Our Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Captured Moments</h2>
            <p className="text-gray-400 mt-4">
              Glimpses of the unforgettable memories created within our walls.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-regal-gold hover:text-white transition-colors border-b border-regal-gold pb-1 mt-6 md:mt-0">
            Book a Site Visit &rarr;
          </a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.id} className="relative group overflow-hidden rounded-lg break-inside-avoid">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h4 className="text-xl font-serif font-bold text-white">{img.category}</h4>
                  <p className="text-sm text-gray-300">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#contact" className="text-regal-gold hover:text-white transition-colors border-b border-regal-gold pb-1">
            Book a Site Visit &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;