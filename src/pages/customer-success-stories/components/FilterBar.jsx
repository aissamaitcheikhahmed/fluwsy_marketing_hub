import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ activeFilters, onFilterChange, onClearFilters }) => {
  const filterCategories = [
    {
      id: 'type',
      label: 'Restaurant Type',
      options: [
        { value: 'fine-dining', label: 'Fine Dining' },
        { value: 'casual', label: 'Casual Dining' },
        { value: 'quick-service', label: 'Quick Service' },
        { value: 'cafe', label: 'Café & Bakery' }
      ]
    },
    {
      id: 'challenge',
      label: 'Challenge Solved',
      options: [
        { value: 'reservations', label: 'Reservation Management' },
        { value: 'staff', label: 'Staff Management' },
        { value: 'analytics', label: 'Analytics & Insights' },
        { value: 'operations', label: 'Operations' }
      ]
    },
    {
      id: 'size',
      label: 'Restaurant Size',
      options: [
        { value: 'small', label: 'Small (1-2 locations)' },
        { value: 'medium', label: 'Medium (3-10 locations)' },
        { value: 'large', label: 'Large (10+ locations)' }
      ]
    }
  ];

  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0);

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-gray-100 p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Filter Success Stories</h3>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="self-start lg:self-auto"
          >
            Clear All Filters
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filterCategories.map((category) => (
          <div key={category.id} className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {category.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.options.map((option) => {
                const isActive = activeFilters[category.id]?.includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => onFilterChange(category.id, option.value)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-brand ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-brand'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;