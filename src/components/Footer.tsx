import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Logo variant="light" size="lg" />
          <p className="text-neutral-400 mb-6 mt-4">Where luxury meets functionality, and every design tells a unique story.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-neutral-400"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white hover:text-neutral-400"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white hover:text-neutral-400"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/portfolio" className="text-neutral-400 hover:text-white">Portfolio</Link></li>
            <li><Link to="/services" className="text-neutral-400 hover:text-white">Services</Link></li>
            <li><Link to="/shop" className="text-neutral-400 hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="text-neutral-400 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-neutral-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Our Offices</h4>
          <ul className="space-y-4">
            <li className="flex items-start text-neutral-400">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <span>Sector 18, Noida, UP, India</span>
            </li>
            <li className="flex items-start text-neutral-400">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <span>Achyutam Villas, College Road, Waidhan, Singrauli, MP, India</span>
            </li>
            <li className="flex items-center text-neutral-400">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center text-neutral-400">
              <Mail className="w-5 h-5 mr-2" />
              <span>hello@harshitagupta.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Newsletter</h4>
          <p className="text-neutral-400 mb-4">Subscribe to our newsletter for design insights and updates.</p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
            />
            <button className="w-full bg-white text-neutral-900 px-4 py-2 hover:bg-neutral-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-neutral-800">
        <p className="text-center text-neutral-400">
          © {new Date().getFullYear()} Harshita Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}