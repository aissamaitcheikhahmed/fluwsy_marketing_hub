import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-24 pb-16">
      <div className="absolute inset-0 gradient-brand"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <Icon name="Sparkles" size={16} className="text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transforming Restaurant Operations from 
                <span className="text-primary"> Chaos to Control</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by restaurant owners who understood the daily struggles of managing operations, 
                Fluwsy was born from the simple belief that restaurant management software should empower, 
                not overwhelm.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2,500+</div>
                  <div className="text-sm text-muted-foreground">Restaurants Powered</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Calendar" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Founded 2019</div>
                  <div className="text-sm text-muted-foreground">5 Years of Innovation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern restaurant interior showcasing the environment Fluwsy serves"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-elevated p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;