import React from 'react';
import Icon from '../AppIcon';

const EarlyAccessBanner = () => {
  return (
    <div className="bg-primary text-white text-center py-2 text-sm">
      <div className="flex items-center justify-center space-x-2">
        <Icon name="Rocket" size={16} color="white" />
        <span>🚀 Now accepting restaurants for early access – Get 2 months free!</span>
        <button className="ml-4 px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-xs font-medium transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default EarlyAccessBanner;
