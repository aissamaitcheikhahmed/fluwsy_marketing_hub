import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedContent = ({ featuredResources, onViewResource }) => {
  const mainFeatured = featuredResources[0];
  const secondaryFeatured = featuredResources.slice(1, 3);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Featured Resources</h2>
          <p className="text-muted-foreground">
            Hand-picked content to help you succeed in restaurant management
          </p>
        </div>
        <Button variant="outline" iconName="Star" iconPosition="left">
          View All Featured
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured Resource */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden group hover:shadow-elevated transition-brand">
            <div className="relative">
              <Image 
                src={mainFeatured.image} 
                alt={mainFeatured.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-complex"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-90 transition-brand flex items-center justify-center">
                <Button 
                  variant="default"
                  onClick={() => onViewResource(mainFeatured)}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  Read Full Guide
                </Button>
              </div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-primary">
                  <Icon name="Star" size={12} className="mr-1" />
                  Featured Guide
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-primary">{mainFeatured.category}</span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {mainFeatured.readTime}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-brand">
                {mainFeatured.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {mainFeatured.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image 
                    src={mainFeatured.author.avatar} 
                    alt={mainFeatured.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{mainFeatured.author.name}</p>
                    <p className="text-xs text-muted-foreground">{mainFeatured.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Download" size={14} className="mr-1" />
                  {mainFeatured.downloads}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Featured Resources */}
        <div className="space-y-6">
          {secondaryFeatured.map((resource, index) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden group hover:shadow-elevated transition-brand">
              <div className="relative">
                <Image 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-complex"
                />
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white bg-secondary">
                    <Icon name="TrendingUp" size={10} className="mr-1" />
                    Trending
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary">{resource.category}</span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {resource.readTime}
                  </div>
                </div>
                
                <h4 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-brand">
                  {resource.title}
                </h4>
                
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image 
                      src={resource.author.avatar} 
                      alt={resource.author.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-xs font-medium text-foreground">{resource.author.name}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onViewResource(resource)}
                    iconName="ArrowRight"
                    className="text-xs px-2 py-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;