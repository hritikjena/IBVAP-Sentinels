import React from 'react';
import { LineChart, ArrowRight } from 'lucide-react';
import './TemporalIntelligence.css';

const TemporalIntelligence = () => {
  return (
    <section className="temporal-intelligence-section container">
      <div className="section-header">
        <h2 className="section-title">Temporal Intelligence</h2>
        <p className="section-subtitle">
          Based on SENTINEL technology, IBVAP maintains a temporal history of scenes rather than evaluating frames in isolation.
        </p>
      </div>

      <div className="temporal-grid">
        <div className="glass-panel temporal-card">
          <h3>Adaptive Baseline</h3>
          <p className="text-muted">
            The system learns normal scene characteristics (motion level, density) during an initial baseline period, allowing it to identify deviations specific to that camera's environment.
          </p>
          
          <div className="baseline-visual">
            <div className="baseline-box">
              <span className="mono text-cyan">BASELINE</span>
              <div className="baseline-metrics">
                <span>Normal Activity</span>
                <span>Normal Density</span>
              </div>
            </div>
            
            <ArrowRight className="text-muted" />
            
            <div className="baseline-box current-box">
              <span className="mono text-yellow">CURRENT BEHAVIOUR</span>
              <div className="baseline-metrics">
                <span className="text-yellow">Deviation Detected</span>
                <span className="text-red">Risk Increases</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel temporal-card">
          <h3>Event Timeline Memory</h3>
          <p className="text-muted">
            IBVAP understands the sequence of events. A single frame of a person running might be normal, but running after loitering near a restricted zone escalates risk.
          </p>
          
          <div className="timeline-log mono">
            <div className="log-entry">
              <span className="log-time">23:41:02</span>
              <span className="log-event">PERSON #17 DETECTED</span>
            </div>
            <div className="log-entry">
              <span className="log-time">23:41:14</span>
              <span className="log-event text-yellow">LOITERING DETECTED</span>
            </div>
            <div className="log-entry">
              <span className="log-time">23:41:21</span>
              <span className="log-event text-yellow">APPROACHING RESTRICTED ZONE</span>
            </div>
            <div className="log-entry">
              <span className="log-time">23:41:34</span>
              <span className="log-event text-red">HIGH RISK ALERT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemporalIntelligence;
