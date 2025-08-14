import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const IntegrationShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('pos');

  const integrationCategories = [
    {
      id: 'pos',
      title: 'POS Systems',
      description: 'Seamless integration with leading point-of-sale systems',
      icon: 'CreditCard',
      count: 15
    },
    {
      id: 'payment',
      title: 'Payment Processing',
      description: 'Secure payment gateways and processors',
      icon: 'DollarSign',
      count: 8
    },
    {
      id: 'delivery',
      title: 'Delivery Platforms',
      description: 'Connect with major food delivery services',
      icon: 'Truck',
      count: 12
    },
    {
      id: 'accounting',
      title: 'Accounting Software',
      description: 'Sync with popular accounting and bookkeeping tools',
      icon: 'Calculator',
      count: 6
    }
  ];

  const integrations = {
    pos: [
      { name: 'Square', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Toast', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Clover', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Lightspeed', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'coming' }
    ],
    payment: [
      { name: 'Stripe', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'PayPal', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Apple Pay', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Google Pay', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' }
    ],
    delivery: [
      { name: 'DoorDash', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Uber Eats', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Grubhub', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Postmates', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'coming' }
    ],
    accounting: [
      { name: 'QuickBooks', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'Xero', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'active' },
      { name: 'FreshBooks', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'coming' },
      { name: 'Wave', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center', status: 'coming' }
    ]
  };

  const benefits = [
    {
      title: 'Unified Data Flow',
      description: 'All your restaurant data in one place with real-time synchronization',
      icon: 'Database'
    },
    {
      title: 'Reduced Manual Work',
      description: 'Eliminate double data entry and reduce human errors',
      icon: 'Zap'
    },
    {
      title: 'Better Insights',
      description: 'Comprehensive analytics across all your restaurant operations',
      icon: 'BarChart3'
    },
    {
      title: 'Faster Setup',
      description: 'Quick and easy integration with step-by-step guidance',
      icon: 'Clock'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect Fluwsy with your existing restaurant technology stack. Our robust integration ecosystem ensures all your tools work together harmoniously.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrationCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-lg border transition-brand text-left ${
                selectedCategory === category.id
                  ? 'border-primary bg-primary/5 shadow-brand'
                  : 'border-border hover:border-primary/50 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedCategory === category.id ? 'bg-primary' : 'bg-muted'
                }`}>
                  <Icon 
                    name={category.icon} 
                    size={24} 
                    color={selectedCategory === category.id ? 'white' : 'var(--color-muted-foreground)'} 
                  />
                </div>
                <span className="text-sm font-medium text-primary">{category.count}+</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="bg-muted rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {integrationCategories.find(c => c.id === selectedCategory)?.title} Integrations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations[selectedCategory]?.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-subtle">
                <div className="relative mb-4">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-16 h-16 mx-auto rounded-lg object-cover"
                  />
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center ${
                    integration.status === 'active' ? 'bg-success' : 'bg-warning'
                  }`}>
                    <Icon 
                      name={integration.status === 'active' ? 'Check' : 'Clock'} 
                      size={12} 
                      color="white" 
                    />
                  </div>
                </div>
                <h4 className="font-medium text-foreground mb-2">{integration.name}</h4>
                <span className={`text-xs px-2 py-1 rounded ${
                  integration.status === 'active' ?'bg-success text-white' :'bg-warning text-white'
                }`}>
                  {integration.status === 'active' ? 'Available' : 'Coming Soon'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} size={32} color="white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* API Documentation CTA */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need a Custom Integration?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our robust API and developer-friendly documentation make it easy to build custom integrations for your specific needs.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Code" size={20} color="var(--color-primary)" />
                  <span className="text-foreground">RESTful API with comprehensive documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} color="var(--color-primary)" />
                  <span className="text-foreground">Enterprise-grade security and authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Headphones" size={20} color="var(--color-primary)" />
                  <span className="text-foreground">Dedicated developer support team</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="default" className="bg-cta hover:bg-cta/90">
                  View API Documentation
                </Button>
                <Button variant="outline">
                  Contact Developer Support
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="mb-2">
                  <span className="text-blue-400">GET</span> /api/v1/reservations
                </div>
                <div className="mb-2">
                  <span className="text-yellow-400">Authorization:</span> Bearer token
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">Content-Type:</span> application/json
                </div>
                <div className="text-gray-400">
                  {`{
  "reservations": [
    {
      "id": "res_123",
      "customer": "John Doe",
      "party_size": 4,
      "date": "2025-01-17",
      "time": "19:00"
    }
  ]
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationShowcase;