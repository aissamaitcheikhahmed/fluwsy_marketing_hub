import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const RequestIntegration = () => {
  const [formData, setFormData] = useState({
    integrationName: '',
    category: '',
    businessName: '',
    email: '',
    description: '',
    priority: 'medium'
  });

  const [votes, setVotes] = useState({});

  const categoryOptions = [
    { value: 'pos', label: 'POS Systems' },
    { value: 'payment', label: 'Payment Processors' },
    { value: 'accounting', label: 'Accounting Software' },
    { value: 'marketing', label: 'Marketing Tools' },
    { value: 'delivery', label: 'Delivery Platforms' },
    { value: 'inventory', label: 'Inventory Management' },
    { value: 'other', label: 'Other' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'critical', label: 'Critical for Business' }
  ];

  const popularRequests = [
    {
      id: 1,
      name: "DoorDash Integration",
      category: "Delivery Platforms",
      votes: 127,
      description: "Direct integration with DoorDash for order management and analytics",
      status: "In Development",
      estimatedCompletion: "Q2 2025"
    },
    {
      id: 2,
      name: "Uber Eats API",
      category: "Delivery Platforms", 
      votes: 98,
      description: "Seamless connection with Uber Eats for unified order processing",
      status: "Planned",
      estimatedCompletion: "Q3 2025"
    },
    {
      id: 3,
      name: "Sage Accounting",
      category: "Accounting Software",
      votes: 76,
      description: "Financial data synchronization with Sage accounting platform",
      status: "Under Review",
      estimatedCompletion: "TBD"
    },
    {
      id: 4,
      name: "OpenTable Sync",
      category: "Reservation Systems",
      votes: 64,
      description: "Bi-directional reservation sync with OpenTable platform",
      status: "Planned",
      estimatedCompletion: "Q4 2025"
    },
    {
      id: 5,
      name: "Shopify POS",
      category: "POS Systems",
      votes: 52,
      description: "Integration with Shopify POS for retail restaurant operations",
      status: "Under Review",
      estimatedCompletion: "TBD"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Integration request submitted:', formData);
    // Reset form
    setFormData({
      integrationName: '',
      category: '',
      businessName: '',
      email: '',
      description: '',
      priority: 'medium'
    });
    alert('Integration request submitted successfully!');
  };

  const handleVote = (requestId) => {
    setVotes(prev => ({
      ...prev,
      [requestId]: (prev[requestId] || 0) + 1
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development':
        return 'bg-blue-100 text-blue-800';
      case 'Planned':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request New Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't see the integration you need? Let us know what tools you'd like to connect with Fluwsy. 
            We prioritize integrations based on customer demand and business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Request Form */}
          <div className="bg-white rounded-xl shadow-subtle p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Plus" size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-foreground">Submit Integration Request</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Integration Name"
                type="text"
                name="integrationName"
                value={formData.integrationName}
                onChange={handleInputChange}
                placeholder="e.g., DoorDash, Uber Eats, Sage Accounting"
                required
              />

              <Select
                label="Category"
                options={categoryOptions}
                value={formData.category}
                onChange={(value) => handleSelectChange('category', value)}
                placeholder="Select integration category"
                required
              />

              <Input
                label="Your Business Name"
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Restaurant or business name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                description="We'll contact you with updates on this integration"
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Describe how this integration would benefit your restaurant operations..."
                  required
                />
              </div>

              <Select
                label="Business Priority"
                options={priorityOptions}
                value={formData.priority}
                onChange={(value) => handleSelectChange('priority', value)}
                description="How important is this integration for your business?"
              />

              <Button type="submit" variant="default" fullWidth>
                Submit Request
              </Button>
            </form>
          </div>

          {/* Popular Requests */}
          <div className="bg-white rounded-xl shadow-subtle p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="TrendingUp" size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-foreground">Popular Requests</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Vote for integrations you'd like to see prioritized. The most requested integrations 
              get fast-tracked in our development roadmap.
            </p>

            <div className="space-y-4">
              {popularRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-subtle transition-brand">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{request.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{request.category}</div>
                      <p className="text-sm text-muted-foreground">{request.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleVote(request.id)}
                        className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-brand text-sm font-medium"
                      >
                        <Icon name="ChevronUp" size={16} />
                        {request.votes + (votes[request.id] || 0)}
                      </button>
                      
                      {request.estimatedCompletion !== 'TBD' && (
                        <div className="text-sm text-muted-foreground">
                          <Icon name="Calendar" size={14} className="inline mr-1" />
                          {request.estimatedCompletion}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <Icon name="Info" size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-blue-900 text-sm">Development Timeline</div>
                  <div className="text-blue-800 text-sm mt-1">
                    Popular integrations typically take 2-4 months to develop and test. 
                    We'll keep you updated on progress via email.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Support */}
        <div className="mt-16 bg-white rounded-xl shadow-subtle p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Implementation Support
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Once your requested integration is available, we provide comprehensive support 
              to ensure smooth implementation and optimal performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserCheck" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Dedicated Specialist</h4>
              <p className="text-sm text-muted-foreground">
                Personal integration specialist to guide you through the setup process
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="PlayCircle" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Video Tutorials</h4>
              <p className="text-sm text-muted-foreground">
                Step-by-step video guides for every integration setup and configuration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">
                Round-the-clock technical support for integration issues and questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestIntegration;