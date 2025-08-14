import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, activeFilters, onFilterChange, onClearFilters }) => {
  const handleFilterToggle = (category, value) => {
    const currentFilters = activeFilters[category] || [];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange(category, newFilters);
  };

  const getTotalActiveFilters = () => {
    return Object.values(activeFilters).reduce((total, filters) => total + filters.length, 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-gray-100 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        {getTotalActiveFilters() > 0 && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onClearFilters}
            className="text-primary hover:text-primary/80"
          >
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Content Type Filter */}
        <div>
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Icon name="FileText" size={16} className="mr-2" />
            Content Type
          </h4>
          <div className="space-y-2">
            {filters.contentTypes.map(type => (
              <Checkbox
                key={type.value}
                label={`${type.label} (${type.count})`}
                checked={(activeFilters.contentTypes || []).includes(type.value)}
                onChange={() => handleFilterToggle('contentTypes', type.value)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Icon name="Tag" size={16} className="mr-2" />
            Category
          </h4>
          <div className="space-y-2">
            {filters.categories.map(category => (
              <Checkbox
                key={category.value}
                label={`${category.label} (${category.count})`}
                checked={(activeFilters.categories || []).includes(category.value)}
                onChange={() => handleFilterToggle('categories', category.value)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Restaurant Type Filter */}
        <div>
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Icon name="Utensils" size={16} className="mr-2" />
            Restaurant Type
          </h4>
          <div className="space-y-2">
            {filters.restaurantTypes.map(type => (
              <Checkbox
                key={type.value}
                label={`${type.label} (${type.count})`}
                checked={(activeFilters.restaurantTypes || []).includes(type.value)}
                onChange={() => handleFilterToggle('restaurantTypes', type.value)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Difficulty Level Filter */}
        <div>
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Icon name="BarChart3" size={16} className="mr-2" />
            Difficulty Level
          </h4>
          <div className="space-y-2">
            {filters.difficultyLevels.map(level => (
              <Checkbox
                key={level.value}
                label={`${level.label} (${level.count})`}
                checked={(activeFilters.difficultyLevels || []).includes(level.value)}
                onChange={() => handleFilterToggle('difficultyLevels', level.value)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Reading Time Filter */}
        <div>
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Icon name="Clock" size={16} className="mr-2" />
            Reading Time
          </h4>
          <div className="space-y-2">
            {filters.readingTimes.map(time => (
              <Checkbox
                key={time.value}
                label={`${time.label} (${time.count})`}
                checked={(activeFilters.readingTimes || []).includes(time.value)}
                onChange={() => handleFilterToggle('readingTimes', time.value)}
                size="sm"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {getTotalActiveFilters() > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h4 className="font-medium text-foreground mb-3">Active Filters ({getTotalActiveFilters()})</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, values]) =>
              values.map(value => (
                <span
                  key={`${category}-${value}`}
                  className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {value}
                  <button
                    onClick={() => handleFilterToggle(category, value)}
                    className="ml-1 hover:text-primary/80"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;