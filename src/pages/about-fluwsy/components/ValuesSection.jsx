import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      icon: "Users",
      title: "Customer Success First",
      description: "Every decision we make starts with asking: 'How does this help our restaurant partners succeed?'",
      examples: [
        "Average support response time: Under 2 hours",
        "24/7 customer success availability",
        "98% customer satisfaction rating",
        "Dedicated success manager for every account"
      ]
    },
    {
      icon: "Zap",
      title: "Continuous Innovation",
      description: "We ship meaningful improvements every two weeks, driven by real restaurant feedback.",
      examples: [
        "Bi-weekly feature releases",
        "Customer feedback integration process",
        "Beta testing program with 200+ restaurants",
        "Feature request response rate: 72 hours"
      ]
    },
    {
      icon: "Utensils",
      title: "Restaurant-First Design",
      description: "Built by restaurant people, for restaurant people. Every feature is tested in real restaurant environments.",
      examples: [
        "Team visits 50+ restaurants monthly",
        "User testing in live restaurant settings",
        "Industry-specific workflow optimization",
        "Mobile-first design for floor staff"
      ]
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description: "We handle your most sensitive business data with enterprise-grade security and complete transparency.",
      examples: [
        "SOC 2 Type II certified",
        "99.9% uptime guarantee",
        "Transparent pricing with no hidden fees",
        "Open communication about updates and changes"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Core Values in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These aren't just words on a wall. They're the principles that guide every product decision, 
            customer interaction, and team collaboration at Fluwsy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-brand">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name={value.icon} size={28} className="text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground uppercase tracking-wide">
                      How We Live This Value:
                    </h4>
                    <ul className="space-y-2">
                      {value.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start space-x-3">
                          <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Numbers */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Our Values Reflected in Numbers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">&lt;2hrs</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Platform Uptime</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">26</div>
              <div className="text-sm text-muted-foreground">Features Released This Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;