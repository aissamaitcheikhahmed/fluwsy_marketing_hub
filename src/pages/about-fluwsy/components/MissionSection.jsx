import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const missionPoints = [
    {
      icon: "Target",
      title: "Our Mission",
      description: "To empower restaurant owners to focus on what they love - creating exceptional dining experiences - while Fluwsy handles the operational complexity behind the scenes."
    },
    {
      icon: "Eye",
      title: "Our Vision",
      description: "A world where every restaurant, from family diners to fine dining establishments, has access to enterprise-level management tools that are simple enough to use daily."
    },
    {
      icon: "Heart",
      title: "Our Purpose",
      description: "We believe that great restaurants are built on passion, not paperwork. Our technology exists to amplify human creativity and hospitality, not replace it."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Fluwsy Exists
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Born from real restaurant experience, built for real restaurant success. 
            Every feature we create stems from understanding the daily challenges restaurant owners face.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-brand">
                <Icon name={point.icon} size={32} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {point.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founding Story */}
        <div className="mt-20 bg-muted rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                The Founding Story
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2019, after years of struggling with restaurant management software that was either 
                  too complex for daily use or too limited for growing businesses, our founders realized 
                  there had to be a better way.
                </p>
                <p>
                  Having owned and operated restaurants themselves, they understood that the perfect 
                  solution needed to balance powerful functionality with intuitive design. It needed 
                  to feel like it was built by restaurant people, for restaurant people.
                </p>
                <p>
                  Today, Fluwsy serves over 2,500 restaurants worldwide, proving that when you truly 
                  understand your customers' challenges, you can build solutions that transform entire industries.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-subtle">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Quote" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-2">
                      "We didn't set out to build software. We set out to solve the problems 
                      that kept us awake at night as restaurant owners."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      - Sarah Chen, Co-Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;