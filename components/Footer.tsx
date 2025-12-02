/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { VENUE_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-regal-dark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4 text-regal-gold">{VENUE_INFO.name}</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          Making your special moments unforgettable with luxury, elegance, and impeccable service.
        </p>
        <div className="flex justify-center space-x-6 mb-8 text-sm text-gray-400">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} {VENUE_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;