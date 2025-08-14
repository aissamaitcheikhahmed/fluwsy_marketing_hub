import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const POSIntegrations = () => {
  const posIntegrations = [
    {
      name: "Toast POS",
      logo: "Smartphone",
      description: "Complete integration with Toast\'s restaurant management platform",
      features: [
        "Real-time menu synchronization",
        "Automatic sales reporting",
        "Inventory management sync",
        "Staff scheduling integration"
      ],
      setupTime: "15 minutes",
      certification: "Certified Partner",
      benefits: "Reduce manual data entry by 90% and eliminate menu discrepancies"
    },
    {
      name: "Square POS",
      logo: "CreditCard",
      description: "Seamless connection with Square\'s point-of-sale system",
      features: [
        "Payment processing sync",
        "Customer data integration",
        "Analytics dashboard merge",
        "Loyalty program connection"
      ],
      setupTime: "10 minutes",
      certification: "Verified Integration",
      benefits: "Unified customer experience across all touchpoints"
    },
    {
      name: "Clover POS",
      logo: "Monitor",
      description: "Deep integration with Clover\'s comprehensive restaurant solution",
      features: [
        "Order management sync",
        "Employee time tracking",
        "Tip distribution automation",
        "Multi-location support"
      ],
      setupTime: "20 minutes",
      certification: "Premium Partner",
      benefits: "Streamline operations across multiple restaurant locations"
    },
    {
      name: "Resy POS",
      logo: "Calendar",
      description: "Bi-directional sync with Resy\'s reservation platform",
      features: [
        "Reservation synchronization",
        "Table management integration",
        "Guest preference tracking",
        "Waitlist automation"
      ],
      setupTime: "12 minutes",
      certification: "Certified Partner",
      benefits: "Prevent double-bookings and optimize table turnover"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            POS System Integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect Fluwsy with your existing POS system for seamless data flow and unified restaurant management. 
            All integrations feature real-time synchronization and secure data transfer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {posIntegrations.map((pos, index) => (
            <div key={index} className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-brand overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={pos.logo} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{pos.name}</h3>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mt-1">
                        {pos.certification}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Setup Time</div>
                    <div className="font-semibold text-foreground">{pos.setupTime}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{pos.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {pos.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-2">
                    <Icon name="Lightbulb" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-blue-900 text-sm">Integration Benefit</div>
                      <div className="text-blue-800 text-sm">{pos.benefits}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="default" className="flex-1">
                    Connect Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Guide
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-subtle">
            <Icon name="HelpCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Don't See Your POS System?</h3>
            <p className="text-muted-foreground mb-6">
              We're constantly adding new integrations. Let us know which POS system you'd like to see connected with Fluwsy.
            </p>
            <Button variant="outline" iconName="Plus" iconPosition="left">
              Request Integration
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSIntegrations;