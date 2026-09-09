import React from 'react'
import HeroSection from './components/HeroSection'
import ProblemSolutionSection from './components/ProblemSolutionSection'
import CapabilitiesGrid from './components/CapabilitiesGrid'
import BehaviouralIntelligenceSection from './components/BehaviouralIntelligenceSection'
import VideoDemonstrations from './components/VideoDemonstrations'
import ExplainableAlerts from './components/ExplainableAlerts'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import TemporalIntelligence from './components/TemporalIntelligence'
import StatusAndFuture from './components/StatusAndFuture'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <ProblemSolutionSection />
      <CapabilitiesGrid />
      <BehaviouralIntelligenceSection />
      <VideoDemonstrations />
      <div className="side-by-side-section container">
        <ExplainableAlerts />
        <ArchitectureDiagram />
      </div>
      <TemporalIntelligence />
      <StatusAndFuture />
      
      <footer className="footer glass-panel">
        <div className="container">
          <h3 className="text-cyan">From Cameras to Context.</h3>
          <p>
            <strong>IBVAP</strong> transforms existing CCTV infrastructure into an intelligent, context-aware surveillance network designed to improve situational awareness and accelerate security response.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
