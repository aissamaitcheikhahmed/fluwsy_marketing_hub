import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const IntegrationMap = () => {
  const [activeCategory, setActiveCategory] = useState('pos');

  const integrationCategories = {
    pos: {
      name: 'POS Systems',
      icon: 'Smartphone',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      integrations: [
        { name: 'Toast', status: 'active', setupTime: '15 min' },
        { name: 'Square', status: 'active', setupTime: '10 min' },
        { name: 'Clover', status: 'active', setupTime: '20 min' },
        { name: 'Resy', status: 'active', setupTime: '12 min' }
      ]
    },
    payments: {
      name: 'Payment Processors',
      icon: 'CreditCard',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      integrations: [
        { name: 'Stripe', status: 'active', setupTime: '5 min' },
        { name: 'PayPal', status: 'active', setupTime: '8 min' },
        { name: 'Square Payments', status: 'active', setupTime: '10 min' },
        { name: 'Authorize.net', status: 'coming-soon', setupTime: 'Q2 2025' }
      ]
    },
    accounting: {
      name: 'Accounting Software',
      icon: 'Calculator',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      integrations: [
        { name: 'QuickBooks', status: 'active', setupTime: '25 min' },
        { name: 'Xero', status: 'active', setupTime: '20 min' },
        { name: 'FreshBooks', status: 'beta', setupTime: '30 min' },
        { name: 'Sage', status: 'coming-soon', setupTime: 'Q3 2025' }
      ]
    },
    marketing: {
      name: 'Marketing Tools',
      icon: 'Mail',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      integrations: [
        { name: 'Mailchimp', status: 'active', setupTime: '15 min' },
        { name: 'Constant Contact', status: 'active', setupTime: '18 min' },
        { name: 'SendGrid', status: 'active', setupTime: '12 min' },
        { name: 'HubSpot', status: 'beta', setupTime: '35 min' }
      ]
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>;
      case 'beta':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Beta</span>;
      case 'coming-soon':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">Coming Soon</span>;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Integration Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fluwsy connects seamlessly with your existing restaurant technology stack. 
            Choose a category to explore available integrations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(integrationCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                activeCategory === key
                  ? `${category.bgColor} ${category.color}`
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon name={category.icon} size={20} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Integration Visual Map */}
        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-center">
            {/* Central Fluwsy Hub */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-brand-lg">
                <div className="text-white font-bold text-lg">Fluwsy</div>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 border-2 border-dashed border-gray-300 rounded-full opacity-30"></div>
              </div>
              
              {/* Integration Points */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                <div className={`w-16 h-16 ${integrationCategories.pos.bgColor} rounded-full flex items-center justify-center shadow-subtle`}>
                  <Icon name={integrationCategories.pos.icon} size={24} className={integrationCategories.pos.color} />
                </div>
              </div>
              
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
                <div className={`w-16 h-16 ${integrationCategories.payments.bgColor} rounded-full flex items-center justify-center shadow-subtle`}>
                  <Icon name={integrationCategories.payments.icon} size={24} className={integrationCategories.payments.color} />
                </div>
              </div>
              
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                <div className={`w-16 h-16 ${integrationCategories.accounting.bgColor} rounded-full flex items-center justify-center shadow-subtle`}>
                  <Icon name={integrationCategories.accounting.icon} size={24} className={integrationCategories.accounting.color} />
                </div>
              </div>
              
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
                <div className={`w-16 h-16 ${integrationCategories.marketing.bgColor} rounded-full flex items-center justify-center shadow-subtle`}>
                  <Icon name={integrationCategories.marketing.icon} size={24} className={integrationCategories.marketing.color} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationCategories[activeCategory].integrations.map((integration, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-elevated transition-brand">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">{integration.name}</h3>
                {getStatusBadge(integration.status)}
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Setup: {integration.setupTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} />
                  <span>Real-time sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  <span>Secure connection</span>
                </div>
              </div>
              
              <button className="w-full mt-4 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-brand font-medium">
                {integration.status === 'active' ? 'Connect Now' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationMap;