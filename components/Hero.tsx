/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { VENUE_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - REPLACE URL with your actual venue image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://picsum.photos/1920/1080?random=99")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <h2 className="text-lg md:text-xl font-light tracking-[0.3em] uppercase mb-4 text-regal-gold animate-fade-in-up">
          Luxury Wedding Venue
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-lg leading-tight">
          {VENUE_INFO.name}
        </h1>
        <p className="text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto opacity-90">
          {VENUE_INFO.tagline} in the heart of Nautanwa.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-regal-gold text-white font-semibold rounded-full hover:bg-amber-600 transition-transform transform hover:scale-105 shadow-lg"
          >
            Inquire Availability
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-regal-green transition-all"
          >
            View Gallery
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer opacity-80 hover:opacity-100"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;