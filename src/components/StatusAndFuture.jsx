import React from 'react';
import { Check, Circle } from 'lucide-react';
import './StatusAndFuture.css';

const StatusAndFuture = () => {
  return (
    <section className="status-section container">
      <div className="section-header">
        <h2 className="section-title">Prototype Status & Extensibility</h2>
        <p className="section-subtitle">
          IBVAP is designed as a modular platform. Here is the current status of the hackathon prototype and planned future extensions.
        </p>
      </div>

      <div className="status-container">
        <div className="glass-panel status-card">
          <h3 className="text-cyan">Currently Demonstrated</h3>
          <ul className="status-list">
            <li><Check size={18} className="text-cyan" /> Person detection & tracking</li>
            <li><Check size={18} className="text-cyan" /> Persistent track IDs</li>
            <li><Check size={18} className="text-cyan" /> Behavioural analysis (Motion, Loitering)</li>
            <li><Check size={18} className="text-cyan" /> Optical-flow & Crowd convergence</li>
            <li><Check size={18} className="text-cyan" /> Temporal analysis & Adaptive baseline</li>
            <li><Check size={18} className="text-cyan" /> Risk classification engine</li>
            <li><Check size={18} className="text-cyan" /> Virtual fence intrusion detection</li>
            <li><Check size={18} className="text-cyan" /> Night-time context detection</li>
            <li><Check size={18} className="text-cyan" /> Vehicle detection & classification</li>
          </ul>
        </div>

        <div className="glass-panel status-card future-card">
          <h3 className="text-muted">Modular / Planned</h3>
          <ul className="status-list text-muted">
            <li><Circle size={18} /> ANPR (License Plate) integration</li>
            <li><Circle size={18} /> Face recognition modules</li>
            <li><Circle size={18} /> Cross-camera tracking</li>
            <li><Circle size={18} /> Full RTSP/ONVIF deployment</li>
            <li><Circle size={18} /> Command-and-control integration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatusAndFuture;
