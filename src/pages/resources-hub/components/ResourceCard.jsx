import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResourceCard = ({ resource, onDownload, onShare }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'guide': return 'BookOpen';
      case 'report': return 'BarChart3';
      case 'tool': return 'Calculator';
      case 'webinar': return 'Video';
      default: return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'guide': return 'text-blue-600 bg-blue-50';
      case 'report': return 'text-green-600 bg-green-50';
      case 'tool': return 'text-purple-600 bg-purple-50';
      case 'webinar': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-brand border border-gray-100 overflow-hidden group">
      <div className="relative">
        <Image 
          src={resource.image} 
          alt={resource.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-complex"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
            <Icon name={getTypeIcon(resource.type)} size={12} className="mr-1" />
            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
          </span>
        </div>
        {resource.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white bg-primary">
              <Icon name="Star" size={12} className="mr-1" />
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">{resource.category}</span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Clock" size={14} className="mr-1" />
            {resource.readTime}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-brand">
          {resource.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {resource.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image 
              src={resource.author.avatar} 
              alt={resource.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-medium text-foreground">{resource.author.name}</p>
              <p className="text-xs text-muted-foreground">{resource.author.role}</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Download" size={14} className="mr-1" />
            {resource.downloads}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button 
            variant="default" 
            size="sm"
            onClick={() => onDownload(resource)}
            className="flex-1 mr-2"
          >
            {resource.type === 'webinar' ? 'Watch Now' : 'Download'}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onShare(resource)}
            iconName="Share2"
            className="px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;