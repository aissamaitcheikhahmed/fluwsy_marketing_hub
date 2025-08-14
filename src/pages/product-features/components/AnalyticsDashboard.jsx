import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AnalyticsDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const metrics = [
    {
      id: 'revenue',
      title: 'Revenue Tracking',
      description: 'Real-time revenue monitoring with predictive forecasting',
      icon: 'DollarSign',
      value: '$45,280',
      change: '+23%',
      trend: 'up'
    },
    {
      id: 'customers',
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences',
      icon: 'Users',
      value: '1,247',
      change: '+18%',
      trend: 'up'
    },
    {
      id: 'performance',
      title: 'Performance KPIs',
      description: 'Track operational efficiency and service quality',
      icon: 'Activity',
      value: '94%',
      change: '+12%',
      trend: 'up'
    },
    {
      id: 'inventory',
      title: 'Inventory Insights',
      description: 'Smart inventory management with waste reduction',
      icon: 'Package',
      value: '89%',
      change: '-8%',
      trend: 'down'
    }
  ];

  const dashboardFeatures = [
    {
      title: 'Real-time Dashboard',
      description: 'Live updates on all key metrics with customizable widgets',
      icon: 'Monitor'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting for demand, revenue, and staffing',
      icon: 'TrendingUp'
    },
    {
      title: 'Custom Reports',
      description: 'Generate detailed reports for any time period or metric',
      icon: 'FileText'
    },
    {
      title: 'Mobile Access',
      description: 'Access your analytics anywhere with our mobile app',
      icon: 'Smartphone'
    }
  ];

  const kpiData = [
    { label: 'Daily Revenue', value: '$2,340', change: '+15%', positive: true },
    { label: 'Table Turnover', value: '3.2x', change: '+8%', positive: true },
    { label: 'Average Order Value', value: '$28.50', change: '+12%', positive: true },
    { label: 'Customer Satisfaction', value: '4.7/5', change: '+5%', positive: true },
    { label: 'Food Cost %', value: '28%', change: '-3%', positive: true },
    { label: 'Labor Cost %', value: '32%', change: '-2%', positive: true }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make data-driven decisions with comprehensive analytics that turn your restaurant data into actionable insights for growth and optimization.
          </p>
        </div>

        {/* Live Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-foreground">Live Dashboard Preview</h3>
            <div className="flex items-center space-x-2 text-success">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Data</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`p-4 rounded-lg border transition-brand text-left ${
                  selectedMetric === metric.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon name={metric.icon} size={20} color="var(--color-primary)" />
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.title}</div>
              </button>
            ))}
          </div>

          {/* Chart Visualization */}
          <div className="bg-muted rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-foreground">
                {metrics.find(m => m.id === selectedMetric)?.title} Trend
              </h4>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-primary text-white rounded">7D</button>
                <button className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground">30D</button>
                <button className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground">90D</button>
              </div>
            </div>
            <div className="h-48 bg-white rounded flex items-center justify-center">
              <div className="text-center">
                <Icon name="BarChart3" size={48} color="var(--color-muted-foreground)" />
                <p className="text-muted-foreground mt-2">Interactive Chart Visualization</p>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {kpiData.map((kpi, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-subtle">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">{kpi.label}</span>
                <span className={`text-sm font-medium ${
                  kpi.positive ? 'text-success' : 'text-destructive'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-subtle text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon} size={24} color="white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Calculate Your Analytics ROI
              </h3>
              <p className="text-muted-foreground mb-6">
                See how much revenue you could gain with data-driven decision making. Our analytics typically help restaurants increase revenue by 15-25%.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Current Monthly Revenue</span>
                  <span className="font-bold text-foreground">$85,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Projected Increase</span>
                  <span className="font-bold text-success">+$17,000 (20%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Annual Additional Revenue</span>
                  <span className="font-bold text-success">$204,000</span>
                </div>
              </div>
              
              <Button variant="default" className="bg-cta hover:bg-cta/90">
                Start Free Analytics Trial
              </Button>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                alt="Analytics dashboard on tablet"
                className="w-full h-64 object-cover rounded-lg shadow-elevated"
              />
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-brand">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                  <span className="text-sm font-medium text-success">+20% Revenue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;