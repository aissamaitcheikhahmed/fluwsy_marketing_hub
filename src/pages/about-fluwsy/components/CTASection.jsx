import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Ready to Transform Your Restaurant?
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join over 2,500 restaurants that have already discovered the power of 
                  Fluwsy. Experience the perfect balance of simplicity and functionality 
                  that's designed specifically for restaurant success.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-accent" />
                  <span className="text-muted-foreground">Free 14-day trial, no credit card required</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-accent" />
                  <span className="text-muted-foreground">Setup assistance from our restaurant experts</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-accent" />
                  <span className="text-muted-foreground">24/7 customer support during trial</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-cta hover:bg-cta/90"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Start Free Trial
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">hello@fluwsy.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">1-800-FLUWSY-1</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Headquarters</div>
                      <div className="text-sm text-muted-foreground">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Join Our Community
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with other restaurant owners and stay updated on industry trends.
                </p>
                
                <div className="flex space-x-3">
                  <Button variant="ghost" size="sm" iconName="Twitter">
                    Twitter
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Linkedin">
                    LinkedIn
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Facebook">
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;