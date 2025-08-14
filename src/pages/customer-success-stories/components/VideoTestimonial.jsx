import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoTestimonial = ({ testimonial, featured = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <div className={`relative ${featured ? 'h-80' : 'h-48'} overflow-hidden bg-gray-900`}>
        {!isPlaying ? (
          <>
            <Image
              src={testimonial.thumbnail}
              alt={`${testimonial.restaurantName} video testimonial`}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button
                variant="default"
                size={featured ? 'lg' : 'default'}
                onClick={handlePlay}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                iconName="Play"
                iconPosition="left"
              >
                Watch Story
              </Button>
            </div>
            <div className="absolute top-4 left-4">
              <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <Icon name="Video" size={12} />
                {testimonial.duration}
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-white text-center">
              <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">Video would play here</p>
            </div>
          </div>
        )}
      </div>

      <div className={`p-${featured ? '8' : '6'}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className={`font-semibold text-foreground mb-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
              {testimonial.restaurantName}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {testimonial.location} • {testimonial.cuisine}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon name="Users" size={14} />
              <span>{testimonial.teamSize} team members</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-success mb-1">
              {testimonial.mainMetric.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {testimonial.mainMetric.label}
            </div>
          </div>
        </div>

        <blockquote className={`border-l-4 border-primary pl-4 mb-${featured ? '6' : '4'}`}>
          <p className={`italic text-muted-foreground mb-2 ${featured ? 'text-base' : 'text-sm'}`}>
            "{testimonial.quote}"
          </p>
          <footer className="text-sm font-medium text-foreground">
            — {testimonial.ownerName}, {testimonial.ownerTitle}
          </footer>
        </blockquote>

        {featured && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {testimonial.additionalMetrics.map((metric, index) => (
              <div key={index} className="text-center p-3 bg-muted rounded-lg">
                <div className="text-xl font-bold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={14} className="fill-current" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {testimonial.views} views
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Calendar" size={14} />
            <span>Filmed {testimonial.filmedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;