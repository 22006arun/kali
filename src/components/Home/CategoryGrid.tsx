import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../../types';
import { 
  Sparkles, 
  Zap, 
  Star, 
  Rocket, 
  Target, 
  Circle,
  Gift,
  Heart,
  Crown,
  Flame,
  Disc,
  Sun,
  Moon,
  Diamond,
  Award,
  Music
} from 'lucide-react';

const categoryIcons = [
  Zap, Sparkles, Crown, Star, Circle, Flame,
  Target, Rocket, Sun, Heart, Moon, Music,
  Award, Diamond, Gift, Disc
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-orange-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our extensive collection of premium crackers and fireworks, 
            carefully categorized for your perfect celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const IconComponent = categoryIcons[index % categoryIcons.length];
            const gradients = [
              'from-orange-500 to-red-500',
              'from-purple-500 to-pink-500',
              'from-blue-500 to-indigo-500',
              'from-green-500 to-emerald-500',
              'from-yellow-500 to-orange-500',
              'from-red-500 to-pink-500',
              'from-indigo-500 to-purple-500',
              'from-emerald-500 to-teal-500'
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
                  <div className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <IconComponent className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug">
                      {category}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-700 transition-colors duration-300">
                      Premium quality • Safe • Spectacular
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/categories"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
          >
            View All Categories
            <Sparkles className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;