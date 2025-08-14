import React from 'react';
import Header from '../../components/ui/Header';
import FeatureHero from './components/FeatureHero';
import ReservationManagement from './components/ReservationManagement';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import MarketingAutomation from './components/MarketingAutomation';
import StaffManagement from './components/StaffManagement';
import IntegrationShowcase from './components/IntegrationShowcase';
import FeatureTestimonials from './components/FeatureTestimonials';
import EarlyFeedback from './components/EarlyFeedback';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductFeatures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <FeatureHero />
        <EarlyFeedback />
        <ReservationManagement />
        {/*<AnalyticsDashboard />*/}
        <MarketingAutomation />
        <StaffManagement />
        <IntegrationShowcase />
        {/*<FeatureTestimonials />*/}
        
        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience All Features Risk-Free
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your 30-day free trial today and discover how Fluwsy can transform your restaurant operations. No credit card required.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} />
                <span>Full feature access</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Utensils" size={20} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold">Fluwsy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming restaurant operations with intelligent automation and data-driven insights.
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Linkedin" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-brand" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-brand">Features</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-brand">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-brand">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-brand">About</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fluwsy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductFeatures;