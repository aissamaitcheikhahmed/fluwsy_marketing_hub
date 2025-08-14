import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StaffManagement = () => {
  const [activeFeature, setActiveFeature] = useState('scheduling');

  const features = [
    {
      id: 'scheduling',
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that optimizes coverage and reduces labor costs',
      icon: 'Calendar',
      benefits: [
        'Automated schedule generation',
        'Shift swap management',
        'Labor cost optimization',
        'Compliance tracking'
      ]
    },
    {
      id: 'performance',
      title: 'Performance Tracking',
      description: 'Comprehensive performance metrics and feedback systems',
      icon: 'BarChart3',
      benefits: [
        'Real-time performance metrics',
        'Goal setting and tracking',
        'Peer feedback system',
        'Recognition programs'
      ]
    },
    {
      id: 'communication',
      title: 'Team Communication',
      description: 'Streamlined communication tools for better coordination',
      icon: 'MessageCircle',
      benefits: [
        'Instant team messaging',
        'Shift announcements',
        'Task assignments',
        'Emergency notifications'
      ]
    },
    {
      id: 'training',
      title: 'Training & Development',
      description: 'Structured training programs with progress tracking',
      icon: 'GraduationCap',
      benefits: [
        'Interactive training modules',
        'Certification tracking',
        'Skill assessments',
        'Career development paths'
      ]
    }
  ];

  const scheduleData = [
    { name: 'Sarah M.', role: 'Server', shift: '11:00 AM - 7:00 PM', status: 'confirmed' },
    { name: 'Mike R.', role: 'Cook', shift: '10:00 AM - 6:00 PM', status: 'confirmed' },
    { name: 'Lisa K.', role: 'Host', shift: '5:00 PM - 11:00 PM', status: 'pending' },
    { name: 'David L.', role: 'Manager', shift: '9:00 AM - 5:00 PM', status: 'confirmed' },
    { name: 'Emma T.', role: 'Server', shift: '6:00 PM - 12:00 AM', status: 'confirmed' }
  ];

  const performanceMetrics = [
    { metric: 'Customer Satisfaction', value: '4.8/5', trend: '+0.3' },
    { metric: 'Order Accuracy', value: '96%', trend: '+4%' },
    { metric: 'Average Service Time', value: '12 min', trend: '-2 min' },
    { metric: 'Team Productivity', value: '94%', trend: '+8%' }
  ];

  const staffStats = [
    { label: 'Employee Retention', value: '89%', change: '+15%', positive: true },
    { label: 'Schedule Efficiency', value: '94%', change: '+12%', positive: true },
    { label: 'Labor Cost Reduction', value: '18%', change: '+18%', positive: true },
    { label: 'Training Completion', value: '96%', change: '+8%', positive: true }
  ];

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Intelligent Staff Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your team with smart scheduling, performance tracking, and communication tools that boost productivity and job satisfaction.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                activeFeature === feature.id
                  ? 'bg-trust text-white shadow-brand'
                  : 'bg-white text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={feature.icon} size={20} />
              <span>{feature.title}</span>
            </button>
          ))}
        </div>

        {/* Active Feature Content */}
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-trust rounded-lg flex items-center justify-center">
                  <Icon name={activeFeatureData.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeFeatureData.title}</h3>
                  <p className="text-muted-foreground">{activeFeatureData.description}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {activeFeatureData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} color="white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="default" className="bg-cta hover:bg-cta/90">
                Try {activeFeatureData.title}
              </Button>
            </div>

            <div className="relative">
              {activeFeature === 'scheduling' && (
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">Today's Schedule</h4>
                  <div className="space-y-3">
                    {scheduleData.map((staff, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">{staff.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{staff.name}</div>
                            <div className="text-sm text-muted-foreground">{staff.role}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-foreground">{staff.shift}</div>
                          <div className={`text-xs px-2 py-1 rounded ${
                            staff.status === 'confirmed' ?'bg-success text-white' :'bg-warning text-white'
                          }`}>
                            {staff.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeFeature === 'performance' && (
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">Performance Metrics</h4>
                  <div className="space-y-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="text-foreground">{metric.metric}</span>
                        <div className="text-right">
                          <div className="font-bold text-foreground">{metric.value}</div>
                          <div className="text-sm text-success">{metric.trend}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(activeFeature === 'communication' || activeFeature === 'training') && (
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
                  alt={`${activeFeatureData.title} interface`}
                  className="w-full h-64 object-cover rounded-lg shadow-elevated"
                />
              )}
            </div>
          </div>
        </div>

        {/* Staff Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {staffStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-subtle">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">{stat.label}</span>
                <span className={`text-sm font-medium ${
                  stat.positive ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-trust/10 to-primary/10 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Calculate Your Staff Management ROI
              </h3>
              <p className="text-muted-foreground mb-6">
                Smart staff management typically reduces labor costs by 15-20% while improving employee satisfaction and retention.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Monthly Labor Costs</span>
                  <span className="font-bold text-foreground">$28,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Projected Savings</span>
                  <span className="font-bold text-success">$5,040 (18%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Annual Savings</span>
                  <span className="font-bold text-success">$60,480</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Retention Improvement</span>
                  <span className="font-bold text-success">+25%</span>
                </div>
              </div>
              
              <Button variant="default" className="bg-cta hover:bg-cta/90">
                Start Staff Management Trial
              </Button>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center"
                alt="Happy restaurant staff team"
                className="w-full h-64 object-cover rounded-lg shadow-elevated"
              />
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-brand">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} color="var(--color-trust)" />
                  <span className="text-sm font-medium text-trust">+25% Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffManagement;