import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import './ExplainableAlerts.css';

const ExplainableAlerts = () => {
  return (
    <section className="explainable-alerts-section container">
      <div className="section-header">
        <h2 className="section-title">Explainable Alerts</h2>
        <p className="section-subtitle">
          Instead of just flashing "HIGH RISK", WatchGrid provides full context: WHAT happened, WHO was involved, WHERE, WHEN, and WHY the alert was triggered.
        </p>
      </div>

      <div className="alert-visualization">
        <div className="glass-panel alert-box">
          <div className="alert-box-header bg-red-alert">
            <AlertTriangle size={32} />
            <h2>HIGH RISK</h2>
          </div>
          
          <div className="alert-box-body">
            <div className="alert-meta-grid mono">
              <div className="meta-item">
                <span className="meta-label">Event:</span>
                <span className="meta-value text-red">Aggressive Activity (Weapon)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Entity:</span>
                <span className="meta-value">Person #23</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Camera:</span>
                <span className="meta-value">BOP-04</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Time:</span>
                <span className="meta-value">23:41:17</span>
              </div>
            </div>

            <div className="alert-reasons">
              <h3 className="reasons-title text-muted">Reasons</h3>
              <ul className="reasons-list">
                <li>
                  <CheckCircle2 size={18} className="text-red" />
                  <span>Weapon detected (Knife)</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-yellow" />
                  <span>Aggressive posture</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-yellow" />
                  <span>High motion intensity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainableAlerts;
