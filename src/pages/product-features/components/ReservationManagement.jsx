import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ReservationManagement = () => {
  const [activeTab, setActiveTab] = useState('optimization');

  const features = [
    {
      id: 'optimization',
      title: 'Table Optimization',
      description: 'AI-powered seating algorithms maximize capacity while maintaining service quality',
      icon: 'Layout',
      benefits: [
        'Increase table turnover by 25%',
        'Reduce wait times by 40%',
        'Optimize party size matching',
        'Real-time availability updates'
      ]
    },
    {
      id: 'waitlist',
      title: 'Smart Waitlist',
      description: 'Automated waitlist management with SMS notifications and accurate wait time predictions',
      icon: 'Clock',
      benefits: [
        'Automated SMS notifications',
        'Accurate wait time predictions',
        'No-show reduction by 60%',
        'Customer satisfaction tracking'
      ]
    },
    {
      id: 'communication',
      title: 'Customer Communication',
      description: 'Seamless communication flows for confirmations, reminders, and special requests',
      icon: 'MessageSquare',
      benefits: [
        'Automated confirmation emails',
        'Reminder notifications',
        'Special request handling',
        'Feedback collection'
      ]
    }
  ];

  const beforeAfterData = {
    before: {
      title: 'Before Fluwsy',
      stats: [
        { label: 'Average Wait Time', value: '45 min', color: 'text-destructive' },
        { label: 'No-Show Rate', value: '25%', color: 'text-destructive' },
        { label: 'Table Turnover', value: '2.1x', color: 'text-destructive' },
        { label: 'Customer Satisfaction', value: '3.2/5', color: 'text-destructive' }
      ]
    },
    after: {
      title: 'After Fluwsy',
      stats: [
        { label: 'Average Wait Time', value: '18 min', color: 'text-success' },
        { label: 'No-Show Rate', value: '8%', color: 'text-success' },
        { label: 'Table Turnover', value: '3.4x', color: 'text-success' },
        { label: 'Customer Satisfaction', value: '4.7/5', color: 'text-success' }
      ]
    }
  };

  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Smart Reservation Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your reservation system from a source of stress into your competitive advantage with intelligent automation and optimization.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                activeTab === feature.id
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={feature.icon} size={20} />
              <span>{feature.title}</span>
            </button>
          ))}
        </div>

        {/* Active Feature Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name={activeFeature.icon} size={24} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{activeFeature.title}</h3>
                <p className="text-muted-foreground">{activeFeature.description}</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {activeFeature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} color="white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="default" className="bg-cta hover:bg-cta/90">
              See {activeFeature.title} in Action
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center"
                alt="Restaurant reservation system interface"
                className="w-full h-64 object-cover rounded-lg shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-brand">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-success">+40% Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        {/* 
        <div className="bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Real Results from Real Restaurants
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[beforeAfterData.before, beforeAfterData.after].map((data, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
                  {data.title}
                </h4>
                <div className="space-y-4">
                  {data.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              "Fluwsy transformed our reservation chaos into a smooth operation. We're serving 40% more customers with the same staff."
            </p>
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Chen"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-left">
                <div className="font-medium text-foreground">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Owner, Bamboo Garden</div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default ReservationManagement;