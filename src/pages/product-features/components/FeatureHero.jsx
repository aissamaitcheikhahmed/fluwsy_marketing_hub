import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeatureHero = () => {
  const [activeDemo, setActiveDemo] = useState('reservations');

  const demoFeatures = [
    {
      id: 'reservations',
      title: 'Smart Reservations',
      description: 'Intelligent table management with real-time optimization',
      icon: 'Calendar',
      color: 'bg-primary',
      stats: { tables: 24, bookings: 156, efficiency: 94 }
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Data-driven insights for smarter restaurant decisions',
      icon: 'BarChart3',
      color: 'bg-accent',
      stats: { revenue: 45280, growth: 23, customers: 1247 }
    },
    {
      id: 'marketing',
      title: 'Marketing Automation',
      description: 'Targeted campaigns that drive customer loyalty',
      icon: 'Mail',
      color: 'bg-secondary',
      stats: { campaigns: 12, openRate: 68, conversions: 34 }
    },
    {
      id: 'staff',
      title: 'Staff Management',
      description: 'Streamlined scheduling and performance tracking',
      icon: 'Users',
      color: 'bg-trust',
      stats: { staff: 18, shifts: 42, satisfaction: 89 }
    }
  ];

  const activeFeature = demoFeatures.find(f => f.id === activeDemo);

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-primary/5 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 gradient-brand"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block text-primary">Modern Restaurants</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how Fluwsy's comprehensive suite of tools transforms restaurant operations from chaotic to controlled, helping you serve more customers with less stress.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demoFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveDemo(feature.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                  activeDemo === feature.id
                    ? 'bg-primary text-white shadow-brand'
                    : 'bg-white text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
                }`}
              >
                <Icon name={feature.icon} size={20} />
                <span>{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg ${activeFeature.color} text-white mb-4`}>
                <Icon name={activeFeature.icon} size={20} />
                <span className="font-medium">{activeFeature.title}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {activeFeature.description}
              </h3>
              
              <p className="text-sm text-muted-foreground italic mb-2">
                Based on recent pilot testing
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(activeFeature.stats).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">{value}{key === 'efficiency' || key === 'growth' || key === 'openRate' || key === 'satisfaction' ? '%' : key === 'revenue' ? 'K' : ''}</div>
                    <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
              
              <Button variant="default" className="bg-cta hover:bg-cta/90">
                Try {activeFeature.title} Free
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 shadow-elevated">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">fluwsy.com/dashboard</span>
                </div>
                <Image
                  src={`https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center`}
                  alt={`${activeFeature.title} Dashboard Preview`}
                  className="w-full h-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Join the early adopters shaping the future of restaurant tech with Fluwsy.
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-medium">TechCrunch</div>
            <div className="text-sm font-medium">Restaurant Business</div>
            <div className="text-sm font-medium">Nation's Restaurant News</div>
            <div className="text-sm font-medium">QSR Magazine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;