import React from 'react';
import { Facebook, Twitter, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dampa sa Bonguyan</h3>
            <p className="text-gray-400">
              Experience the finest seafood and BBQ in a relaxing ambiance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Bonguyan, Davao City</p>
            <p className="text-gray-400">Phone: (082) 123-4567</p>
            <p className="text-gray-400">Email: info@dampasabonguyan.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500"><Facebook /></a>
              <a href="#" className="hover:text-orange-500"><Twitter /></a>
              <a href="#" className="hover:text-orange-500"><Youtube /></a>
              <a href="#" className="hover:text-orange-500"><MessageCircle /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Dampa sa Bonguyan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;