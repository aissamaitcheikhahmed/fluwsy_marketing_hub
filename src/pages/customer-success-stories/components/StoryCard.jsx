import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onReadMore }) => {
  const getTypeIcon = (type) => {
    const icons = {
      'fine-dining': 'Utensils',
      'casual': 'Coffee',
      'quick-service': 'Zap',
      'cafe': 'Cookie'
    };
    return icons[type] || 'Store';
  };

  const getTypeColor = (type) => {
    const colors = {
      'fine-dining': 'text-purple-600 bg-purple-100',
      'casual': 'text-blue-600 bg-blue-100',
      'quick-service': 'text-orange-600 bg-orange-100',
      'cafe': 'text-green-600 bg-green-100'
    };
    return colors[type] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden hover:shadow-elevated transition-brand group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story.image}
          alt={story.restaurantName}
          className="w-full h-full object-cover group-hover:scale-105 transition-complex"
        />
        <div className="absolute top-4 left-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(story.type)}`}>
            <Icon name={getTypeIcon(story.type)} size={14} />
            {story.typeLabel}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
            {story.size}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {story.restaurantName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {story.location} • {story.cuisine}
            </p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="Star" size={14} className="fill-current" />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {story.challenge}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {story.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-primary pl-4 mb-6">
          <p className="text-sm italic text-muted-foreground mb-2">
            "{story.quote}"
          </p>
          <footer className="text-xs font-medium text-foreground">
            — {story.ownerName}, {story.ownerTitle}
          </footer>
        </blockquote>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Calendar" size={14} />
            <span>Customer since {story.customerSince}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onReadMore(story)}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Read Full Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;