import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CustomerSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const earlyUserFeedback = [
    {
      id: 1,
      restaurantName: "Bistro Amsterdam",
      ownerName: "Early Tester",
      location: "Amsterdam, NL",
      restaurantType: "European Bistro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?w=150&h=150&fit=crop&crop=face",
      restaurantImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      challenge: "Keeping up with reservations on our current system is frustrating and slow.",
      solution: "fluwsy's real-time booking system made managing peak times simple and error-free.",
      quote: "We've tested fluwsy during a busy weekend and were blown away. The interface is intuitive and faster than what we currently use. We're strongly considering switching full-time.",
      metrics: [
        { label: "Interface speed", value: "Faster than current tool" },
        { label: "Ease of use", value: "Intuitive design" },
        { label: "Weekend performance", value: "Excellent" }
      ]
    },
    {
      id: 2,
      restaurantName: "Café Milano",
      ownerName: "Beta User",
      location: "Milan, IT",
      restaurantType: "Italian Café",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      restaurantImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop",
      challenge: "Our current booking system is clunky and doesn't integrate well with our workflow.",
      solution: "fluwsy's streamlined interface fits perfectly into our daily operations.",
      quote: "The beta version already feels more polished than our current system. The real-time updates are exactly what we needed.",
      metrics: [
        { label: "System integration", value: "Seamless" },
        { label: "Real-time updates", value: "Perfect" },
        { label: "Overall polish", value: "Professional" }
      ]
    },
    {
      id: 3,
      restaurantName: "Tapas Bar Barcelona",
      ownerName: "Pilot User",
      location: "Barcelona, ES",
      restaurantType: "Spanish Tapas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      restaurantImage: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=250&fit=crop",
      challenge: "We needed something that could handle our busy weekend crowds without crashing.",
      solution: "fluwsy handled peak times flawlessly with no performance issues.",
      quote: "We tested during our busiest weekend and fluwsy performed flawlessly. The speed and reliability are impressive.",
      metrics: [
        { label: "Peak performance", value: "Flawless" },
        { label: "System reliability", value: "100%" },
        { label: "Speed under load", value: "Excellent" }
      ]
    }
  ];

  const currentStory = earlyUserFeedback[activeStory];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What our early users are already saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from restaurants testing fluwsy during our beta phase
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-muted rounded-lg p-2">
            {earlyUserFeedback.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-brand ${
                  activeStory === index
                    ? 'bg-white shadow-subtle text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Image
                  src={story.avatar}
                  alt={story.ownerName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium">{story.restaurantName}</p>
                  <p className="text-xs opacity-75">{story.location}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src={currentStory.avatar}
                  alt={currentStory.ownerName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {currentStory.ownerName}
                  </h3>
                  <p className="text-muted-foreground">
                    {currentStory.restaurantName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentStory.location} • {currentStory.restaurantType}
                  </p>
                </div>
              </div>

              <blockquote className="text-2xl font-medium text-foreground leading-relaxed">
                "{currentStory.quote}"
              </blockquote>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div className="bg-destructive/5 border-l-4 border-destructive p-4 rounded-r-lg">
                <h4 className="font-semibold text-destructive mb-2">The Challenge</h4>
                <p className="text-muted-foreground">{currentStory.challenge}</p>
              </div>

              <div className="bg-success/5 border-l-4 border-success p-4 rounded-r-lg">
                <h4 className="font-semibold text-success mb-2">The fluwsy Experience</h4>
                <p className="text-muted-foreground">{currentStory.solution}</p>
              </div>
            </div>

            {/* Trial Results */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-2xl font-bold text-primary">+92%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-lg">
                <p className="text-2xl font-bold text-secondary">100%</p>
                <p className="text-sm text-muted-foreground">Faster than current</p>
              </div>
              <div className="text-center p-4 bg-success/5 rounded-lg">
                <p className="text-2xl font-bold text-success">4.8/5</p>
                <p className="text-sm text-muted-foreground">Average score</p>
              </div>
            </div>
          </div>

          {/* Restaurant Image */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src={currentStory.restaurantImage}
                alt={`${currentStory.restaurantName} restaurant`}
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="font-semibold text-foreground">{currentStory.restaurantName}</p>
                  <p className="text-sm text-muted-foreground">Early user feedback</p>
                </div>
              </div>
            </div>

            {/* Trial Metrics */}
            <div className="space-y-3">
              {currentStory.metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="font-semibold text-success">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Ready to join our early users?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Join the Beta
              </Button>
              <Link to="/customer-success-stories">
                <Button variant="outline" size="lg">
                  More Early Feedback
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessStories;