import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeatureTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      feature: 'Reservations',
      quote: "Fluwsy's reservation system transformed our booking process. We went from constant phone calls and double bookings to a smooth, automated system that our customers love.",
      author: "Maria Rodriguez",
      role: "Owner",
      restaurant: "Bella Vista Italian",
      location: "San Francisco, CA",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      metrics: {
        improvement: "40% fewer no-shows",
        efficiency: "60% less time on bookings",
        satisfaction: "4.8/5 customer rating"
      },
      beforeAfter: {
        before: "Manual phone bookings, frequent double bookings, 25% no-show rate",
        after: "Automated online reservations, real-time availability, 8% no-show rate"
      }
    },
    {
      id: 1,
      feature: 'Analytics',
      quote: "The analytics dashboard gives us insights we never had before. We can now predict busy periods, optimize our menu, and make data-driven decisions that directly impact our bottom line.",
      author: "James Thompson",
      role: "General Manager",
      restaurant: "Urban Grill House",
      location: "Chicago, IL",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      metrics: {
        improvement: "25% revenue increase",
        efficiency: "30% better inventory management",
        satisfaction: "15% higher profit margins"
      },
      beforeAfter: {
        before: "Guesswork-based decisions, frequent stockouts, unclear profit margins",
        after: "Data-driven insights, optimized inventory, clear profitability tracking"
      }
    },
    {
      id: 2,
      feature: 'Marketing',
      quote: "Our customer retention improved dramatically with Fluwsy\'s marketing automation. The loyalty program and targeted campaigns brought back customers we thought we\'d lost forever.",
      author: "Sarah Kim",
      role: "Marketing Director",
      restaurant: "Fusion Bistro",
      location: "Austin, TX",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      metrics: {
        improvement: "45% customer retention",
        efficiency: "3x email open rates",
        satisfaction: "28% repeat visit increase"
      },
      beforeAfter: {
        before: "Manual email campaigns, low engagement, one-time customers",
        after: "Automated personalized campaigns, high engagement, loyal customer base"
      }
    },
    {
      id: 3,
      feature: 'Staff Management',
      quote: "Staff scheduling used to be a nightmare. Now it's completely automated, our team is happier with better work-life balance, and we've reduced labor costs significantly.",
      author: "Michael Chen",
      role: "Operations Manager",
      restaurant: "Pacific Seafood Co.",
      location: "Seattle, WA",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      metrics: {
        improvement: "20% labor cost reduction",
        efficiency: "90% schedule accuracy",
        satisfaction: "35% less staff turnover"
      },
      beforeAfter: {
        before: "Manual scheduling, frequent conflicts, high turnover, overtime costs",
        after: "Automated scheduling, optimized coverage, happy staff, controlled costs"
      }
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how restaurants like yours are transforming their operations with Fluwsy's powerful features.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-brand ${
                activeTestimonial === index
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-white text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              {testimonial.feature}
            </button>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{currentTestimonial.author}</h3>
                  <p className="text-muted-foreground">{currentTestimonial.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.restaurant} • {currentTestimonial.location}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <Icon name="Quote" size={32} color="var(--color-primary)" className="mb-4" />
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(currentTestimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-lg font-bold text-primary">{value}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="AlertCircle" size={20} color="var(--color-destructive)" className="mr-2" />
                  Before Fluwsy
                </h4>
                <p className="text-muted-foreground">{currentTestimonial.beforeAfter.before}</p>
              </div>

              <div className="bg-success/10 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mr-2" />
                  After Fluwsy
                </h4>
                <p className="text-muted-foreground">{currentTestimonial.beforeAfter.after}</p>
              </div>

              <div className="text-center">
                <Button variant="default" className="bg-cta hover:bg-cta/90">
                  Try {currentTestimonial.feature} Free
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.filter((_, index) => index !== activeTestimonial).slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-subtle">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.restaurant}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {testimonial.feature}
                </span>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-primary">
                  {Object.values(testimonial.metrics)[0]}
                </div>
                <div className="text-xs text-muted-foreground">
                  {Object.keys(testimonial.metrics)[0].replace(/([A-Z])/g, ' $1')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Restaurant?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of restaurants already using Fluwsy to streamline operations, increase revenue, and delight customers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" className="bg-cta hover:bg-cta/90">
              Start Free Trial
            </Button>
            <Button variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTestimonials;