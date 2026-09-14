import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import './VideoDemonstrations.css';

const videos = [
  {
    id: 'virtual-fence',
    title: 'Virtual Fence illustration',
    status: 'HIGH RISK',
    statusColor: 'text-red',
    statusBg: 'bg-red',
    description: 'A tracked person approaches and crosses a configured virtual restricted zone.',
    features: ['Person Tracking', 'Virtual Fence', 'Intrusion Alert'],
    metadata: '⚠ VIRTUAL FENCE INTRUSION | ENTITY: PERSON #17 | RISK: HIGH',
    src: '/videos/virtual fence.mp4'
  },
  {
    id: 'vehicle-tracking',
    title: 'Vehicle detections & tracking',
    status: 'MONITORING',
    statusColor: 'text-cyan',
    statusBg: 'bg-cyan',
    description: 'Demonstrates detection, classification and tracking of vehicles in CCTV footage.',
    features: ['Vehicle Classification', 'Tracking ID', 'Movement Tracking'],
    metadata: 'CAR #04 | TRUCK #08 | MOTORCYCLE #12',
    src: '/videos/Tracking Vehicles.mp4'
  },
  {
    id: 'human-detection',
    title: 'Human detection',
    status: 'MONITORING',
    statusColor: 'text-cyan',
    statusBg: 'bg-cyan',
    description: 'Detects and maintains persistent tracking IDs for humans within the camera view.',
    features: ['Human Detection', 'Persistent Tracking'],
    metadata: 'PERSON #42 | PERSON #43',
    src: '/videos/Person Tracking.mp4'
  },
  {
    id: 'intent-normal',
    title: 'Normal activity',
    status: 'NORMAL',
    statusColor: 'text-green',
    statusBg: 'bg-green',
    description: 'Demonstrates normal movement without significant behavioural or contextual anomalies.',
    features: ['Person Detection', 'Stable Risk Level'],
    metadata: 'RISK: NORMAL | PERSONS: 2 | VEHICLES: 0',
    src: '/videos/intent_normal.mp4'
  },
  {
    id: 'intent-aggression',
    title: 'Aggressive activity',
    status: 'CRITICAL',
    statusColor: 'text-red',
    statusBg: 'bg-red',
    description: 'Demonstrates detection of aggressive activity involving a weapon (knife).',
    features: ['Weapon Detection', 'Aggression Detection', 'Motion Intensity'],
    metadata: 'RISK: CRITICAL | EVENT: AGGRESSION (WEAPON DETECTED)',
  },
  {
    id: 'night-surveillance',
    title: 'Night-time Surveillance',
    status: 'RISING RISK',
    statusColor: 'text-red',
    statusBg: 'bg-red',
    description: 'Demonstrates low-light tracking with event detection including unusual vehicle stops and suspicious gatherings.',
    features: ['Low Light Detection', 'Suspicious Gathering', 'Unusual Vehicle Stop'],
    metadata: 'RISK: RISING (3.8) | PERSONS: 4 | VEHICLES: 4',
    src: '/videos/Night Video.mp4'
  }
];

const VideoDemonstrations = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    // When active video changes, reload the video element to play the new source
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented or interrupted", e));
    }
  }, [activeVideo]);

  return (
    <section id="video-demos" className="video-demos-section container">
      <div className="section-header">
        <h2 className="section-title">See WatchGrid in Action</h2>
        <p className="section-subtitle">
          Real-world scenarios demonstrating how WatchGrid converts raw video into actionable intelligence.
        </p>
      </div>

      <div className="demo-layout">
        {/* Main Video Player */}
        <div className="main-video-container glass-panel">
          <div className="video-wrapper">
            <video 
              ref={videoRef}
              controls 
              autoPlay
              muted
              playsInline
              className="demo-video" 
            >
              <source src={`${import.meta.env.BASE_URL}${activeVideo.src.startsWith('/') ? activeVideo.src.slice(1) : activeVideo.src}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
          </div>
          
          <div className="video-info">
            <div className="info-header">
              <h3>{activeVideo.title}</h3>
              <span className={`risk-badge ${activeVideo.statusBg}`}>
                {activeVideo.status}
              </span>
            </div>
            <p className="video-desc">{activeVideo.description}</p>
            <div className="video-meta mono">
              {activeVideo.metadata}
            </div>
            <div className="video-features">
              {activeVideo.features.map(f => (
                <span key={f} className="feature-tag">{f}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Playlist / Selector */}
        <div className="video-playlist">
          {videos.map(v => (
            <button 
              key={v.id} 
              className={`playlist-item glass-panel ${activeVideo.id === v.id ? 'active' : ''}`}
              onClick={() => setActiveVideo(v)}
            >
              <div className="item-header">
                <span className="item-title">{v.title}</span>
                <span className={`item-status ${v.statusColor} mono`}>{v.status}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoDemonstrations;
