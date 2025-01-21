import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-600">Dampa sa Bonguyan</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-orange-600">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="#faq" className="text-gray-700 hover:text-orange-600">FAQ</a>
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;