import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterBar from './components/FilterBar';
import StoryCard from './components/StoryCard';
import VideoTestimonial from './components/VideoTestimonial';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import SuccessGuarantee from './components/SuccessGuarantee';
import StoryModal from './components/StoryModal';

const CustomerSuccessStories = () => {
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    challenge: [],
    size: []
  });
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredStories, setFilteredStories] = useState([]);

  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      restaurantName: "Bella Vista Ristorante",
      location: "San Francisco, CA",
      cuisine: "Italian Fine Dining",
      type: "fine-dining",
      typeLabel: "Fine Dining",
      size: "Medium (5 locations)",
      customerSince: "2023",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      challenge: "Struggling with reservation management and table optimization during peak hours, leading to long wait times and frustrated customers.",
      fullChallenge: `Bella Vista was experiencing significant challenges with their reservation system. During peak dining hours, the restaurant was losing potential customers due to inefficient table management and overbooking issues. The manual reservation process was time-consuming and error-prone, leading to double bookings and customer dissatisfaction. Staff were spending too much time managing reservations instead of focusing on customer service.`,
      solution: `Fluwsy's intelligent reservation system transformed Bella Vista's operations with automated table optimization, real-time availability updates, and smart waitlist management. The system integrated seamlessly with their existing POS and provided staff with intuitive tools for managing reservations efficiently.`,
      results: `Within 30 days of implementation, Bella Vista saw a 40% reduction in no-shows, 25% increase in table turnover, and significantly improved customer satisfaction scores. The automated system freed up staff time, allowing them to focus on delivering exceptional dining experiences.`,
      features: [
        "Smart table optimization",
        "Automated waitlist management",
        "Real-time availability updates",
        "Customer communication tools",
        "Analytics dashboard",
        "POS integration"
      ],
      timeline: [
        { phase: "Setup & Training", duration: "Week 1" },
        { phase: "Staff Onboarding", duration: "Week 2" },
        { phase: "Go Live", duration: "Week 3" },
        { phase: "Optimization", duration: "Week 4" }
      ],
      metrics: [
        { label: "No-show Reduction", value: "40%" },
        { label: "Table Turnover", value: "+25%" },
        { label: "Customer Satisfaction", value: "4.8/5" },
        { label: "Time Saved Daily", value: "3 hours" }
      ],
      quote: "Fluwsy transformed our reservation chaos into a smooth, efficient system. Our customers are happier, and our staff can focus on what they do best.",
      detailedQuote: "Before Fluwsy, managing reservations was a nightmare. We were constantly dealing with double bookings, long wait times, and frustrated customers. Now, everything runs like clockwork. Our table turnover has increased by 25%, and we've virtually eliminated no-shows. The system pays for itself every month.",
      ownerName: "Marco Rossi",
      ownerTitle: "Owner & Head Chef",
      roi: "320%",
      roiTimeframe: "6 months"
    },
    {
      id: 2,
      restaurantName: "Urban Burger Co.",
      location: "Austin, TX",
      cuisine: "American Casual",
      type: "casual",
      typeLabel: "Casual Dining",
      size: "Small (2 locations)",
      customerSince: "2023",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop",
      challenge: "High staff turnover and scheduling conflicts were affecting service quality and operational efficiency.",
      fullChallenge: `Urban Burger Co. was struggling with staff management issues that were impacting their ability to provide consistent service. High turnover rates, scheduling conflicts, and inefficient communication were creating operational chaos. Managers were spending hours each week on scheduling, and last-minute changes often left shifts understaffed.`,
      solution: `Fluwsy's staff management module provided automated scheduling, shift swapping capabilities, and real-time communication tools. The system helped optimize labor costs while ensuring adequate coverage during peak hours.`,
      results: `Staff turnover decreased by 35%, scheduling time was reduced from 4 hours to 30 minutes weekly, and labor costs were optimized by 18%. Employee satisfaction improved significantly with better work-life balance.`,
      features: [
        "Automated scheduling",
        "Shift swapping system",
        "Real-time communication",
        "Labor cost optimization",
        "Performance tracking",
        "Mobile app access"
      ],
      timeline: [
        { phase: "System Setup", duration: "Week 1" },
        { phase: "Manager Training", duration: "Week 2" },
        { phase: "Staff Onboarding", duration: "Week 3" },
        { phase: "Full Implementation", duration: "Week 4" }
      ],
      metrics: [
        { label: "Staff Turnover", value: "-35%" },
        { label: "Scheduling Time", value: "30 min/week" },
        { label: "Labor Cost Savings", value: "18%" },
        { label: "Employee Satisfaction", value: "4.6/5" }
      ],
      quote: "Scheduling used to be my biggest headache. Now it's completely automated, and my team loves the flexibility.",detailedQuote: "Managing staff schedules was consuming my entire Sunday. With Fluwsy, I set up the parameters once, and the system handles everything automatically. My employees can swap shifts through the app, and I get real-time updates. It's been a game-changer for work-life balance.",
      ownerName: "Sarah Johnson",
      ownerTitle: "General Manager",
      roi: "280%",
      roiTimeframe: "4 months"
    },
    {
      id: 3,
      restaurantName: "Lightning Bites",
      location: "New York, NY",
      cuisine: "Fast Casual",
      type: "quick-service",
      typeLabel: "Quick Service",
      size: "Large (15 locations)",
      customerSince: "2022",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      challenge: "Needed comprehensive analytics to optimize operations across multiple locations and improve decision-making.",
      fullChallenge: `Lightning Bites was expanding rapidly but lacked the data insights needed to optimize operations across their growing network of locations. Without proper analytics, they couldn't identify trends, optimize menu offerings, or make data-driven decisions about staffing and inventory.`,
      solution: `Fluwsy's advanced analytics platform provided real-time insights across all locations, including sales trends, customer behavior analysis, and operational efficiency metrics. The system enabled data-driven decision making at both location and corporate levels.`,
      results: `Average order value increased by 22%, food waste decreased by 30%, and operational efficiency improved by 28% across all locations. The analytics helped identify top-performing menu items and optimize inventory management.`,
      features: [
        "Multi-location analytics",
        "Real-time dashboards",
        "Sales trend analysis",
        "Customer behavior insights",
        "Inventory optimization",
        "Performance benchmarking"
      ],
      timeline: [
        { phase: "Data Integration", duration: "Week 1-2" },
        { phase: "Dashboard Setup", duration: "Week 3" },
        { phase: "Training & Rollout", duration: "Week 4-5" },
        { phase: "Optimization", duration: "Week 6+" }
      ],
      metrics: [
        { label: "Order Value Increase", value: "+22%" },
        { label: "Food Waste Reduction", value: "-30%" },
        { label: "Efficiency Improvement", value: "+28%" },
        { label: "Data Accuracy", value: "99.2%" }
      ],
      quote: "The analytics insights have revolutionized how we make decisions. We can see exactly what\'s working and what isn\'t.",
      detailedQuote: "Before Fluwsy, we were making decisions based on gut feeling. Now we have real data from all our locations in real-time. We've optimized our menu, reduced waste, and increased profitability. The ROI has been incredible.",ownerName: "David Chen",ownerTitle: "Operations Director",roi: "450%",roiTimeframe: "8 months"
    },
    {
      id: 4,
      restaurantName: "Sunrise Café",location: "Portland, OR",cuisine: "Café & Bakery",type: "cafe",typeLabel: "Café & Bakery",size: "Small (1 location)",customerSince: "2023",image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",challenge: "Needed to streamline operations and improve customer experience while maintaining the cozy, personal atmosphere.",
      fullChallenge: `Sunrise Café wanted to modernize their operations without losing the personal touch that made them special. They needed better order management, inventory tracking, and customer engagement tools while maintaining their warm, community-focused atmosphere.`,
      solution: `Fluwsy's café-specific features provided streamlined order management, loyalty program integration, and inventory tracking tailored for bakery operations. The system maintained the personal touch while improving operational efficiency.`,
      results: `Customer retention increased by 45%, average transaction value grew by 18%, and inventory waste decreased by 25%. The loyalty program helped build a stronger community connection.`,
      features: [
        "Order management system","Loyalty program integration","Bakery inventory tracking","Customer engagement tools","Mobile ordering","Community features"
      ],
      timeline: [
        { phase: "System Installation", duration: "Week 1" },
        { phase: "Menu Setup", duration: "Week 2" },
        { phase: "Staff Training", duration: "Week 3" },
        { phase: "Customer Launch", duration: "Week 4" }
      ],
      metrics: [
        { label: "Customer Retention", value: "+45%" },
        { label: "Transaction Value", value: "+18%" },
        { label: "Inventory Waste", value: "-25%" },
        { label: "Loyalty Members", value: "1,200+" }
      ],
      quote: "Fluwsy helped us grow while keeping our community feel. Our regulars love the new loyalty program.",detailedQuote: "We were worried that technology would make us feel impersonal, but Fluwsy actually helped us connect better with our customers. The loyalty program has created a real sense of community, and our operations are so much smoother.",ownerName: "Emma Thompson",ownerTitle: "Owner",roi: "190%",roiTimeframe: "5 months"
    }
  ];

  // Mock data for video testimonials
  const videoTestimonials = [
    {
      id: 1,
      restaurantName: "Bella Vista Ristorante",
      location: "San Francisco, CA",
      cuisine: "Italian Fine Dining",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      duration: "3:24",
      teamSize: "25",
      mainMetric: { value: "40%", label: "No-show Reduction" },
      additionalMetrics: [
        { value: "25%", label: "Table Turnover" },
        { value: "4.8/5", label: "Customer Rating" },
        { value: "3hrs", label: "Time Saved Daily" }
      ],
      quote: "Fluwsy transformed our reservation chaos into a smooth, efficient system.",
      ownerName: "Marco Rossi",
      ownerTitle: "Owner & Head Chef",
      views: "2.1K",
      filmedDate: "Dec 2023"
    },
    {
      id: 2,
      restaurantName: "Urban Burger Co.",
      location: "Austin, TX",
      cuisine: "American Casual",
      thumbnail: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop",
      duration: "2:45",
      teamSize: "18",
      mainMetric: { value: "35%", label: "Staff Turnover Reduction" },
      quote: "Scheduling used to be my biggest headache. Now it\'s completely automated.",
      ownerName: "Sarah Johnson",
      ownerTitle: "General Manager",
      views: "1.8K",
      filmedDate: "Nov 2023"
    },
    {
      id: 3,
      restaurantName: "Lightning Bites",
      location: "New York, NY",
      cuisine: "Fast Casual",
      thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      duration: "4:12",
      teamSize: "120",
      mainMetric: { value: "22%", label: "Order Value Increase" },
      quote: "The analytics insights have revolutionized how we make decisions.",
      ownerName: "David Chen",
      ownerTitle: "Operations Director",
      views: "3.2K",
      filmedDate: "Jan 2024"
    }
  ];

  // Mock data for before/after comparison
  const beforeAfterComparison = {
    restaurantName: "Bella Vista Ristorante",
    implementationTime: "3 weeks",
    measurementPeriod: "3 months",
    comparisons: {
      reservations: {
        before: {
          title: "Manual Reservation Chaos",
          points: [
            "Phone-only reservations causing long hold times",
            "Double bookings and overbooking issues",
            "No real-time table availability",
            "Manual waitlist management",
            "High no-show rates (25%)"
          ],
          metric: { value: "25%", label: "No-show Rate" }
        },
        after: {
          title: "Automated Reservation Excellence",
          points: [
            "Online booking with real-time availability",
            "Intelligent table optimization",
            "Automated confirmation and reminders",
            "Smart waitlist with SMS notifications",
            "Reduced no-shows to 15%"
          ],
          metric: { value: "15%", label: "No-show Rate" }
        }
      },
      operations: {
        before: {
          title: "Inefficient Operations",
          points: [
            "4 hours weekly spent on scheduling",
            "Frequent understaffing during peak hours",
            "Manual inventory tracking",
            "Poor communication between shifts",
            "High staff turnover (40%)"
          ],
          metric: { value: "4 hrs", label: "Weekly Scheduling Time" }
        },
        after: {
          title: "Streamlined Operations",
          points: [
            "30 minutes weekly for schedule review",
            "Optimized staffing based on demand",
            "Automated inventory alerts",
            "Real-time team communication",
            "Reduced turnover to 25%"
          ],
          metric: { value: "30 min", label: "Weekly Scheduling Time" }
        }
      },
      analytics: {
        before: {
          title: "Limited Insights",
          points: [
            "Basic POS reports only",
            "No customer behavior analysis",
            "Manual sales tracking",
            "Gut-feeling decision making",
            "No performance benchmarking"
          ],
          metric: { value: "Basic", label: "Reporting Level" }
        },
        after: {
          title: "Advanced Analytics",
          points: [
            "Real-time dashboard with 50+ metrics",
            "Customer journey analysis",
            "Automated sales forecasting",
            "Data-driven decision making",
            "Performance benchmarking across locations"
          ],
          metric: { value: "Advanced", label: "Reporting Level" }
        }
      }
    }
  };

  useEffect(() => {
    filterStories();
  }, [activeFilters]);

  const filterStories = () => {
    let filtered = successStories;

    // Apply filters
    Object.keys(activeFilters).forEach(filterType => {
      if (activeFilters[filterType].length > 0) {
        filtered = filtered.filter(story => {
          if (filterType === 'type') {
            return activeFilters[filterType].includes(story.type);
          }
          if (filterType === 'challenge') {
            return activeFilters[filterType].some(challenge => 
              story.challenge.toLowerCase().includes(challenge.toLowerCase()) ||
              story.features.some(feature => 
                feature.toLowerCase().includes(challenge.toLowerCase())
              )
            );
          }
          if (filterType === 'size') {
            const sizeMap = {
              'small': ['Small', '1 location', '2 locations'],
              'medium': ['Medium', '3 locations', '4 locations', '5 locations'],
              'large': ['Large', '10+ locations', '15 locations']
            };
            return sizeMap[activeFilters[filterType][0]]?.some(size => 
              story.size.includes(size)
            );
          }
          return true;
        });
      }
    });

    setFilteredStories(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => {
      const currentFilters = prev[filterType] || [];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(f => f !== value)
        : [...currentFilters, value];
      
      return {
        ...prev,
        [filterType]: newFilters
      };
    });
  };

  const handleClearFilters = () => {
    setActiveFilters({
      type: [],
      challenge: [],
      size: []
    });
  };

  const handleReadMore = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Users" size={16} />
              500+ Success Stories
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Real Restaurants,
              <span className="text-primary"> Real Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how restaurants like yours have transformed their operations, increased revenue, and delighted customers with Fluwsy. Every story is a testament to what's possible when you have the right tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90"
                iconName="Play"
                iconPosition="left"
              >
                Watch Success Stories
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Your Success Story
              </Button>
            </div>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-2xl p-8 shadow-subtle border border-gray-100">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-success mb-2">2.3x</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">14</div>
              <div className="text-sm text-muted-foreground">Days to Results</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </div>
      </section>

      {/* Featured Video Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Hear From Our Customers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch real restaurant owners share their transformation stories and the measurable impact Fluwsy has had on their business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <VideoTestimonial testimonial={videoTestimonials[0]} featured={true} />
            <VideoTestimonial testimonial={videoTestimonials[1]} />
            <VideoTestimonial testimonial={videoTestimonials[2]} />
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Success Stories
              </h2>
              <p className="text-muted-foreground">
                {filteredStories.length} stories found
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onReadMore={handleReadMore}
              />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No stories match your filters
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more success stories
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                iconName="X"
                iconPosition="left"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Transformation in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the dramatic before and after improvements that Fluwsy delivers across all aspects of restaurant operations.
            </p>
          </div>

          <BeforeAfterComparison comparison={beforeAfterComparison} />
        </div>
      </section>

      {/* Success Guarantee */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SuccessGuarantee />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of restaurants that have transformed their operations with Fluwsy. Your success story starts with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="Rocket"
              iconPosition="left"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Utensils" size={20} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold">Fluwsy</span>
            </div>
            <p className="text-white/70 mb-6">
              Transforming restaurants, one success story at a time.
            </p>
            <div className="flex justify-center gap-6 text-sm text-white/70">
              <span>© {new Date().getFullYear()} Fluwsy. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Story Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CustomerSuccessStories;