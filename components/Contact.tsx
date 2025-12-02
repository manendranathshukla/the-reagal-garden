import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { VENUE_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted", formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Contact Information & Map */}
          <div className="lg:w-2/5 bg-regal-green text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Get in Touch</h3>
              <p className="text-emerald-100 mb-10 leading-relaxed">
                Ready to plan your big day? Contact us to schedule a tour or discuss your event requirements.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-regal-gold mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Address</h5>
                    <p className="text-emerald-100 opacity-90">{VENUE_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-regal-gold flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Phone</h5>
                    <p className="text-emerald-100 opacity-90">{VENUE_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-regal-gold flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Email</h5>
                    <p className="text-emerald-100 opacity-90">{VENUE_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 w-full h-48 rounded-lg overflow-hidden border-2 border-emerald-800">
               {/* Use the provided map details or a placeholder if actual map logic isn't dynamic */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.669866416805!2d83.4184!3d27.4258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzMyLjkiTiA4M8KwMjUnMDYuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Regal Garden Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
               />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-10 md:p-14 bg-white">
            <h3 className="text-3xl font-serif font-bold text-regal-green mb-2">Send us a Message</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>

            {isSubmitted ? (
              <div className="bg-emerald-50 text-emerald-800 p-6 rounded-lg text-center animate-fade-in">
                <h4 className="text-xl font-bold mb-2">Thank you!</h4>
                <p>Your message has been sent successfully. We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent outline-none transition-all text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-regal-gold text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;