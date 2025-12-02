/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, VENUE_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 text-regal-green' : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl md:text-3xl font-serif font-bold tracking-wider">
          {VENUE_INFO.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-widest hover:text-regal-gold transition-colors ${
                isScrolled ? 'text-regal-green' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-regal-gold text-white text-sm font-semibold rounded-full hover:bg-amber-600 transition-colors shadow-md"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 text-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-regal-green font-medium text-lg hover:text-regal-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
             href="#contact"
             onClick={() => setIsMobileMenuOpen(false)}
             className="px-6 py-3 bg-regal-gold text-white font-bold rounded-lg"
          >
            Book Your Date
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;