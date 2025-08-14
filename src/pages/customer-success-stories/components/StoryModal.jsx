import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryModal = ({ story, isOpen, onClose }) => {
  if (!isOpen || !story) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Star" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {story.restaurantName} Success Story
              </h2>
              <p className="text-sm text-muted-foreground">
                {story.location} • {story.cuisine}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            className="flex-shrink-0"
          />
        </div>

        <div className="p-6">
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <Image
              src={story.image}
              alt={story.restaurantName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">{story.location}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span>{story.cuisine}</span>
                <span>•</span>
                <span>{story.size}</span>
                <span>•</span>
                <span>Since {story.customerSince}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.fullChallenge}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {story.solution}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {story.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The Results
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {story.results}
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                <p className="text-foreground italic mb-3">
                  "{story.detailedQuote}"
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {story.ownerName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {story.ownerTitle}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Key Metrics
                </h4>
                <div className="space-y-4">
                  {story.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {metric.label}
                      </span>
                      <span className="font-semibold text-primary">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Implementation Timeline
                </h4>
                <div className="space-y-3">
                  {story.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {phase.phase}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {phase.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="TrendingUp" size={20} className="text-success" />
                  <h4 className="font-semibold text-success">
                    ROI Achievement
                  </h4>
                </div>
                <div className="text-2xl font-bold text-success mb-1">
                  {story.roi}
                </div>
                <div className="text-sm text-success/80">
                  Return on investment within {story.roiTimeframe}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                Ready to create your own success story?
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Demo
              </Button>
              <Button
                variant="default"
                className="bg-cta hover:bg-cta/90"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;