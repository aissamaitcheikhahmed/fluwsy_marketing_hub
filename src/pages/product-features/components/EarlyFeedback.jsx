import React from 'react';

const EarlyFeedback = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Our Early Testers Are Saying
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're working closely with select restaurants to refine Fluwsy — and the feedback has been overwhelmingly positive.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <blockquote className="bg-white rounded-lg p-6 shadow">
            <p className="text-lg mb-4">
              "It's faster and simpler than our current system — we're strongly considering switching full-time."
            </p>
            <footer className="text-muted-foreground text-sm">
              — Pilot User, Mediterranean Restaurant, Brussels
            </footer>
          </blockquote>
          
          <blockquote className="bg-white rounded-lg p-6 shadow">
            <p className="text-lg mb-4">
              "Our team loved how intuitive the dashboard is. We reduced booking errors during our busiest hours."
            </p>
            <footer className="text-muted-foreground text-sm">
              — Early Tester, Family Grill, Antwerp
            </footer>
          </blockquote>
          
          <blockquote className="bg-white rounded-lg p-6 shadow">
            <p className="text-lg mb-4">
              "The real-time updates are exactly what we needed. No more double bookings or missed reservations."
            </p>
            <footer className="text-muted-foreground text-sm">
              — Beta User, Italian Bistro, Ghent
            </footer>
          </blockquote>
          
          <blockquote className="bg-white rounded-lg p-6 shadow">
            <p className="text-lg mb-4">
              "We tested during peak hours and the system handled everything flawlessly. Very impressive performance."
            </p>
            <footer className="text-muted-foreground text-sm">
              — Pilot Restaurant, French Cuisine, Leuven
            </footer>
          </blockquote>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-lg p-6 shadow max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Pilot Program Results</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">+92%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Faster Than Current</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">4.8/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyFeedback;
