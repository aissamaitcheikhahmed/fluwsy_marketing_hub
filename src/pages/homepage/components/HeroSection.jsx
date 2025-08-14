import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';
import VariableProximity from './VariableProximity';
import { useRef } from 'react';
import Threads from '../../../components/Threads';

const HeroSection = () => {
  const [activeDemo, setActiveDemo] = useState('reservations');

  const demoTabs = [
    {
      id: 'reservations',
      name: 'Reservations',
      icon: 'Calendar',
      description: 'Streamline booking management'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: 'BarChart3',
      description: 'Real-time insights dashboard'
    },
    {
      id: 'staff',
      name: 'Staff',
      icon: 'Users',
      description: 'Efficient team scheduling'
    }
  ];

  const renderDemoContent = () => {
    switch (activeDemo) {
      case 'reservations':
        return (
          <div className="bg-white rounded-lg shadow-elevated p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground">Today's Reservations</h4>
              <span className="text-sm text-success font-medium">87% Capacity</span>
            </div>
            <div className="space-y-3">
              {[
                { time: '7:00 PM', party: 'Johnson Party', size: 4, status: 'confirmed' },
                { time: '7:30 PM', party: 'Smith Family', size: 6, status: 'pending' },
                { time: '8:00 PM', party: 'Davis Couple', size: 2, status: 'confirmed' }
              ].map((reservation, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-medium text-foreground">{reservation.party}</p>
                      <p className="text-sm text-muted-foreground">{reservation.time} • {reservation.size} guests</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    reservation.status === 'confirmed' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    {reservation.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white rounded-lg shadow-elevated p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Revenue Analytics</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Today's Revenue</p>
                <p className="text-2xl font-bold text-primary">$2,847</p>
                <p className="text-xs text-success">+12% vs yesterday</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Avg Order Value</p>
                <p className="text-2xl font-bold text-secondary">$34.50</p>
                <p className="text-xs text-success">+5% vs last week</p>
              </div>
            </div>
            <div className="h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-end justify-around p-4">
              {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                <div 
                  key={index} 
                  className="bg-primary rounded-t w-6 transition-all duration-300"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
        );
      case 'staff':
        return (
          <div className="bg-white rounded-lg shadow-elevated p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Staff Schedule</h4>
            <div className="space-y-3">
              {[
                { name: 'Sarah Johnson', role: 'Manager', shift: '2:00 PM - 10:00 PM', status: 'active' },
                { name: 'Mike Chen', role: 'Server', shift: '5:00 PM - 11:00 PM', status: 'break' },
                { name: 'Emma Davis', role: 'Chef', shift: '4:00 PM - 12:00 AM', status: 'active' }
              ].map((staff, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">{staff.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{staff.name}</p>
                      <p className="text-sm text-muted-foreground">{staff.role} • {staff.shift}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    staff.status === 'active' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    {staff.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const containerRef = useRef(null);

  return (
    <section className="relative bg-gradient-to-br from-background via-primary/5 to-secondary/5 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 gradient-brand"></div>



      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6" ref={containerRef}>
          <VariableProximity
            label={"Restaurant management shouldn't be harder than running a restaurant"}
            className="text-4xl lg:text-8xl font-bold text-foreground leading-tight"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
          <p className="text-3xl text-primary leading-relaxed max-w-3xl mx-auto">
          Thousands of reservations one simple platform
          </p>
        </div>


        <div className="w-full flex justify-center my-8">
          <img
            src="/assets/images/TabletMockup.jpg"
            alt="Tablet Mockup"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        <div className="absolute inset-0 opacity-30">

      </div>
      </div>
    </section>
  );
};

export default HeroSection;