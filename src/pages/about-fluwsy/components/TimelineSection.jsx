import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      year: "2019",
      title: "Fluwsy Founded",
      description: "Sarah and Marcus launch Fluwsy after experiencing firsthand the challenges of restaurant management software.",
      icon: "Rocket",
      stats: "2 Co-founders, 1 Big Vision"
    },
    {
      year: "2020",
      title: "First 100 Restaurants",
      description: "Despite pandemic challenges, we onboard our first 100 restaurant partners and launch core reservation management.",
      icon: "Users",
      stats: "100 Restaurants, 5 Team Members"
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $8M Series A to expand our platform capabilities and grow our customer success team.",
      icon: "TrendingUp",
      stats: "$8M Raised, 500 Restaurants"
    },
    {
      year: "2022",
      title: "Analytics & Insights Launch",
      description: "Introduced comprehensive analytics dashboard and predictive insights, helping restaurants increase revenue by 23% on average.",
      icon: "BarChart3",
      stats: "1,200 Restaurants, 15 Features"
    },
    {
      year: "2023",
      title: "Enterprise & Integrations",
      description: "Launched enterprise features and 50+ POS integrations, serving restaurant groups and chains.",
      icon: "Building2",
      stats: "2,000 Restaurants, 50+ Integrations"
    },
    {
      year: "2024",
      title: "AI-Powered Features",
      description: "Introduced AI-driven demand forecasting and automated staff scheduling, revolutionizing restaurant operations.",
      icon: "Brain",
      stats: "2,500+ Restaurants, 25 Team Members"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Journey of Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small startup to powering thousands of restaurants worldwide. 
            Every milestone represents restaurants we've helped succeed.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline Dot */}
                <div className="hidden md:flex w-16 h-16 bg-white rounded-full border-4 border-primary/20 items-center justify-center flex-shrink-0 relative z-10">
                  <Icon name={milestone.icon} size={24} className="text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-brand">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <div className="md:hidden w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={milestone.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                        <div className="text-lg font-semibold text-foreground">{milestone.title}</div>
                      </div>
                    </div>
                    
                    <div className="bg-muted px-4 py-2 rounded-lg">
                      <div className="text-sm font-medium text-muted-foreground">{milestone.stats}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Where We Are Today
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Restaurants Powered</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">25</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Platform Integrations</div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're just getting started. Our mission to transform restaurant operations 
            continues to drive everything we build, every partnership we form, and every 
            customer success story we celebrate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;