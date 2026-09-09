import React from 'react';
import { User, Car, Activity, Map, Moon, AlertTriangle, Shield, Clock, Eye, Square } from 'lucide-react';
import './CapabilitiesGrid.css';

const capabilities = [
  {
    id: '01',
    title: 'Human Detection & Tracking',
    icon: <User size={24} />,
    description: 'Detect people in CCTV footage and maintain persistent tracking IDs. Analyzes movement over time rather than treating every frame independently.',
    example: 'PERSON #17 | PERSON #23'
  },
  {
    id: '02',
    title: 'Vehicle Detection & Classification',
    icon: <Car size={24} />,
    description: 'Detect and classify vehicles (Car, Motorcycle, Bus, Truck). Visually separates vehicle detection from person-specific behavioural analysis.',
    example: 'CAR #04 | TRUCK #08'
  },
  {
    id: '03',
    title: 'Behavioural Analytics',
    icon: <Activity size={24} />,
    description: 'Analyze behavioural signals such as motion intensity, local motion irregularity, crowd density, convergence, and loitering.',
    example: 'MOTION: HIGH | LOITERING: TRUE'
  },
  {
    id: '04',
    title: 'Virtual Fence',
    icon: <Map size={24} />,
    description: 'Define restricted zones inside a CCTV scene. Generates an intrusion event when a tracked entity transitions from OUTSIDE → INSIDE.',
    example: 'VIRTUAL FENCE INTRUSION | PERSON #17'
  },
  {
    id: '05',
    title: 'Night-Time Context',
    icon: <Moon size={24} />,
    description: 'Determine night-time conditions using visual brightness analysis. Acts as contextual intelligence combined with suspicious behaviour.',
    example: 'MODE: NIGHT | RISK: ELEVATED'
  },
  {
    id: '06',
    title: 'Suspicious Activity Detection',
    icon: <Eye size={24} />,
    description: 'Combine behavioural and contextual signals to identify potential intrusion, suspicious gathering, or aggressive activity.',
    example: 'EVENT: AGGRESSIVE ACTIVITY'
  },
  {
    id: '07',
    title: 'Risk Assessment',
    icon: <AlertTriangle size={24} />,
    description: 'Combine multiple signals into a contextual risk assessment (NORMAL, RISING RISK, HIGH RISK) with clear, explainable reasons.',
    example: 'RISK: HIGH | REASON: INTRUSION'
  },
  {
    id: '08',
    title: 'Real-Time Alerts & Logging',
    icon: <Clock size={24} />,
    description: 'Display security events as structured alerts containing timestamps, event types, track IDs, risk levels, and risk scores.',
    example: 'TIMESTAMP: 23:41:17 | ALERT: LOGGED'
  },
  {
    id: '09',
    title: 'ANPR Module',
    icon: <Square size={24} />,
    description: 'Integration module for Automatic Number Plate Recognition. Captures and OCRs vehicle license plates in real-time.',
    example: 'VEHICLE #04 | PLATE: DL01AB1234'
  },
  {
    id: '10',
    title: 'Face Detection Module',
    icon: <Shield size={24} />,
    description: 'Software module for face detection and recognition, removing the need for dedicated smart-camera hardware.',
    example: 'FACE DETECTED | ID PENDING'
  }
];

const CapabilitiesGrid = () => {
  return (
    <section id="explore-system" className="capabilities-section container">
      <div className="section-header">
        <h2 className="section-title">Core Capabilities</h2>
        <p className="section-subtitle">
          Advanced analytics modules that transform raw pixels into structured, actionable intelligence.
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((cap) => (
          <div key={cap.id} className="glass-panel capability-card">
            <div className="cap-header">
              <span className="cap-id mono text-cyan">{cap.id}</span>
              <div className="cap-icon">{cap.icon}</div>
            </div>
            <h3 className="cap-title">{cap.title}</h3>
            <p className="cap-desc">{cap.description}</p>
            <div className="cap-example mono">
              {cap.example}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
