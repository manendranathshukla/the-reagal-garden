import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-regal-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
             {/* Decorative Border Box */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-regal-gold rounded-lg hidden md:block"></div>
            {/* REPLACE URL */}
            <img 
              src="https://picsum.photos/800/1000?random=50" 
              alt="The Regal Garden Entrance" 
              className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[500px] lg:h-[600px]"
            />
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-regal-gold font-bold uppercase tracking-widest text-sm mb-4">Our Story</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-regal-green mb-8">
              Experience the Pinnacle of Luxury
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Nestled in the serene landscapes of Nautanwa, The Regal Garden is more than just a venue; it is a canvas where your dream wedding is painted with elegance and grandeur. 
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              With our sprawling lush lawns, magnificent banquet halls, and bespoke services, we ensure that every moment of your special day is etched in memory forever. Whether it is an intimate engagement or a royal wedding reception, our team is dedicated to perfection.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-200 pt-8">
              <div>
                <h4 className="text-4xl font-serif text-regal-gold mb-2">5000+</h4>
                <p className="text-gray-500 uppercase text-sm tracking-wider">Happy Guests</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-regal-gold mb-2">200+</h4>
                <p className="text-gray-500 uppercase text-sm tracking-wider">Weddings Hosted</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;