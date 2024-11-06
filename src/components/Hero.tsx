import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/40" />
        </div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
          Crafting Timeless<br />Spaces & Stories
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Where luxury meets functionality, and every design tells a unique story
        </p>
        <button className="group bg-white text-neutral-900 px-8 py-3 flex items-center hover:bg-neutral-100 transition-colors">
          Explore Our Portfolio
          <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}