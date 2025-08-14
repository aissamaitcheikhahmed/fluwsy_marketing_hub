import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import ResourceCard from './components/ResourceCard';
import InteractiveCalculator from './components/InteractiveCalculator';
import WebinarCard from './components/WebinarCard';
import FilterSidebar from './components/FilterSidebar';
import NewsletterSignup from './components/NewsletterSignup';
import FeaturedContent from './components/FeaturedContent';

const ResourcesHub = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [activeFilters, setActiveFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for resources
  const resources = [
    {
      id: 1,
      type: 'guide',
      category: 'Restaurant Analytics',
      title: 'The Complete Guide to Restaurant Analytics',
      description: `Master the art of data-driven restaurant management with comprehensive analytics strategies.\nLearn how to track key metrics, analyze customer behavior, and make informed decisions that drive profitability and growth.`,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      author: {
        name: 'Sarah Chen',
        role: 'Restaurant Analytics Expert',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      readTime: '15 min read',
      downloads: '2,847',
      featured: true,
      publishedDate: '2025-01-10'
    },
    {
      id: 2,
      type: 'report',
      category: 'Industry Trends',
      title: 'Restaurant Technology Trends 2025',
      description: `Comprehensive analysis of emerging technologies reshaping the restaurant industry.\nDiscover the latest innovations in POS systems, AI-driven analytics, and customer experience platforms.`,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=500&h=300&fit=crop',
      author: {
        name: 'Michael Rodriguez',
        role: 'Industry Research Director',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      readTime: '22 min read',
      downloads: '1,923',
      featured: true,
      publishedDate: '2025-01-08'
    },
    {
      id: 3,
      type: 'guide',
      category: 'Staff Management',
      title: 'Staff Scheduling Optimization Strategies',
      description: `Streamline your staff scheduling process with proven optimization techniques.\nReduce labor costs while maintaining excellent service quality through strategic scheduling approaches.`,
      image: 'https://images.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg?w=500&h=300&fit=crop',
      author: {
        name: 'Jennifer Park',
        role: 'Operations Consultant',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
      },
      readTime: '12 min read',
      downloads: '3,156',
      featured: true,
      publishedDate: '2025-01-05'
    },
    {
      id: 4,
      type: 'guide',
      category: 'Customer Experience',
      title: 'Customer Retention in the Digital Age',
      description: `Build lasting customer relationships through digital engagement strategies.\nImplement loyalty programs, personalized marketing, and exceptional service delivery systems.`,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      author: {
        name: 'David Thompson',
        role: 'Customer Experience Specialist',
        avatar: 'https://randomuser.me/api/portraits/men/38.jpg'
      },
      readTime: '18 min read',
      downloads: '2,234',
      featured: false,
      publishedDate: '2025-01-03'
    },
    {
      id: 5,
      type: 'report',
      category: 'Financial Management',
      title: 'Restaurant Profitability Analysis 2025',
      description: `Deep dive into restaurant financial performance metrics and optimization strategies.\nUnderstand cost structures, revenue streams, and profitability drivers in modern restaurants.`,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=500&h=300&fit=crop',
      author: {
        name: 'Lisa Wang',
        role: 'Financial Analyst',
        avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
      },
      readTime: '25 min read',
      downloads: '1,678',
      featured: false,
      publishedDate: '2024-12-28'
    },
    {
      id: 6,
      type: 'guide',
      category: 'Marketing',
      title: 'Digital Marketing for Restaurants',
      description: `Comprehensive guide to restaurant digital marketing strategies.\nMaster social media marketing, online advertising, and customer acquisition techniques.`,
      image: 'https://images.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg?w=500&h=300&fit=crop',
      author: {
        name: 'Alex Johnson',
        role: 'Digital Marketing Expert',
        avatar: 'https://randomuser.me/api/portraits/men/29.jpg'
      },
      readTime: '20 min read',
      downloads: '2,891',
      featured: false,
      publishedDate: '2024-12-25'
    }
  ];

  // Mock data for interactive calculators
  const calculators = [
    {
      id: 'table-turnover',
      title: 'Table Turnover Optimization',
      description: 'Calculate potential revenue increases through optimized table management',
      icon: 'Calculator',
      inputs: [
        { field: 'tables', label: 'Number of Tables', placeholder: '20', description: 'Total dining tables in your restaurant' },
        { field: 'avgCheck', label: 'Average Check Size ($)', placeholder: '45', description: 'Average amount per customer visit' },
        { field: 'turnsPerDay', label: 'Current Turns per Day', placeholder: '3', description: 'How many times each table turns over daily' }
      ]
    },
    {
      id: 'staff-scheduling',
      title: 'Staff Scheduling Optimizer',
      description: 'Optimize labor costs while maintaining service quality',
      icon: 'Users',
      inputs: [
        { field: 'staff', label: 'Number of Staff', placeholder: '15', description: 'Total number of staff members' },
        { field: 'hourlyRate', label: 'Average Hourly Rate ($)', placeholder: '18', description: 'Average hourly wage across all staff' },
        { field: 'hoursPerWeek', label: 'Hours per Week', placeholder: '35', description: 'Average hours worked per staff member weekly' }
      ]
    },
    {
      id: 'reservation-roi',
      title: 'Reservation System ROI',
      description: 'Calculate return on investment for reservation management systems',
      icon: 'Calendar',
      inputs: [
        { field: 'reservations', label: 'Monthly Reservations', placeholder: '800', description: 'Number of reservations handled monthly' },
        { field: 'timePerReservation', label: 'Time per Reservation (min)', placeholder: '3', description: 'Average time spent managing each reservation manually' }
      ]
    }
  ];

  // Mock data for webinars
  const webinars = [
    {
      id: 1,
      title: 'Mastering Restaurant Analytics for Growth',
      description: 'Learn how to leverage data analytics to drive restaurant growth and profitability in this comprehensive session.',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop',
      speaker: {
        name: 'Sarah Chen',
        title: 'Analytics Expert at Fluwsy',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      date: '2025-01-25T14:00:00Z',
      duration: '45 min',
      category: 'Analytics',
      attendees: '1,247',
      topics: ['Data Analysis', 'KPI Tracking', 'Revenue Optimization', 'Customer Insights']
    },
    {
      id: 2,
      title: 'Staff Management Best Practices',
      description: 'Discover proven strategies for effective staff management, scheduling optimization, and team productivity enhancement.',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=500&h=300&fit=crop',
      speaker: {
        name: 'Michael Rodriguez',
        title: 'Operations Director',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      date: '2025-01-15T10:00:00Z',
      duration: '60 min',
      category: 'Operations',
      attendees: '892',
      topics: ['Scheduling', 'Performance Management', 'Training', 'Retention']
    },
    {
      id: 3,
      title: 'Customer Experience Excellence',
      description: 'Transform your customer experience with digital tools and service optimization strategies.',
      thumbnail: 'https://images.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg?w=500&h=300&fit=crop',
      speaker: {
        name: 'Jennifer Park',
        title: 'Customer Success Manager',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
      },
      date: '2024-12-20T16:00:00Z',
      duration: '50 min',
      category: 'Customer Experience',
      attendees: '1,456',
      topics: ['Service Quality', 'Digital Engagement', 'Loyalty Programs', 'Feedback Systems']
    }
  ];

  // Mock filter data
  const filters = {
    contentTypes: [
      { value: 'guide', label: 'Guides', count: 4 },
      { value: 'report', label: 'Reports', count: 2 },
      { value: 'tool', label: 'Tools', count: 3 },
      { value: 'webinar', label: 'Webinars', count: 3 }
    ],
    categories: [
      { value: 'analytics', label: 'Restaurant Analytics', count: 2 },
      { value: 'staff', label: 'Staff Management', count: 2 },
      { value: 'customer', label: 'Customer Experience', count: 2 },
      { value: 'marketing', label: 'Marketing', count: 1 },
      { value: 'financial', label: 'Financial Management', count: 1 }
    ],
    restaurantTypes: [
      { value: 'fine-dining', label: 'Fine Dining', count: 3 },
      { value: 'casual', label: 'Casual Dining', count: 5 },
      { value: 'fast-casual', label: 'Fast Casual', count: 4 },
      { value: 'qsr', label: 'Quick Service', count: 2 }
    ],
    difficultyLevels: [
      { value: 'beginner', label: 'Beginner', count: 4 },
      { value: 'intermediate', label: 'Intermediate', count: 6 },
      { value: 'advanced', label: 'Advanced', count: 2 }
    ],
    readingTimes: [
      { value: 'short', label: 'Under 10 min', count: 2 },
      { value: 'medium', label: '10-20 min', count: 6 },
      { value: 'long', label: 'Over 20 min', count: 4 }
    ]
  };

  const tabs = [
    { id: 'all', label: 'All Resources', icon: 'Grid3X3' },
    { id: 'guides', label: 'Guides', icon: 'BookOpen' },
    { id: 'reports', label: 'Reports', icon: 'BarChart3' },
    { id: 'tools', label: 'Interactive Tools', icon: 'Calculator' },
    { id: 'webinars', label: 'Webinars', icon: 'Video' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'title', label: 'Title A-Z' }
  ];

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({});
  };

  const handleDownload = (resource) => {
    console.log('Downloading resource:', resource.title);
    // Simulate download
  };

  const handleShare = (resource) => {
    console.log('Sharing resource:', resource.title);
    // Simulate share functionality
  };

  const handleCalculate = (calculator, inputs, result) => {
    console.log('Calculator result:', { calculator: calculator.title, inputs, result });
  };

  const handleWebinarRegister = (webinar) => {
    console.log('Registering for webinar:', webinar.title);
  };

  const handleWebinarWatch = (webinar) => {
    console.log('Watching webinar:', webinar.title);
  };

  const handleNewsletterSubscribe = (email) => {
    console.log('Newsletter subscription:', email);
  };

  const handleViewResource = (resource) => {
    console.log('Viewing resource:', resource.title);
  };

  const getFilteredContent = () => {
    let content = [];
    
    switch (activeTab) {
      case 'guides':
        content = resources.filter(r => r.type === 'guide');
        break;
      case 'reports':
        content = resources.filter(r => r.type === 'report');
        break;
      case 'tools':
        content = calculators;
        break;
      case 'webinars':
        content = webinars;
        break;
      default:
        content = [...resources, ...calculators, ...webinars];
    }

    // Apply search filter
    if (searchQuery) {
      content = content.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return content;
  };

  const featuredResources = resources.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Restaurant Success <span className="text-primary">Resources Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive knowledge center with guides, tools, and insights to help you master restaurant management and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search resources, guides, tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                placeholder="Sort by"
                className="w-full sm:w-auto min-w-[150px]"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Popular searches:</span>
              {['Analytics', 'Staff Management', 'Customer Retention', 'ROI Calculator'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 bg-white rounded-full text-sm text-primary hover:bg-primary/10 transition-brand border border-gray-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedContent 
            featuredResources={featuredResources}
            onViewResource={handleViewResource}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-80">
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  iconName="Filter"
                  iconPosition="left"
                  fullWidth
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>
              
              <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                <FilterSidebar
                  filters={filters}
                  activeFilters={activeFilters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Content Tabs */}
              <div className="mb-8">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 overflow-x-auto">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-brand ${
                          activeTab === tab.id
                            ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                        }`}
                      >
                        <Icon name={tab.icon} size={16} className="mr-2" />
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content Grid */}
              <div className="space-y-8">
                {activeTab === 'tools' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {calculators.map(calculator => (
                      <InteractiveCalculator
                        key={calculator.id}
                        calculator={calculator}
                        onCalculate={handleCalculate}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'webinars' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webinars.map(webinar => (
                      <WebinarCard
                        key={webinar.id}
                        webinar={webinar}
                        onRegister={handleWebinarRegister}
                        onWatch={handleWebinarWatch}
                      />
                    ))}
                  </div>
                )}

                {(activeTab === 'all' || activeTab === 'guides' || activeTab === 'reports') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredContent()
                      .filter(item => item.type === 'guide' || item.type === 'report' || activeTab === 'all')
                      .map(resource => (
                        <ResourceCard
                          key={resource.id}
                          resource={resource}
                          onDownload={handleDownload}
                          onShare={handleShare}
                        />
                      ))}
                  </div>
                )}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" iconName="ChevronDown" iconPosition="right">
                  Load More Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup onSubscribe={handleNewsletterSubscribe} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Utensils" size={20} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold">Fluwsy</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering restaurants with intelligent management solutions. Transform your operations with data-driven insights and streamlined processes.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Twitter" className="text-gray-300 hover:text-white" />
                <Button variant="ghost" size="sm" iconName="Facebook" className="text-gray-300 hover:text-white" />
                <Button variant="ghost" size="sm" iconName="Linkedin" className="text-gray-300 hover:text-white" />
                <Button variant="ghost" size="sm" iconName="Instagram" className="text-gray-300 hover:text-white" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-brand">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Reports</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Tools</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-brand">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Community</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Fluwsy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-brand">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-brand">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-brand">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourcesHub;