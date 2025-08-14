import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubscribed(true);
      onSubscribe(email);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Welcome to the Fluwsy Community!</h3>
        <p className="text-muted-foreground mb-4">
          You'll receive our weekly industry insights and exclusive resources straight to your inbox.
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsSubscribed(false)}
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} color="var(--color-primary)" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Stay Ahead of the Curve</h3>
        <p className="text-muted-foreground">
          Get weekly restaurant industry insights, exclusive resources, and early access to new tools.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          className="text-center"
        />
        
        <Button 
          type="submit"
          variant="default"
          loading={isSubscribing}
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
        >
          {isSubscribing ? 'Subscribing...' : 'Subscribe for Free'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icon name="Shield" size={16} className="mr-1" />
            No spam
          </div>
          <div className="flex items-center">
            <Icon name="Clock" size={16} className="mr-1" />
            Weekly updates
          </div>
          <div className="flex items-center">
            <Icon name="X" size={16} className="mr-1" />
            Unsubscribe anytime
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Join 12,000+ restaurant owners who trust Fluwsy for industry insights
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;