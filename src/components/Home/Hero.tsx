import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="w-8 h-8 text-yellow-300 opacity-70" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Star className="w-6 h-6 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-ping">
          <Zap className="w-10 h-10 text-yellow-300 opacity-50" />
        </div>
        <div className="absolute top-60 right-40 animate-bounce delay-300">
          <Star className="w-4 h-4 text-yellow-500 opacity-80" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Light Up Your
              <span className="block text-yellow-300 animate-pulse">
                Celebrations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Experience the magic of festivals with premium quality crackers 
              and fireworks from Viruthunagar's most trusted store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                to="/products"
                className="bg-yellow-400 text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Shop Now
              </Link>
              <Link
                to="/categories"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20 cursor-pointer"
              >
                Browse Categories
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">16+</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">500+</div>
                <div className="text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">100%</div>
                <div className="text-sm">Safe & Quality</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-500">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                    <p className="text-white/80">Safe & Spectacular</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;