import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const FeaturesOverview = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 'reservations',
      icon: 'Calendar',
      title: 'Smart Reservations',
      description: 'Intelligent booking system that maximizes table turnover and reduces no-shows',
      benefits: ['Real-time availability', 'Automated confirmations', 'Waitlist management'],
      demoPreview: {
        title: 'Reservation Flow',
        steps: ['Customer selects time', 'Instant confirmation', 'Automated reminders']
      },
      color: 'primary'
    },
    {
      id: 'analytics',
      icon: 'BarChart3',
      title: 'Revenue Analytics',
      description: 'Comprehensive insights to optimize pricing, menu, and operations',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Custom reports'],
      demoPreview: {
        title: 'Analytics Dashboard',
        metrics: ['Revenue: +15%', 'Efficiency: +23%', 'Customer satisfaction: 4.8/5']
      },
      color: 'secondary'
    },
    {
      id: 'staff',
      icon: 'Users',
      title: 'Staff Management',
      description: 'Streamlined scheduling and performance tracking for your team',
      benefits: ['Smart scheduling', 'Performance metrics', 'Communication tools'],
      demoPreview: {
        title: 'Staff Dashboard',
        features: ['Shift planning', 'Time tracking', 'Team messaging']
      },
      color: 'accent'
    },
    {
      id: 'marketing',
      icon: 'Megaphone',
      title: 'Marketing Automation',
      description: 'Targeted campaigns to increase customer retention and revenue',
      benefits: ['Email campaigns', 'Loyalty programs', 'Social media integration'],
      demoPreview: {
        title: 'Marketing Tools',
        campaigns: ['Welcome series', 'Birthday offers', 'Loyalty rewards']
      },
      color: 'warning'
    }
  ];

  const renderMiniDemo = (feature) => {
    if (!hoveredFeature || hoveredFeature !== feature.id) return null;

    return (
      <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-lg shadow-brand-lg p-6 z-10 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Icon name="Play" size={16} color="var(--color-primary)" />
            <h4 className="font-semibold text-foreground">{feature.demoPreview.title}</h4>
          </div>
          
          {feature.demoPreview.steps && (
            <div className="space-y-2">
              {feature.demoPreview.steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">{index + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          )}
          
          {feature.demoPreview.metrics && (
            <div className="grid grid-cols-1 gap-2">
              {feature.demoPreview.metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm text-muted-foreground">{metric.split(':')[0]}</span>
                  <span className="text-sm font-medium text-success">{metric.split(':')[1]}</span>
                </div>
              ))}
            </div>
          )}
          
          {feature.demoPreview.features && (
            <div className="space-y-2">
              {feature.demoPreview.features.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          )}
          
          <Button variant="outline" size="sm" className="w-full">
            Try Interactive Demo
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need to run a successful restaurant
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From reservations to revenue optimization, Fluwsy provides all the tools 
            your restaurant needs in one integrated platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative group"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="bg-white rounded-xl p-8 shadow-subtle hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                <div className="space-y-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-brand`}>
                    <Icon 
                      name={feature.icon} 
                      size={24} 
                      color={`var(--color-${feature.color})`}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-brand">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} color="var(--color-success)" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center space-x-2 text-primary group-hover:text-primary/80 transition-brand">
                      <span className="text-sm font-medium">Hover to preview</span>
                      <Icon name="MousePointer" size={14} />
                    </div>
                  </div>
                </div>
              </div>
              
              {renderMiniDemo(feature)}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/product-features">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;