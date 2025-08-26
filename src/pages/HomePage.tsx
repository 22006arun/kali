import React from 'react';
import Hero from '../components/Home/Hero';
import CategoryGrid from '../components/Home/CategoryGrid';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CategoryGrid />
    </div>
  );
};

export default HomePage;