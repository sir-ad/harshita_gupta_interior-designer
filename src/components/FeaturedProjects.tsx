import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Noida",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    category: "Residential",
    description: "A contemporary 5000 sq ft villa featuring open spaces and natural light",
    results: ["20% increase in natural light", "Custom furniture solutions", "Sustainable materials"],
    completion: "2023"
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    category: "Residential",
    description: "Panoramic penthouse combining modern luxury with traditional elements",
    results: ["Panoramic city views", "Smart home integration", "Custom art curation"],
    completion: "2023"
  },
  {
    id: 3,
    title: "Corporate Office",
    location: "Gurgaon",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    category: "Commercial",
    description: "A 10,000 sq ft modern workspace promoting collaboration",
    results: ["30% improved space efficiency", "Enhanced acoustics", "Biophilic design elements"],
    completion: "2023"
  },
  {
    id: 4,
    title: "Achyutam Grand",
    location: "Singrauli",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    category: "Hospitality",
    description: "Luxury hotel interiors combining local heritage with modern comfort",
    results: ["Traditional artisan collaborations", "Custom furniture design", "Local art integration"],
    completion: "2023"
  },
  {
    id: 5,
    title: "Urban Apartment",
    location: "Noida",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80",
    category: "Residential",
    description: "Smart space optimization in a 2000 sq ft urban apartment",
    results: ["Multifunctional spaces", "Hidden storage solutions", "Modern minimalist design"],
    completion: "2023"
  },
  {
    id: 6,
    title: "Retail Experience Center",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80",
    category: "Commercial",
    description: "Innovative retail space focusing on customer experience",
    results: ["Interactive displays", "Modular design", "Brand identity integration"],
    completion: "2023"
  }
];

const businessVerticals = [
  {
    title: "Residential Design",
    description: "Luxury homes, apartments, and villas",
    icon: "🏠"
  },
  {
    title: "Commercial Spaces",
    description: "Offices, retail, and hospitality",
    icon: "🏢"
  },
  {
    title: "Renovation",
    description: "Transforming existing spaces",
    icon: "🔨"
  },
  {
    title: "Consultation",
    description: "Expert design advisory services",
    icon: "💡"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-neutral-600">A curated selection of our finest work</p>
          </div>
          <Link to="/portfolio" className="hidden md:flex items-center text-neutral-900 hover:text-neutral-600">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/portfolio/${project.id}`} key={project.id} className="group cursor-pointer">
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
                    View Case Study <ArrowUpRight className="w-4 h-4 ml-1" />
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

        <div className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Business Verticals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessVerticals.map((vertical, index) => (
              <div key={index} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{vertical.icon}</div>
                <h3 className="font-serif text-xl mb-2">{vertical.title}</h3>
                <p className="text-neutral-600">{vertical.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <Link to="/portfolio" className="md:hidden w-full mt-8 flex items-center justify-center text-neutral-900 border border-neutral-900 py-3">
          View All Projects
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}