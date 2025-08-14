import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InteractiveCalculator = ({ calculator, onCalculate }) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let calculatedResult;
    
    switch (calculator.id) {
      case 'table-turnover':
        const currentRevenue = inputs.tables * inputs.avgCheck * inputs.turnsPerDay * 30;
        const optimizedTurns = Math.ceil(inputs.turnsPerDay * 1.3);
        const optimizedRevenue = inputs.tables * inputs.avgCheck * optimizedTurns * 30;
        calculatedResult = {
          currentRevenue: currentRevenue.toLocaleString(),
          optimizedRevenue: optimizedRevenue.toLocaleString(),
          increase: ((optimizedRevenue - currentRevenue) / currentRevenue * 100).toFixed(1),
          additionalRevenue: (optimizedRevenue - currentRevenue).toLocaleString()
        };
        break;
        
      case 'staff-scheduling':
        const currentCost = inputs.staff * inputs.hourlyRate * inputs.hoursPerWeek * 4;
        const optimizedCost = currentCost * 0.85; // 15% reduction
        calculatedResult = {
          currentCost: currentCost.toLocaleString(),
          optimizedCost: optimizedCost.toLocaleString(),
          savings: (currentCost - optimizedCost).toLocaleString(),
          percentage: '15'
        };
        break;
        
      case 'reservation-roi':
        const manualCost = inputs.reservations * 2 * 4.33; // 2 minutes per reservation
        const systemCost = 99; // Monthly subscription
        const timeSaved = inputs.reservations * 1.5 * 4.33; // 1.5 minutes saved per reservation
        calculatedResult = {
          timeSaved: Math.round(timeSaved),
          monthlySavings: (manualCost - systemCost).toLocaleString(),
          roi: (((manualCost - systemCost) / systemCost) * 100).toFixed(0),
          paybackPeriod: '2'
        };
        break;
        
      default:
        calculatedResult = { message: 'Calculation completed successfully!' };
    }
    
    setResult(calculatedResult);
    setIsCalculating(false);
    onCalculate(calculator, inputs, calculatedResult);
  };

  const renderInputs = () => {
    return calculator.inputs.map(input => (
      <div key={input.field} className="mb-4">
        <Input
          label={input.label}
          type="number"
          placeholder={input.placeholder}
          value={inputs[input.field] || ''}
          onChange={(e) => handleInputChange(input.field, e.target.value)}
          description={input.description}
        />
      </div>
    ));
  };

  const renderResult = () => {
    if (!result) return null;

    switch (calculator.id) {
      case 'table-turnover':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-3">Optimization Results</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-green-600">Current Monthly Revenue</p>
                <p className="font-bold text-green-800">${result.currentRevenue}</p>
              </div>
              <div>
                <p className="text-green-600">Optimized Revenue</p>
                <p className="font-bold text-green-800">${result.optimizedRevenue}</p>
              </div>
              <div className="col-span-2 pt-2 border-t border-green-200">
                <p className="text-green-600">Additional Monthly Revenue</p>
                <p className="font-bold text-green-800 text-lg">${result.additionalRevenue} ({result.increase}% increase)</p>
              </div>
            </div>
          </div>
        );
        
      case 'staff-scheduling':
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">Scheduling Optimization</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-blue-600">Current Monthly Cost</p>
                <p className="font-bold text-blue-800">${result.currentCost}</p>
              </div>
              <div>
                <p className="text-blue-600">Optimized Cost</p>
                <p className="font-bold text-blue-800">${result.optimizedCost}</p>
              </div>
              <div className="col-span-2 pt-2 border-t border-blue-200">
                <p className="text-blue-600">Monthly Savings</p>
                <p className="font-bold text-blue-800 text-lg">${result.savings} ({result.percentage}% reduction)</p>
              </div>
            </div>
          </div>
        );
        
      case 'reservation-roi':
        return (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-3">ROI Analysis</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-purple-600">Time Saved Monthly</p>
                <p className="font-bold text-purple-800">{result.timeSaved} hours</p>
              </div>
              <div>
                <p className="text-purple-600">Monthly Savings</p>
                <p className="font-bold text-purple-800">${result.monthlySavings}</p>
              </div>
              <div className="col-span-2 pt-2 border-t border-purple-200">
                <p className="text-purple-600">ROI & Payback</p>
                <p className="font-bold text-purple-800 text-lg">{result.roi}% ROI • {result.paybackPeriod} month payback</p>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-800">{result.message}</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-gray-100 p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
          <Icon name={calculator.icon} size={24} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{calculator.title}</h3>
          <p className="text-sm text-muted-foreground">{calculator.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {renderInputs()}
        
        <Button 
          variant="default" 
          onClick={handleCalculate}
          loading={isCalculating}
          disabled={calculator.inputs.some(input => !inputs[input.field])}
          fullWidth
          iconName="Calculator"
          iconPosition="left"
        >
          {isCalculating ? 'Calculating...' : 'Calculate Results'}
        </Button>

        {renderResult()}
      </div>
    </div>
  );
};

export default InteractiveCalculator;