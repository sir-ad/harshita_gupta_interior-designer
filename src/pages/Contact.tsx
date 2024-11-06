import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-neutral-600 max-w-2xl">Get in touch to discuss your project or schedule a consultation.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-2xl mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                ></textarea>
              </div>
              <button className="w-full bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-6">Our Offices</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-2">Noida Office</h3>
                <div className="flex items-start space-x-4 text-neutral-600">
                  <MapPin className="w-5 h-5 mt-1" />
                  <p>Sector 18, Noida, UP, India</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Singrauli Office</h3>
                <div className="flex items-start space-x-4 text-neutral-600">
                  <MapPin className="w-5 h-5 mt-1" />
                  <p>Achyutam Villas, College Road, Waidhan, Singrauli, MP, India</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Contact Information</h3>
                <div className="space-y-4 text-neutral-600">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5" />
                    <p>+91 98765 43210</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5" />
                    <p>hello@harshitagupta.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}