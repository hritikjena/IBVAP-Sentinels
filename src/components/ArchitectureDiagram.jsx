import React from 'react';
import { Network, ArrowDown, Database, Cpu, Shield, AlertCircle } from 'lucide-react';
import './ArchitectureDiagram.css';

const ArchitectureDiagram = () => {
  return (
    <section id="architecture" className="architecture-section container">
      <div className="section-header">
        <h2 className="section-title">System Architecture</h2>
        <p className="section-subtitle">
          How IBVAP processes video streams in real-time without dedicated hardware.
        </p>
      </div>

      <div className="architecture-container">
        <div className="arch-flow">
          <div className="arch-node input-node">
            <Network size={24} className="text-muted" />
            <span>EXISTING IP CCTV</span>
          </div>
          
          <ArrowDown className="arch-arrow text-muted" />
          
          <div className="arch-node logic-node">
            <span>VIDEO INGESTION (RTSP / IP STREAM)</span>
          </div>
          
          <ArrowDown className="arch-arrow text-cyan" />
          
          <div className="arch-block">
            <div className="block-title">
              <Cpu size={20} className="text-cyan" />
              <span>AI PERCEPTION ENGINE</span>
            </div>
            <div className="block-columns">
              <div className="block-col">PERSON DETECTION</div>
              <div className="block-col">VEHICLE DETECTION</div>
            </div>
          </div>
          
          <ArrowDown className="arch-arrow text-cyan" />
          
          <div className="arch-node logic-node">
            <span>MULTI-OBJECT TRACKING (PERSISTENT IDs)</span>
          </div>
          
          <ArrowDown className="arch-arrow text-cyan" />
          
          <div className="arch-block outline-block">
            <div className="block-title">
              <ActivityIcon />
              <span>BEHAVIOURAL ENGINE</span>
            </div>
            <div className="block-grid">
              <span>Motion Intensity</span>
              <span>Local Motion Irregularity</span>
              <span>Crowd Density</span>
              <span>Convergence</span>
              <span>Loitering</span>
              <span>Interaction</span>
            </div>
          </div>
          
          <ArrowDown className="arch-arrow text-cyan" />
          
          <div className="arch-block outline-block">
            <div className="block-title">
              <Shield size={20} className="text-cyan" />
              <span>BORDER CONTEXT ENGINE</span>
            </div>
            <div className="block-grid col-2">
              <span>Virtual Fence</span>
              <span>Restricted Zones</span>
              <span>Night / Day</span>
              <span>Vehicle Context</span>
            </div>
          </div>
          
          <ArrowDown className="arch-arrow text-cyan" />
          
          <div className="arch-node risk-node">
            <AlertCircle size={24} className="text-yellow" />
            <span>TEMPORAL RISK ENGINE</span>
          </div>
          
          <ArrowDown className="arch-arrow text-yellow" />
          
          <div className="arch-node output-node">
            <Database size={24} className="text-red" />
            <span>REAL-TIME ALERTS & LOGGING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default ArchitectureDiagram;
