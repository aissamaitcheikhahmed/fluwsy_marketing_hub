import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const MetricsCounter = () => {
  const [metrics, setMetrics] = useState({
    reservations: 0,
    restaurants: 0,
    efficiency: 0
  });

  const targetMetrics = {
    reservations: 47832,
    restaurants: 2547,
    efficiency: 34
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetMetrics).map(key => {
      const target = targetMetrics[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        current = Math.min(Math.floor(increment * step), target);
        
        setMetrics(prev => ({
          ...prev,
          [key]: current
        }));

        if (step >= steps) {
          clearInterval(intervals.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Powering restaurants worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time impact across our restaurant community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Early Traction / Test Data */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-brand">
              <Icon name="Lightbulb" size={24} color="var(--color-primary)" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">
                {formatNumber(metrics.reservations)}
              </p>
              <p className="text-lg font-semibold text-foreground">
                Now onboarding our first restaurants
              </p>
              <p className="text-sm text-muted-foreground">
                Be among the first to experience the future of reservation management.
              </p>
            </div>
          </div>

          {/* Column 2: Vision & Community */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-brand">
              <Icon name="Rocket" size={24} color="var(--color-secondary)" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-secondary">
                {formatNumber(metrics.restaurants)}+
              </p>
              <p className="text-lg font-semibold text-foreground">
                Made with restaurants, for restaurants
              </p>
              <p className="text-sm text-muted-foreground">
                Our tools are shaped by real feedback from early users and partners.
              </p>
            </div>
          </div>

          {/* Column 3: Efficiency Focus / Value Promise */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4 group-hover:bg-success/20 transition-brand">
              <Icon name="TrendingUp" size={24} color="var(--color-success)" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-success">
                {metrics.efficiency}%
              </p>
              <p className="text-lg font-semibold text-foreground">
                Designed for speed & clarity
              </p>
              <p className="text-sm text-muted-foreground">
                Fluwsy is built to be intuitive, responsive, and results-driven.
              </p>
            </div>
          </div>
        </div>

        {/* Live Update Indicator */}
        <div className="flex items-center justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <p className="text-sm text-muted-foreground">
            Live data • Updated every minute
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetricsCounter;