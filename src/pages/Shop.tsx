import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Modern Accent Chair",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80",
    category: "Furniture"
  },
  {
    id: 2,
    name: "Ceramic Vase Set",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80",
    category: "Decor"
  },
  {
    id: 3,
    name: "Pendant Light",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80",
    category: "Lighting"
  }
];

export default function Shop() {
  return (
    <div className="pt-20">
      <div className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Shop</h1>
          <p className="text-neutral-600 max-w-2xl">Curated collection of furniture and decor pieces to elevate your space.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                />
                <button className="absolute bottom-4 right-4 bg-white text-neutral-900 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  Add to Cart
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="mt-4">
                <span className="text-sm text-neutral-500">{product.category}</span>
                <h3 className="text-xl font-serif mt-1">{product.name}</h3>
                <p className="text-neutral-900 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}