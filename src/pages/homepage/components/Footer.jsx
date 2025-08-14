import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", path: "/product-features" },
        { name: "Integrations", path: "/integrations-partners" },
        { name: "Pricing", path: "/pricing" },
        { name: "API Documentation", path: "/api-docs" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Resource Hub", path: "/resources-hub" },
        { name: "Success Stories", path: "/customer-success-stories" },
        { name: "Help Center", path: "/help" },
        { name: "Webinars", path: "/webinars" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Fluwsy", path: "/about-fluwsy" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Security", path: "/security" },
        { name: "Compliance", path: "/compliance" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/fluwsy" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/fluwsy" },
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com/fluwsy" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com/fluwsy" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Stay updated with restaurant insights
              </h3>
              <p className="text-gray-400">
                Get weekly tips, industry trends, and product updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/homepage" className="flex items-center space-x-2">
                <img 
                  src="/assets/images/logo_fluwsy.png" 
                  alt="Fluwsy Logo" 
                  className="w-8 h-8 rounded-lg object-contain bg-white" 
                />
              <span className="text-xl font-bold">Fluwsy</span>
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              Transforming restaurant operations with intelligent technology. 
              From chaos to control, we make restaurant management effortless.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-brand"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-brand"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <p>© {currentYear} Fluwsy. All rights reserved.</p>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>All systems operational</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <Link to="/status" className="text-gray-400 hover:text-white transition-brand">
                  Status
                </Link>
                <Link to="/changelog" className="text-gray-400 hover:text-white transition-brand">
                  Changelog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;