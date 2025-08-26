import React from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-orange-600">
                MK
              </div>
              <div>
                <h3 className="font-bold text-xl">M.K. Athiban Crackers</h3>
                <p className="text-gray-400">Premium Quality Fireworks</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the joy of festivals with our premium quality crackers and fireworks. 
              Located in the heart of Viruthunagar, we've been serving customers with safe and 
              spectacular fireworks for years.
            </p>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-400">Trusted by thousands</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Viruthunagar Main Road</p>
                  <p className="text-gray-300">Amathur, Viruthunagar DT</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-gray-300">6374363805</p>
                  <p className="text-gray-300">8056862419</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <p className="text-gray-300">tkpprakash27@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <div className="space-y-2">
              <p className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">Sparklers</p>
              <p className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">Flower Pots</p>
              <p className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">Rockets</p>
              <p className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">Gift Boxes</p>
              <p className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">Kids Special</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 M.K. Athiban Crackers. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400">Safe • Quality • Spectacular</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;