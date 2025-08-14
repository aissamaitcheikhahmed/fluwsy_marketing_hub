import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MetricsCounter from './components/MetricsCounter';
import FeaturesOverview from './components/FeaturesOverview';
import CustomerSuccessStories from './components/CustomerSuccessStories';
import StickyDemoButton from './components/StickyDemoButton';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <MetricsCounter />
        <FeaturesOverview />
        <CustomerSuccessStories />
      </main>
      
      <Footer />
      <StickyDemoButton />
    </div>
  );
};

export default Homepage;