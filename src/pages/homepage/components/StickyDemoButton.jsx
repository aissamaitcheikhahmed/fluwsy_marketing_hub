import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StickyDemoButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    {
      text: "Start Free Trial",
      subtext: "No credit card required",
      icon: "Sparkles",
      variant: "default",
      className: "bg-cta hover:bg-cta/90"
    },
    {
      text: "Watch Demo",
      subtext: "See Fluwsy in action",
      icon: "Play",
      variant: "outline",
      className: ""
    },
    {
      text: "Get Started",
      subtext: "Join 2,500+ restaurants",
      icon: "ArrowRight",
      variant: "default",
      className: "bg-primary hover:bg-primary/90"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);

      // Change message based on scroll progress
      if (scrollPercent < 30) {
        setCurrentMessage(0);
      } else if (scrollPercent < 70) {
        setCurrentMessage(1);
      } else {
        setCurrentMessage(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentMsg = messages[currentMessage];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 duration-300">
      <div className="bg-white rounded-full shadow-brand-lg border border-gray-100 p-2">
        <div className="flex items-center space-x-3">
          {/* Progress Ring */}
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray={`${scrollProgress}, 100`}
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon 
                name={currentMsg.icon} 
                size={16} 
                color="var(--color-primary)" 
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="hidden sm:block pr-2">
            <p className="text-sm font-semibold text-foreground">
              {currentMsg.text}
            </p>
            <p className="text-xs text-muted-foreground">
              {currentMsg.subtext}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant={currentMsg.variant}
            size="sm"
            className={`${currentMsg.className} transition-all duration-300`}
            iconName={currentMsg.icon}
            iconPosition="right"
          >
            <span className="sm:hidden">{currentMsg.text}</span>
            <span className="hidden sm:inline">Try Now</span>
          </Button>
        </div>
      </div>

      {/* Tooltip for mobile */}
      <div className="sm:hidden absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {currentMsg.subtext}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default StickyDemoButton;