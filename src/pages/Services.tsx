import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Residential Design",
    description: "Transform your living spaces into personalized sanctuaries that reflect your lifestyle and aspirations.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    features: ["Space Planning", "Color Consultation", "Custom Furniture", "Lighting Design"]
  },
  {
    title: "Commercial Design",
    description: "Create inspiring workspaces that boost productivity and reflect your brand's identity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    features: ["Office Layout", "Brand Integration", "Ergonomic Solutions", "Acoustic Planning"]
  },
  {
    title: "Renovation",
    description: "Breathe new life into existing spaces with our comprehensive renovation services.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    features: ["Space Optimization", "Material Selection", "Project Management", "Quality Control"]
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <div className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-neutral-600 max-w-2xl">Comprehensive interior design solutions tailored to your unique needs and preferences.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="w-full md:w-1/2">
                <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-serif text-3xl mb-4">{service.title}</h2>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}