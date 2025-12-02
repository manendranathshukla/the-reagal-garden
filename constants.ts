import { Snowflake, Car, UtensilsCrossed, Zap, Music, ShieldCheck } from 'lucide-react';
import { Amenity, GalleryImage, Testimonial, NavLink } from './types';

export const VENUE_INFO = {
  name: "The Regal Garden",
  tagline: "Where Eternity Begins",
  address: "CCQM+63J, Nautanwa, Uttar Pradesh 273164",
  email: "info@theregalgarden.com",
  phone: "+91 7607728743",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.400553750000!2d83.400000!3d27.400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI0JzAwLjAiTiA4M8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const AMENITIES: Amenity[] = [
  {
    id: 1,
    title: "Centralized AC",
    description: "Keep your guests comfortable with our state-of-the-art climate control system.",
    icon: Snowflake
  },
  {
    id: 2,
    title: "Ample Parking",
    description: "Secure and spacious parking area for over 200 vehicles with valet service.",
    icon: Car
  },
  {
    id: 3,
    title: "Premium Catering",
    description: "Exquisite culinary experiences tailored to your taste, from local delicacies to global cuisines.",
    icon: UtensilsCrossed
  },
  {
    id: 4,
    title: "Power Backup",
    description: "Uninterrupted celebration with our 24/7 heavy-duty generator backup.",
    icon: Zap
  },
  {
    id: 5,
    title: "Music & Entertainment",
    description: "Acoustically treated halls with premium sound systems for the perfect celebration.",
    icon: Music
  },
  {
    id: 6,
    title: "Secure Venue",
    description: "24/7 CCTV surveillance and trained security personnel for your peace of mind.",
    icon: ShieldCheck
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/800/600?random=1", alt: "Grand Entrance Decoration", category: "Decor" },
  { id: 2, src: "https://picsum.photos/600/800?random=2", alt: "Bride and Groom", category: "Wedding" },
  { id: 3, src: "https://picsum.photos/800/500?random=3", alt: "Banquet Hall Setup", category: "Hall" },
  { id: 4, src: "https://picsum.photos/600/600?random=4", alt: "Floral Arrangement", category: "Decor" },
  { id: 5, src: "https://picsum.photos/800/800?random=5", alt: "Evening Lighting", category: "Outdoor" },
  { id: 6, src: "https://picsum.photos/600/900?random=6", alt: "Catering Display", category: "Food" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aditi & Rahul",
    role: "Newlyweds",
    content: "The Regal Garden made our dream wedding a reality. The staff was incredibly attentive, and the venue looked absolutely magical under the lights.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Mr. Sharma",
    role: "Father of the Bride",
    content: "From the parking to the catering, everything was flawless. Our guests couldn't stop praising the arrangements. Highly recommended!",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Event Planner",
    content: "As a planner, working with The Regal Garden team is a breeze. They are professional, punctual, and their infrastructure is top-notch.",
    image: "https://picsum.photos/100/100?random=12"
  }
];