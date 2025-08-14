import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MarketingAutomation = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('welcome');

  const workflows = [
    {
      id: 'welcome',
      title: 'Welcome Series',
      description: 'Automated onboarding for new customers',
      icon: 'UserPlus',
      steps: [
        'Welcome email sent immediately',
        'Menu highlights after 2 days',
        'Special offer after 1 week',
        'Feedback request after visit'
      ],
      results: { openRate: 72, clickRate: 28, conversion: 15 }
    },
    {
      id: 'loyalty',
      title: 'Loyalty Program',
      description: 'Reward frequent customers automatically',
      icon: 'Gift',
      steps: [
        'Points awarded per visit',
        'Tier upgrade notifications',
        'Birthday rewards',
        'Exclusive member offers'
      ],
      results: { retention: 85, frequency: 40, spending: 25 }
    },
    {
      id: 'winback',
      title: 'Win-Back Campaign',
      description: 'Re-engage inactive customers',
      icon: 'RotateCcw',
      steps: [
        'Identify inactive customers',
        'Personalized comeback offer',
        'Follow-up reminders',
        'Success tracking'
      ],
      results: { reactivation: 32, revenue: 18, satisfaction: 78 }
    }
  ];

  const marketingTools = [
    {
      title: 'Email Campaigns',
      description: 'Beautiful, responsive email templates with drag-and-drop editor',
      icon: 'Mail',
      features: ['Template library', 'A/B testing', 'Personalization', 'Analytics']
    },
    {
      title: 'SMS Marketing',
      description: 'Direct customer communication with high open rates',
      icon: 'MessageSquare',
      features: ['Instant delivery', 'Two-way messaging', 'Automation', 'Compliance']
    },
    {
      title: 'Social Media',
      description: 'Manage all social platforms from one dashboard',
      icon: 'Share2',
      features: ['Multi-platform posting', 'Content calendar', 'Engagement tracking', 'Analytics']
    },
    {
      title: 'Customer Segmentation',
      description: 'Target the right customers with the right message',
      icon: 'Users',
      features: ['Behavioral segments', 'Demographic filters', 'Purchase history', 'Preferences']
    }
  ];

  const campaignStats = [
    { label: 'Email Open Rate', value: '68%', benchmark: 'Industry: 22%' },
    { label: 'Click-Through Rate', value: '34%', benchmark: 'Industry: 12%' },
    { label: 'Customer Retention', value: '85%', benchmark: 'Industry: 60%' },
    { label: 'Revenue per Email', value: '$4.20', benchmark: 'Industry: $1.80' }
  ];

  const activeWorkflowData = workflows.find(w => w.id === activeWorkflow);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marketing Automation That Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build lasting customer relationships with intelligent marketing automation that drives loyalty, increases frequency, and boosts revenue.
          </p>
        </div>

        {/* Workflow Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {workflows.map((workflow) => (
            <button
              key={workflow.id}
              onClick={() => setActiveWorkflow(workflow.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                activeWorkflow === workflow.id
                  ? 'bg-secondary text-white shadow-brand'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={workflow.icon} size={20} />
              <span>{workflow.title}</span>
            </button>
          ))}
        </div>

        {/* Active Workflow Details */}
        <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name={activeWorkflowData.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeWorkflowData.title}</h3>
                  <p className="text-muted-foreground">{activeWorkflowData.description}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {activeWorkflowData.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(activeWorkflowData.results).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-white rounded-lg shadow-subtle">
                    <div className="text-2xl font-bold text-secondary">{value}%</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
                alt="Marketing automation workflow"
                className="w-full h-64 object-cover rounded-lg shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-brand">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={20} color="var(--color-secondary)" />
                  <span className="text-sm font-medium text-secondary">Automated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketingTools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-subtle border border-border hover:border-primary/50 transition-brand">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name={tool.icon} size={24} color="white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{tool.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
              <div className="space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="bg-muted rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Outperform Industry Benchmarks
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.benchmark}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Quote" size={32} color="white" />
            </div>
            <blockquote className="text-xl text-foreground mb-6 max-w-3xl mx-auto">
              "Fluwsy's marketing automation increased our customer retention by 40% and boosted our average order value by 25%. The ROI has been incredible."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Marcus Johnson"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="font-medium text-foreground">Marcus Johnson</div>
                <div className="text-sm text-muted-foreground">Owner, Urban Bistro</div>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="default" className="bg-cta hover:bg-cta/90">
                Start Marketing Automation Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAutomation;