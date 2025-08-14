import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnerTestimonials = () => {
  const testimonials = [
    {
      company: "Toast POS",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      spokesperson: "Sarah Chen",
      title: "Director of Partnerships",
      quote: `Fluwsy's integration with Toast is seamless and robust. Their technical team understood our API requirements perfectly, and the implementation was completed ahead of schedule. Restaurant owners love the unified experience.`,
      partnership: "Certified Partner",
      integrationTime: "2019"
    },
    {
      company: "Square",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
      spokesperson: "Michael Rodriguez",
      title: "Integration Specialist",
      quote: `The Fluwsy team's attention to detail and commitment to data security made our partnership integration smooth. Their real-time sync capabilities have significantly improved restaurant operations for our mutual customers.`,
      partnership: "Verified Integration",
      integrationTime: "2020"
    },
    {
      company: "QuickBooks",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop&crop=center",
      spokesperson: "Jennifer Park",
      title: "Product Manager",
      quote: `Fluwsy's accounting integration is one of the most reliable we've worked with. The automated transaction sync and detailed reporting have helped restaurants streamline their financial management significantly.`,
      partnership: "Premium Partner",
      integrationTime: "2021"
    },
    {
      company: "Mailchimp",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center",
      spokesperson: "David Kim",
      title: "Business Development",
      quote: `The customer data synchronization between Fluwsy and Mailchimp has enabled restaurants to create highly targeted marketing campaigns. The integration quality and ongoing support have been exceptional.`,
      partnership: "Certified Partner",
      integrationTime: "2022"
    }
  ];

  const partnerStats = [
    {
      icon: "Users",
      value: "50+",
      label: "Integration Partners",
      description: "Trusted technology partners"
    },
    {
      icon: "Zap",
      value: "99.9%",
      label: "Integration Uptime",
      description: "Reliable connections"
    },
    {
      icon: "Clock",
      value: "<15min",
      label: "Average Setup Time",
      description: "Quick implementation"
    },
    {
      icon: "Shield",
      value: "100%",
      label: "Security Compliance",
      description: "Enterprise-grade security"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our integration partners about their experience working with Fluwsy. 
            We're proud to maintain strong relationships with leading restaurant technology providers.
          </p>
        </div>

        {/* Partner Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partnerStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-elevated transition-brand">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground">{testimonial.company}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {testimonial.partnership}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Partner since {testimonial.integrationTime}
                  </div>
                </div>
              </div>

              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.spokesperson}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Partners Choose Fluwsy
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to building lasting partnerships that benefit restaurants and technology providers alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <Icon name="Code" size={32} className="text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Developer-Friendly APIs</h4>
              <p className="text-sm text-muted-foreground">
                Well-documented, RESTful APIs with comprehensive SDKs and excellent developer support.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <Icon name="Handshake" size={32} className="text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Dedicated Support</h4>
              <p className="text-sm text-muted-foreground">
                Dedicated partnership managers and technical support teams for seamless integration.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <Icon name="TrendingUp" size={32} className="text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Mutual Growth</h4>
              <p className="text-sm text-muted-foreground">
                Co-marketing opportunities and revenue sharing programs that benefit both partners.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-subtle">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Become a Fluwsy Partner</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our growing ecosystem of restaurant technology partners. Let's work together to help restaurants succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-brand font-medium">
                Apply for Partnership
              </button>
              <button className="px-6 py-3 border border-gray-300 text-foreground rounded-lg hover:bg-gray-50 transition-brand font-medium">
                Partner Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;