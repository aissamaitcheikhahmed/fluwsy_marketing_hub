import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import AboutFluwsy from "pages/about-fluwsy";
import IntegrationsPartners from "pages/integrations-partners";
import CustomerSuccessStories from "pages/customer-success-stories";
import ResourcesHub from "pages/resources-hub";
import ProductFeatures from "pages/product-features";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-fluwsy" element={<AboutFluwsy />} />
        <Route path="/integrations-partners" element={<IntegrationsPartners />} />
        <Route path="/customer-success-stories" element={<CustomerSuccessStories />} />
        <Route path="/resources-hub" element={<ResourcesHub />} />
        <Route path="/product-features" element={<ProductFeatures />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;