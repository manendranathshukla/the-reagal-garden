import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-regal-cream relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 text-regal-green/5 opacity-50 -ml-10 -mt-10">
            <Quote size={300} />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-regal-green">Love Notes</h2>
          <p className="text-gray-500 mt-4">Kind words from those who celebrated with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-regal-cream">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 italic mb-6">"{t.content}"</p>
              <div>
                <h4 className="font-bold text-regal-green text-lg">{t.name}</h4>
                <p className="text-regal-gold text-sm uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;