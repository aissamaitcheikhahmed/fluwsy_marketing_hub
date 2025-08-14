import React from 'react';
import Header from '../../components/ui/Header';
import IntegrationHero from './components/IntegrationHero';
import IntegrationMap from './components/IntegrationMap';
import POSIntegrations from './components/POSIntegrations';
import APIDocumentation from './components/APIDocumentation';
import PartnerTestimonials from './components/PartnerTestimonials';
import RequestIntegration from './components/RequestIntegration';

const IntegrationsPartnersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <IntegrationHero />
        <IntegrationMap />
        <POSIntegrations />
        <APIDocumentation />
        <PartnerTestimonials />
        <RequestIntegration />
      </main>
    </div>
  );
};

export default IntegrationsPartnersPage;