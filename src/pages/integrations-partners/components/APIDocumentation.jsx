import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const APIDocumentation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const codeExamples = {
    authentication: `// Authentication Example
const apiKey = 'your_api_key_here';
const headers = {
  'Authorization': 'Bearer ' + apiKey,
  'Content-Type': 'application/json'
};

fetch('https://api.fluwsy.com/v1/reservations', {
  method: 'GET',
  headers: headers
})
.then(response => response.json())
.then(data => console.log(data));`,
    
    reservations: `// Create Reservation
const reservationData = {
  customer_name: "John Doe",
  party_size: 4,
  date: "2025-01-20",
  time: "19:00",
  table_preference: "window",
  special_requests: "Birthday celebration"
};

fetch('https://api.fluwsy.com/v1/reservations', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(reservationData)
})
.then(response => response.json())
.then(reservation => {
  console.log('Reservation created:', reservation.id);
});`,

    webhooks: `// Webhook Handler Example
app.post('/webhook/fluwsy', (req, res) => {
  const event = req.body;
  
  switch(event.type) {
    case 'reservation.created':
      handleNewReservation(event.data);
      break;
    case 'reservation.cancelled':
      handleCancelledReservation(event.data);
      break;
    case 'table.status_changed':
      updateTableStatus(event.data);
      break;
  }
  
  res.status(200).send('OK');
});`
  };

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/v1/reservations',
      description: 'Retrieve all reservations',
      parameters: 'date, status, customer_id'
    },
    {
      method: 'POST',
      endpoint: '/v1/reservations',
      description: 'Create a new reservation',
      parameters: 'customer_name, party_size, date, time'
    },
    {
      method: 'PUT',
      endpoint: '/v1/reservations/{id}',
      description: 'Update existing reservation',
      parameters: 'reservation_id, updated_fields'
    },
    {
      method: 'DELETE',
      endpoint: '/v1/reservations/{id}',
      description: 'Cancel a reservation',
      parameters: 'reservation_id, cancellation_reason'
    },
    {
      method: 'GET',
      endpoint: '/v1/tables',
      description: 'Get table availability',
      parameters: 'date, time, party_size'
    },
    {
      method: 'POST',
      endpoint: '/v1/customers',
      description: 'Create customer profile',
      parameters: 'name, email, phone, preferences'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Book' },
    { id: 'authentication', name: 'Authentication', icon: 'Key' },
    { id: 'endpoints', name: 'Endpoints', icon: 'Globe' },
    { id: 'webhooks', name: 'Webhooks', icon: 'Webhook' },
    { id: 'examples', name: 'Examples', icon: 'Code' }
  ];

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            API Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build custom integrations with Fluwsy's RESTful API. Complete documentation, 
            code examples, and developer resources to get you started quickly.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 bg-white">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-brand ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Getting Started</h3>
                  <p className="text-muted-foreground mb-6">
                    The Fluwsy API is organized around REST principles. Our API has predictable resource-oriented URLs, 
                    accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <Icon name="Zap" size={24} className="text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Fast & Reliable</h4>
                      <p className="text-sm text-muted-foreground">99.9% uptime with sub-200ms response times</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <Icon name="Shield" size={24} className="text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Secure</h4>
                      <p className="text-sm text-muted-foreground">OAuth 2.0 and API key authentication</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <Icon name="Code" size={24} className="text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Developer Friendly</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive docs and SDKs</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Base URL</h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    https://api.fluwsy.com/v1
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'authentication' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">API Authentication</h3>
                  <p className="text-muted-foreground mb-6">
                    Authenticate your API requests using your API key. Include your API key in the Authorization header 
                    of every request to the Fluwsy API.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Authentication Example</h4>
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <pre className="text-sm font-mono whitespace-pre-wrap">{codeExamples.authentication}</pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Icon name="AlertTriangle" size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-yellow-800">Keep your API key secure</div>
                      <div className="text-yellow-700 text-sm mt-1">
                        Never expose your API key in client-side code. Always make API calls from your server.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'endpoints' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">API Endpoints</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete list of available API endpoints for managing reservations, tables, and customer data.
                  </p>
                </div>

                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 text-xs font-bold rounded ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-800">{endpoint.endpoint}</code>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{endpoint.description}</p>
                      <div className="text-sm">
                        <span className="font-medium text-foreground">Parameters: </span>
                        <span className="text-muted-foreground">{endpoint.parameters}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'webhooks' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Webhooks</h3>
                  <p className="text-muted-foreground mb-6">
                    Webhooks allow you to receive real-time notifications when events occur in your Fluwsy account. 
                    Set up webhook endpoints to automatically sync data with your systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Webhook Events</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      'reservation.created',
                      'reservation.updated',
                      'reservation.cancelled',
                      'table.status_changed',
                      'customer.created',
                      'payment.completed'
                    ].map((event, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                        <code className="text-sm font-mono text-primary">{event}</code>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Webhook Handler Example</h4>
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <pre className="text-sm font-mono whitespace-pre-wrap">{codeExamples.webhooks}</pre>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Code Examples</h3>
                  <p className="text-muted-foreground mb-6">
                    Practical examples to help you get started with common API operations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Creating a Reservation</h4>
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <pre className="text-sm font-mono whitespace-pre-wrap">{codeExamples.reservations}</pre>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">SDKs Available</h4>
                    <div className="space-y-2">
                      {['JavaScript/Node.js', 'Python', 'PHP', 'Ruby', 'Java', 'C#'].map((sdk, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span className="text-sm text-muted-foreground">{sdk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">Rate Limits</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• 1000 requests per hour</div>
                      <div>• 100 requests per minute</div>
                      <div>• Burst limit: 20 requests</div>
                      <div>• Enterprise: Custom limits</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Need Help Getting Started?</h3>
            <p className="text-muted-foreground mb-6">
              Our developer support team is here to help you integrate with Fluwsy's API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">
                Contact Developer Support
              </Button>
              <Button variant="outline">
                Join Developer Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIDocumentation;