import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessGuarantee = () => {
  const guaranteePoints = [
    {
      icon: 'UserCheck',
      title: 'Dedicated Success Manager',
      description: 'Personal onboarding specialist assigned to your restaurant for the first 90 days'
    },
    {
      icon: 'Headphones',
      title: '24/7 Priority Support',
      description: 'Round-the-clock technical support with average response time under 2 hours'
    },
    {
      icon: 'BookOpen',
      title: 'Comprehensive Training',
      description: 'Staff training sessions, video tutorials, and ongoing education resources'
    },
    {
      icon: 'TrendingUp',
      title: 'Performance Monitoring',
      description: 'Monthly performance reviews and optimization recommendations'
    },
    {
      icon: 'Shield',
      title: '30-Day Money Back',
      description: 'Full refund if you\'re not completely satisfied within the first month'
    },
    {
      icon: 'Zap',
      title: 'Quick Implementation',
      description: 'Most restaurants see results within 2 weeks of implementation'
    }
  ];

  const successStats = [
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '2.3x', label: 'Average ROI' },
    { value: '14 days', label: 'Time to Results' },
    { value: '500+', label: 'Success Stories' }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Icon name="Award" size={16} />
          Success Guarantee
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Your Success is Our Promise
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We don't just provide software – we ensure your restaurant thrives. Our comprehensive support system guarantees your success with Fluwsy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {guaranteePoints.map((point, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-subtle border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name={point.icon} size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {point.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {point.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-subtle border border-gray-100 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {successStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-subtle border border-gray-100">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground">
              Start your transformation today with our risk-free trial
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Demo
            </Button>
            <Button
              variant="default"
              className="bg-cta hover:bg-cta/90"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessGuarantee;