import React from 'react';
import { ArrowDown } from 'lucide-react';
import './BehaviouralIntelligenceSection.css';

const BehaviouralIntelligenceSection = () => {
  return (
    <section className="behaviour-section container">
      <div className="section-header">
        <h2 className="section-title">
          "Detection tells you what is there. <br/>
          <span className="text-cyan">Behaviour tells you what is changing.</span>"
        </h2>
        <p className="section-subtitle">
          A single CCTV frame provides limited information. IBVAP analyzes sequences of movement over time to detect temporal behavioural risk escalation.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        <div className="timeline-step">
          <div className="step-marker normal"></div>
          <div className="step-content glass-panel">
            <h4 className="text-muted">NORMAL</h4>
            <p>Baseline scene activity</p>
          </div>
        </div>

        <ArrowDown className="timeline-arrow text-muted" size={20} />

        <div className="timeline-step">
          <div className="step-marker normal"></div>
          <div className="step-content glass-panel">
            <h4 className="text-cyan">PERSON DETECTED</h4>
            <p>Persistent ID assigned: PERSON #17</p>
          </div>
        </div>

        <ArrowDown className="timeline-arrow text-cyan" size={20} />

        <div className="timeline-step">
          <div className="step-marker rising"></div>
          <div className="step-content glass-panel border-yellow">
            <h4 className="text-yellow">LOITERING</h4>
            <p>Extended dwell time in localized area</p>
          </div>
        </div>

        <ArrowDown className="timeline-arrow text-yellow" size={20} />

        <div className="timeline-step">
          <div className="step-marker rising"></div>
          <div className="step-content glass-panel border-yellow">
            <h4 className="text-yellow">APPROACHING RESTRICTED ZONE</h4>
            <p>Trajectory intersects virtual fence</p>
          </div>
        </div>

        <ArrowDown className="timeline-arrow text-yellow" size={20} />

        <div className="timeline-step">
          <div className="step-marker rising"></div>
          <div className="step-content glass-panel border-yellow">
            <h4 className="text-yellow">NIGHT-TIME MOVEMENT</h4>
            <p>Contextual modifier applied</p>
          </div>
        </div>

        <ArrowDown className="timeline-arrow text-yellow" size={20} />

        <div className="timeline-step">
          <div className="step-marker high"></div>
          <div className="step-content glass-panel border-red">
            <h4 className="text-red">VIRTUAL FENCE CROSSING</h4>
            <p>Intrusion detected into restricted zone</p>
          </div>
        </div>

        <ArrowDown className="timeline-arrow text-red" size={20} />

        <div className="timeline-step">
          <div className="step-marker high pulse"></div>
          <div className="step-content glass-panel border-red high-risk">
            <h4 className="text-red">HIGH RISK</h4>
            <p>Alert generated with explainable reasons</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehaviouralIntelligenceSection;
