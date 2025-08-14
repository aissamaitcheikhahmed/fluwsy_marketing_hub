import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecognitionSection = () => {
  const pressItems = [
    {
      publication: "Restaurant Business Magazine",
      title: "Fluwsy Named \'Best Restaurant Management Platform\' for 2024",
      date: "March 2024",
      excerpt: "Fluwsy's intuitive design and powerful analytics make it the standout choice for modern restaurants.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      publication: "TechCrunch",
      title: "How Fluwsy is Revolutionizing Restaurant Operations with AI",
      date: "January 2024",
      excerpt: "The startup\'s AI-powered features are helping restaurants increase efficiency by up to 40%.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      publication: "Nation\'s Restaurant News",
      title: "Fluwsy Leads Innovation in Restaurant Technology",
      date: "November 2023",
      excerpt: "With over 2,000 restaurants on the platform, Fluwsy proves that simplicity and power can coexist.",
      logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const awards = [
    {
      title: "Best SaaS Product 2024",
      organization: "Restaurant Technology Awards",
      icon: "Award"
    },
    {
      title: "Innovation Excellence",
      organization: "Hospitality Tech Summit",
      icon: "Star"
    },
    {
      title: "Customer Choice Award",
      organization: "Restaurant Software Review",
      icon: "Trophy"
    },
    {
      title: "Rising Star Company",
      organization: "Tech Innovators Conference",
      icon: "Zap"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading industry publications 
            and organizations across the restaurant and technology sectors.
          </p>
        </div>

        {/* Press Coverage */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Featured in Leading Publications
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pressItems.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-brand">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white">
                    <Image
                      src={item.logo}
                      alt={`${item.publication} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.publication}</div>
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-3 leading-tight">
                  {item.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="mt-4 flex items-center text-primary hover:text-primary/80 transition-brand cursor-pointer">
                  <span className="text-sm font-medium">Read Article</span>
                  <Icon name="ExternalLink" size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Awards & Recognition
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-subtle hover:shadow-elevated transition-brand">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={award.icon} size={28} className="text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">
                  {award.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partnerships */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-muted-foreground">Square</div>
            <div className="text-lg font-semibold text-muted-foreground">Toast</div>
            <div className="text-lg font-semibold text-muted-foreground">Clover</div>
            <div className="text-lg font-semibold text-muted-foreground">Resy</div>
            <div className="text-lg font-semibold text-muted-foreground">OpenTable</div>
            <div className="text-lg font-semibold text-muted-foreground">DoorDash</div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            We partner with the best in the industry to provide seamless integrations 
            and comprehensive solutions for our restaurant partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;