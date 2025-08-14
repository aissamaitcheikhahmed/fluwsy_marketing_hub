import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      background: "Former restaurant owner with 15 years in hospitality management",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "sarah-chen-fluwsy"
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      background: "Ex-Google engineer with expertise in scalable restaurant technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "marcus-rodriguez-tech"
    },
    {
      name: "Emily Watson",
      role: "VP of Product",
      background: "Restaurant consultant turned product leader, 12 years industry experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "emily-watson-product"
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      background: "Former restaurant chain operations manager, customer success specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "david-kim-success"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Engineering",
      background: "Full-stack engineer with 10 years in SaaS and restaurant tech",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "lisa-thompson-eng"
    },
    {
      name: "James Wilson",
      role: "Head of Sales",
      background: "Restaurant industry veteran with deep understanding of operational needs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "james-wilson-sales"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet the Team Behind Fluwsy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A unique blend of restaurant industry expertise and technical innovation. 
            Our team combines real operational experience with cutting-edge technology skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-brand group">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Linkedin" size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.background}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Team Culture
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Restaurant-First Mindset</h4>
                    <p className="text-muted-foreground text-sm">
                      Every team member regularly visits customer restaurants to understand real-world challenges
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={16} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Continuous Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      We ship new features every two weeks based on direct customer feedback
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Customer Success Obsession</h4>
                    <p className="text-muted-foreground text-sm">
                      Our average support response time is under 2 hours, with 24/7 availability
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Fluwsy team collaborating in modern office environment"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;