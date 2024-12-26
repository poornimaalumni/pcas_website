"use client"

import React from 'react';
import RecentActivitiesSection from '../../../components/RecentActivitiesSection';
import UpcomingEvents from '../../../components/UpcomingEvents';
import GlimpsesSection from '../../../components/GlimpsesSection';

const RecentActivitiesPage = () => {
  return (
    <div className="recent-activities w-full px-8">
      {/* Recent Activities Section */}
      <RecentActivitiesSection />

      {/* Upcoming Events Section */}
      <UpcomingEvents />


      {/* Glimpses Section */}
      <GlimpsesSection />
    </div>
  );
};

export default RecentActivitiesPage;
