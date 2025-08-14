import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WebinarCard = ({ webinar, onRegister, onWatch }) => {
  const isUpcoming = new Date(webinar.date) > new Date();
  const isPast = new Date(webinar.date) < new Date();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-brand border border-gray-100 overflow-hidden">
      <div className="relative">
        <Image 
          src={webinar.thumbnail} 
          alt={webinar.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-brand">
          <Button 
            variant="default" 
            size="sm"
            onClick={() => isPast ? onWatch(webinar) : onRegister(webinar)}
            iconName={isPast ? "Play" : "Calendar"}
            iconPosition="left"
            className="bg-white text-black hover:bg-gray-100"
          >
            {isPast ? 'Watch Recording' : 'Register Now'}
          </Button>
        </div>
        
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            isUpcoming ? 'text-green-700 bg-green-100' : isPast ?'text-gray-700 bg-gray-100': 'text-red-700 bg-red-100'
          }`}>
            <Icon name={isUpcoming ? "Calendar" : isPast ? "PlayCircle" : "Clock"} size={12} className="mr-1" />
            {isUpcoming ? 'Upcoming' : isPast ? 'Recording' : 'Live'}
          </span>
        </div>

        {webinar.duration && (
          <div className="absolute bottom-4 right-4">
            <span className="inline-flex items-center px-2 py-1 rounded bg-black/70 text-white text-xs">
              <Icon name="Clock" size={12} className="mr-1" />
              {webinar.duration}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary">{webinar.category}</span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Users" size={14} className="mr-1" />
            {webinar.attendees} attendees
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {webinar.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {webinar.description}
        </p>

        <div className="flex items-center mb-4">
          <Image 
            src={webinar.speaker.avatar} 
            alt={webinar.speaker.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-foreground">{webinar.speaker.name}</p>
            <p className="text-xs text-muted-foreground">{webinar.speaker.title}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">
            <Icon name="Calendar" size={14} className="inline mr-1" />
            {formatDate(webinar.date)}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            variant="default" 
            size="sm"
            onClick={() => isPast ? onWatch(webinar) : onRegister(webinar)}
            className="flex-1"
          >
            {isPast ? 'Watch Recording' : isUpcoming ? 'Register Free' : 'Join Live'}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            iconName="Share2"
            className="px-3"
          />
        </div>

        {webinar.topics && webinar.topics.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-muted-foreground mb-2">Topics covered:</p>
            <div className="flex flex-wrap gap-1">
              {webinar.topics.slice(0, 3).map((topic, index) => (
                <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                  {topic}
                </span>
              ))}
              {webinar.topics.length > 3 && (
                <span className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                  +{webinar.topics.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebinarCard;