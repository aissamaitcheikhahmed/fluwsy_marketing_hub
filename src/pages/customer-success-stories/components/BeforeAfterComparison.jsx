import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BeforeAfterComparison = ({ comparison }) => {
  const [activeTab, setActiveTab] = useState('reservations');

  const tabs = [
    { id: 'reservations', label: 'Reservations', icon: 'Calendar' },
    { id: 'operations', label: 'Operations', icon: 'Settings' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' }
  ];

  const getTabContent = (tabId) => {
    const content = comparison.comparisons[tabId];
    if (!content) return null;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Before */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Icon name="X" size={16} className="text-red-600" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">Before Fluwsy</h4>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h5 className="font-medium text-red-800 mb-3">{content.before.title}</h5>
            <ul className="space-y-2">
              {content.before.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-red-700">
                  <Icon name="Minus" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-red-200 rounded-lg p-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">
                {content.before.metric.value}
              </div>
              <div className="text-sm text-red-600">
                {content.before.metric.label}
              </div>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Icon name="Check" size={16} className="text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">After Fluwsy</h4>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h5 className="font-medium text-green-800 mb-3">{content.after.title}</h5>
            <ul className="space-y-2">
              {content.after.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-green-200 rounded-lg p-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {content.after.metric.value}
              </div>
              <div className="text-sm text-green-600">
                {content.after.metric.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="GitCompare" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {comparison.restaurantName} Transformation
            </h3>
            <p className="text-sm text-muted-foreground">
              See the dramatic improvements after implementing Fluwsy
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              iconName={tab.icon}
              iconPosition="left"
              className={activeTab === tab.id ? 'bg-primary' : ''}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {getTabContent(activeTab)}
      </div>

      <div className="p-6 bg-muted border-t border-gray-100">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Icon name="Clock" size={16} />
            <span>Implementation completed in {comparison.implementationTime}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Results measured after {comparison.measurementPeriod} of usage
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;