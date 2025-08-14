import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import TimelineSection from './components/TimelineSection';
import RecognitionSection from './components/RecognitionSection';
import CTASection from './components/CTASection';

const AboutFluwsy = () => {
  return (
    <>
      <Helmet>
        <title>About Fluwsy - Transforming Restaurant Operations | Fluwsy</title>
        <meta 
          name="description" 
          content="Learn about Fluwsy's mission to transform restaurant operations from chaos to control. Meet our team, discover our values, and see how we're revolutionizing restaurant management technology." 
        />
        <meta name="keywords" content="about fluwsy, restaurant management, company story, team, mission, values" />
        <meta property="og:title" content="About Fluwsy - Transforming Restaurant Operations" />
        <meta property="og:description" content="Discover the story behind Fluwsy and how we're helping 2,500+ restaurants succeed with intuitive management software." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-fluwsy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <MissionSection />
          <ValuesSection />
          <TeamSection />
          <TimelineSection />
          <RecognitionSection />
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <span className="text-xl font-bold">Fluwsy</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Transforming restaurant operations from chaos to control.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/product-features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="/integrations-partners" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/about-fluwsy" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/customer-success-stories" className="hover:text-white transition-colors">Success Stories</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/resources-hub" className="hover:text-white transition-colors">Resources</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Fluwsy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutFluwsy;