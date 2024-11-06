import React from 'react';
import { Award, Users, Home, Building } from 'lucide-react';

const stats = [
  { icon: Home, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Building, value: "2", label: "Office Locations" },
  { icon: Award, value: "15+", label: "Design Awards" }
];

const team = [
  {
    name: "Harshita Gupta",
    role: "Founder & Creative Director",
    description: "A visionary designer known for creating spaces that blend functionality with timeless elegance. With a keen eye for detail and a deep understanding of spatial dynamics, Harshita brings over 5 years of expertise in transforming spaces across India."
  },
  {
    name: "Durga Gupta",
    role: "Director of Operations",
    description: "Bringing decades of experience in project management and operations, ensuring every project is delivered with precision and excellence."
  },
  {
    name: "Riddhi Agrahari",
    role: "Lead Experiences",
    description: "A creative force in client experience design, bringing fresh perspectives and innovative solutions to every project."
  }
];

export default function About() {
  return (
    <div className="pt-20">
      <div className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">About Us</h1>
          <p className="text-neutral-600 max-w-2xl">Creating timeless spaces that inspire and transform lives.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="font-serif text-3xl mb-8">Our Story</h2>
            <div className="space-y-6 text-neutral-600">
              <p>
                Founded by Harshita Gupta, our studio represents the convergence of artistic vision and technical expertise in interior design. What began as a passion for creating beautiful spaces has evolved into one of India's most innovative design practices.
              </p>
              <p>
                With a foundation built on the principles of timeless design and functionality, we've grown from our roots in Noida to establish a significant presence in Singrauli, serving clients across India with our unique approach to spatial transformation.
              </p>
              <p>
                Our philosophy is simple yet profound: every space has a story to tell, and our role is to help tell that story through thoughtful design, careful material selection, and attention to the smallest details.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
              alt="Interior Design Project"
              className="w-full h-[300px] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              alt="Design Process"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4" />
              <div className="font-serif text-3xl mb-2">{stat.value}</div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-serif text-3xl mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-neutral-50 p-8">
                <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                <p className="text-neutral-600 font-medium mb-4">{member.role}</p>
                <p className="text-neutral-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}