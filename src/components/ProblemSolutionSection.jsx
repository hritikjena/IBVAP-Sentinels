import React from 'react';
import { ArrowRight, Eye, ShieldAlert, MonitorPlay, BrainCircuit, ActivitySquare } from 'lucide-react';
import './ProblemSolutionSection.css';

const ProblemSolutionSection = () => {
  return (
    <section className="problem-solution container">
      <div className="section-header">
        <h2 className="section-title">Why IBVAP?</h2>
        <p className="section-subtitle">
          Border-security forces deploy cameras across strategic locations, but raw video requires continuous manual observation. IBVAP changes the paradigm.
        </p>
      </div>

      <div className="comparison-container">
        {/* Traditional CCTV */}
        <div className="glass-panel comparison-card">
          <div className="card-header">
            <MonitorPlay className="text-muted" size={32} />
            <h3 className="text-muted">Traditional CCTV</h3>
          </div>
          
          <div className="flow-visual old-flow">
            <div className="flow-node">Camera</div>
            <ArrowRight className="flow-arrow" />
            <div className="flow-node">Video Stream</div>
            <ArrowRight className="flow-arrow" />
            <div className="flow-node human-node">Human Operator</div>
            <ArrowRight className="flow-arrow text-red" />
            <div className="flow-node danger-node">Manual Interpretation</div>
          </div>
          
          <ul className="problem-list">
            <li>Continuous human monitoring required</li>
            <li>Important events can be missed due to fatigue</li>
            <li>Raw video does not provide actionable intelligence</li>
          </ul>
        </div>

        {/* IBVAP */}
        <div className="glass-panel comparison-card ibvap-card">
          <div className="card-header">
            <ShieldAlert className="text-cyan" size={32} />
            <h3 className="text-cyan">IBVAP</h3>
            <span className="badge">Software-Defined</span>
          </div>
          
          <div className="flow-visual modern-flow">
            <div className="flow-node">Camera</div>
            <ArrowRight className="flow-arrow text-cyan" />
            <div className="flow-node highlight">AI Detection</div>
            <ArrowRight className="flow-arrow text-cyan" />
            <div className="flow-node highlight">Behaviour Analysis</div>
            <ArrowRight className="flow-arrow text-cyan" />
            <div className="flow-node highlight">Risk Assessment</div>
            <ArrowRight className="flow-arrow text-cyan" />
            <div className="flow-node alert-node">Instant Alert</div>
          </div>
          
          <ul className="benefit-list">
            <li>No need to replace existing CCTV infrastructure</li>
            <li>Analyzes sequences of movement over time</li>
            <li>Translates raw pixels into contextual intelligence</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
