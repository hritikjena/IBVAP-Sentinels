import React from 'react';
import { Activity, Camera, Cpu, Zap } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-brand">
          <h1 className="hero-title text-cyan">WatchGrid</h1>
          <h2 className="hero-subtitle">Intelligent Border Video Analytics Platform</h2>
        </div>
        
        <div className="hero-messaging">
          <p className="hero-tagline">
            From CCTV footage to <span className="text-cyan">actionable intelligence.</span>
          </p>
          <p className="hero-description">
            Transforming existing CCTV infrastructure into an intelligent, software-defined surveillance network through real-time AI-powered video analytics.
          </p>
        </div>

        <div className="hero-actions">
          <button 
            className="btn-primary" 
            onClick={() => document.getElementById('explore-system')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the System
          </button>
          <button 
            className="btn-secondary"
            onClick={() => document.getElementById('video-demos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Watch Demonstrations
          </button>
          <button 
            className="btn-outline"
            onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Architecture
          </button>
        </div>

        <div className="capability-indicators">
          <div className="indicator">
            <Zap className="text-yellow" size={20} />
            <span>REAL-TIME AI</span>
          </div>
          <div className="indicator">
            <Activity className="text-cyan" size={20} />
            <span>BEHAVIOURAL ANALYTICS</span>
          </div>
          <div className="indicator">
            <Camera className="text-blue" size={20} />
            <span>VIDEO INTELLIGENCE</span>
          </div>
          <div className="indicator">
            <Cpu className="text-green" size={20} />
            <span>SOFTWARE-DEFINED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
