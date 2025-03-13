import React from 'react';
import '../styles/login.css';
import Feature from './Feature';
import { lightBulb, rocket, security } from '../assets/icons/icons';

function Features() {
  return (
    <div className="features-section">
      <Feature
        featureIcon={rocket}
        title="Boost Your Productivity"
        description="Stay on top of tasks with smart reminders and organized categories. Never miss a deadline again."
      />
      <Feature
        featureIcon={security}
        title="Secure and Seamless Access"
        description="Your data is protected with industry-standard encryption and JWT security. Effortless login with Google or email ensures a smooth start every time."
      />
      <Feature
        featureIcon={lightBulb}
        title="Insights that Matter"
        description="Track your progress with detailed analytics and reports. Understand how you’re performing and where to focus with clear, actionable insights."
      />
    </div>
  );
}

export default Features;
