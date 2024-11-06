import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/portfolio" 
              className={`${isActive('/portfolio') ? 'text-neutral-900' : 'text-neutral-600'} hover:text-neutral-900`}
            >
              Portfolio
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-neutral-900' : 'text-neutral-600'} hover:text-neutral-900`}
            >
              Services
            </Link>
            <Link 
              to="/shop" 
              className={`${isActive('/shop') ? 'text-neutral-900' : 'text-neutral-600'} hover:text-neutral-900`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-neutral-900' : 'text-neutral-600'} hover:text-neutral-900`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-4 py-2 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-neutral-200">
            <Link to="/portfolio" className="block px-3 py-2 text-neutral-600">Portfolio</Link>
            <Link to="/services" className="block px-3 py-2 text-neutral-600">Services</Link>
            <Link to="/shop" className="block px-3 py-2 text-neutral-600">Shop</Link>
            <Link to="/about" className="block px-3 py-2 text-neutral-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-neutral-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}