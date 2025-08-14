import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Icon name="Puzzle" size={48} className="text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Seamless <span className="text-primary">Integrations</span> for Your Restaurant
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Connect Fluwsy with your existing restaurant technology stack. From POS systems to payment processors, 
            we integrate with the tools you already love and trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
              View All Integrations
            </Button>
            <Button variant="outline" size="lg">
              Request Integration
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center">
              <div className="bg-white p-3 rounded-lg shadow-subtle">
                <Icon name="CreditCard" size={32} className="text-gray-600" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-3 rounded-lg shadow-subtle">
                <Icon name="Smartphone" size={32} className="text-gray-600" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-3 rounded-lg shadow-subtle">
                <Icon name="Calculator" size={32} className="text-gray-600" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-3 rounded-lg shadow-subtle">
                <Icon name="Mail" size={32} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationHero;