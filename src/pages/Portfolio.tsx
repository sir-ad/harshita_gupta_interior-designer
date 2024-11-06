import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Noida",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    category: "Residential",
    description: "A contemporary 5000 sq ft villa featuring open spaces and natural light",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    category: "Residential",
    description: "Panoramic penthouse combining modern luxury with traditional elements",
  },
  {
    id: 3,
    title: "Corporate Office",
    location: "Gurgaon",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    category: "Commercial",
    description: "A 10,000 sq ft modern workspace promoting collaboration",
  },
  // ... other projects
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      <div className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Portfolio</h1>
          <p className="text-neutral-600 max-w-2xl">Explore our collection of thoughtfully designed spaces that reflect our commitment to excellence and innovation in interior design.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/portfolio/${project.id}`} key={project.id} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-serif mt-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.location}</p>
                  <div className="flex items-center mt-4 text-sm">
                    View Details <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-neutral-500">{project.category}</span>
                <h3 className="text-xl font-serif mt-1">{project.title}</h3>
                <p className="text-neutral-600 mt-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}